import React, { Component } from 'react';
import Profile from '../Profile/index'

class App extends Component {
  render() {
      return <Profile/>
  }
}

export default App;

// let input;
// console.log(this.props);
// return (
//     <div className="App">
//         {this.props.loading === true ? "Loading" : this.props.data.search && this.props.data.search.edges.map(data =>
//             <ul key={data.node.id}>
//                 <li style={{fontWeight: 'bold'}}><a href={data.node.url}>{data.node.name}</a></li>
//                 <li>{data.node.description}</li>
//             </ul>
//         )}
//         <Mutation mutation={ADD_STAR}>
//             {(updateTopics) => (
//                 <div>
//                     <form onSubmit={e => {
//                         e.preventDefault();
//                         updateTopics({ variables: { topicNames: input.value.split(',') } });
//                         input.value = "";
//                     }}>
//                         <input
//                             ref={node => {
//                                 input = node;
//                             }}
//                             type="text"
//                         />
//                         <button type="submit">change topicNames</button>
//                     </form>
//                 </div>
//             )}
//         </Mutation>
//     </div>
// );

// const repoQuery = gql`
//   query($name: String!){
//     search(query: $name, last: 10, type: REPOSITORY) {
//       edges {
//         node {
//           ... on Repository {
//             id
//             name
//             description
//             url
//           }
//         }
//       }
//     }
//   }
// `;
//
// const ADD_STAR = gql`
//   mutation($topicNames: [String!]!){
//       updateTopics(input: {repositoryId: "MDEwOlJlcG9zaXRvcnkxNTAwODM3Mjc=", topicNames: $topicNames}){
//       repository {
//         id
//       }
//     }
//   }
// `;
//
// const AppWithData = graphql(
//     repoQuery,
//     {
//         options: {
//             variables: {
//                 name: "tuts"
//             }
//         }
//     }
// )(App);
