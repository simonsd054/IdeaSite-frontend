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

export { getIdeas }
