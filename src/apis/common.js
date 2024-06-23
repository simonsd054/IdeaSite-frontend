import { gql, GraphQLClient } from "graphql-request"

const endpoint = "http://localhost:8000/api/graphql"

const graphQLClient = new GraphQLClient(
  endpoint
  // , {
  //   headers: {
  //     authorization: `Bearer MY_TOKEN`,
  //   },
  // }
)

export { endpoint, graphQLClient }
