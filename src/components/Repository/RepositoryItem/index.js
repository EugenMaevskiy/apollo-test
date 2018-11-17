import React from 'react';
import Link from '../../Link/index';
import gql from 'graphql-tag';
import { graphql, Mutation } from 'react-apollo';
import { GET_REPOSITORIES_OF_CURRENT_USER } from '../queries';

const ADD_STAR = gql`
    mutation($id: ID!) {
        addStar(input: { starrableId: $id }) {
          starrable {
            id
            viewerHasStarred
          }
        }
      }
    `
;

const REMOVE_STAR = gql`
    mutation($id: ID!) {
        removeStar(input: { starrableId: $id }) {
          starrable {
            id
            viewerHasStarred
          }
        }
      }
    `
;

const UPDATE_SUBSCRIPTION = gql`
    mutation($id: ID!, $state: SubscriptionState!) {
        updateSubscription(input: { subscribableId: $id, state: $state }) {
          subscribable {
            id
          }
        }
      }
    `
;

const RepositoryItem = ({
    id,
    name,
    url,
    descriptionHTML,
    primaryLanguage,
    owner,
    stargazers,
    watchers,
    viewerSubscription,
    viewerHasStarred,
    mutate,
}) =>
    {
        const handleUpdateSubscription = () => {
            mutate({
                variables: { id, state: viewerSubscription === 'UNSUBSCRIBED' ? 'SUBSCRIBED' : 'UNSUBSCRIBED'},
                refetchQueries: [ {query: GET_REPOSITORIES_OF_CURRENT_USER}]
            })
        };

        return (<div>
            <div className="RepositoryItem-title">
                <h2>
                    <Link href={url}>{name}</Link>
                    {viewerSubscription === 'UNSUBSCRIBED' ? (
                                <button
                                    onClick={handleUpdateSubscription}>{watchers.totalCount} Subcscribe
                                </button>
                    ) : (
                                <button
                                    onClick={handleUpdateSubscription}>{watchers.totalCount} Unsubcscribe
                                </button>
                    )}

                </h2>
                {!viewerHasStarred ? (
                    <Mutation mutation={ADD_STAR} variables={{id}}>
                        {(addStar) => (
                            <button
                                onClick={addStar}>{stargazers.totalCount} Stars
                            </button>
                        )}
                    </Mutation>
                ) :
                    (
                        <Mutation mutation={REMOVE_STAR} variables={{id}}>
                            {(removeStar) => (
                                <button
                                    onClick={removeStar}>{stargazers.totalCount} Stars
                                </button>
                            )}
                        </Mutation>
                    )
                }

            </div>
            <div className="RepositoryItem-description">
                <div
                    className="RepositoryItem-description-info"
                    dangerouslySetInnerHTML={{ __html: descriptionHTML }}
                />
                <div className="RepositoryItem-description-details">
                    <div>
                        {primaryLanguage && (
                            <span>Language: {primaryLanguage.name}</span>
                        )}
                    </div>
                    <div>
                        {owner && (
                            <span>
              Owner: <a href={owner.url}>{owner.login}</a>
            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
        )
    };


export default graphql(UPDATE_SUBSCRIPTION)(RepositoryItem);
