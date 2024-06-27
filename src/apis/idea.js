import { gql } from "graphql-request"

import { graphqlError } from "@/utils/error"
import { graphQLClient } from "./common"

const getIdeas = async (query, toast) => {
  const response = await graphQLClient.rawRequest(query)
  const errors = graphqlError(response)
  if (errors) {
    toast({
      title: errors,
    })
  }
  return response
}

const createIdea = async (variables) => {
  const query = gql`
    mutation CreateIdea($title: String!, $body: String!) {
      createIdea(title: $title, body: $body) {
        id
        title
        body
        user {
          name
        }
      }
    }
  `
  return await graphQLClient.rawRequest(query, variables)
}

export { getIdeas, createIdea }
