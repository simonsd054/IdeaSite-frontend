import { useQuery } from "@tanstack/react-query"
import { gql } from "graphql-request"

import Idea from "@/components/custom/Idea"
import { getIdeas } from "@/apis/idea"
import { Loader2 } from "lucide-react"

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["ideas"],
    queryFn: () => {
      return getIdeas(
        gql`
          {
            ideas {
              id
              title
              body
              createdAt
              user {
                name
              }
            }
          }
        `
      )
    },
  })

  return (
    <div className="flex flex-col items-center gap-5">
      {isLoading ? (
        <Loader2 />
      ) : (
        data.ideas.map((idea) => <Idea key={idea.id} idea={idea} />)
      )}
    </div>
  )
}
