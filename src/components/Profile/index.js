import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql, Query} from 'react-apollo';
import Loading from '../Loading/index';
import {RepositoryList} from '../Repository';
import ErrorMessage from '../ErrorMessage/index';
import {GET_REPOSITORIES_OF_CURRENT_USER} from '../Repository/queries';


const Profile = () => (
    <Query
        query={GET_REPOSITORIES_OF_CURRENT_USER}
    >
        {({data, loading, error, refetch}) => {
            if (error) {
                return <ErrorMessage error={error}/>;
            }
            const {viewer} = data;

            if (loading || !viewer) {
                return <Loading/>;
            }

            return (
                <div>
                    <button onClick={() => refetch()} />
                    {/*{viewer.login} - {viewer.name}*/}
                    <RepositoryList repositories={viewer.repositories}/>
                </div>
            )
        }}

    </Query>
);


export default Profile;
