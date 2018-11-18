import gql from "graphql-tag";

const REPOSITORY_FRAGMENT = gql`
    fragment rep on Repository {
        id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
    }
`;

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            ...rep
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export {
    GET_REPOSITORIES_OF_CURRENT_USER,
    REPOSITORY_FRAGMENT
}
