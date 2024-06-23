import { gql } from "graphql-request"
import { graphQLClient } from "./common"

const getIdeas = async (query) => {
  return graphQLClient.request(query)
}

export { getIdeas }
