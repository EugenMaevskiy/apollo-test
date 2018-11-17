import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loading from '../Loading/index';
import {RepositoryList} from '../Repository';
import ErrorMessage from '../ErrorMessage/index';
import { GET_REPOSITORIES_OF_CURRENT_USER } from '../Repository/queries';


const Profile = ({data, loading, error}) => {
    if (error) {
        return <ErrorMessage error={error}/>;
    }
    const {viewer} = data;

    if (loading || !viewer) {
        return <Loading/>;
    }

    return (
        <div>
            {/*{viewer.login} - {viewer.name}*/}
            <RepositoryList repositories={viewer.repositories}/>
        </div>
    )
};


export default graphql(GET_REPOSITORIES_OF_CURRENT_USER)(Profile);
