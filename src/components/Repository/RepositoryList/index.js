import React from 'react';
import { RepositoryItem } from '../index'

const RepositoryList = ({repositories}) => (
    repositories.edges.map(({node}) => (
        <div key={node.id}>
            <RepositoryItem {...node}/>
        </div>
    ))
)


export default RepositoryList;
