import { GraphQLClient } from "graphql-request"

const endpoint = "http://localhost:8000/api/graphql"

const graphQLClient = new GraphQLClient(endpoint, {
  errorPolicy: "all",
})

const token = localStorage.getItem("token")

if (token) {
  graphQLClient.setHeader("authorization", `Bearer ${token}`)
}

export { endpoint, graphQLClient }
