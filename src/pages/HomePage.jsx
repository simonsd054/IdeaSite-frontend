import { useQuery } from "@tanstack/react-query"
import { gql } from "graphql-request"
import { Loader2 } from "lucide-react"

import Idea from "@/components/custom/Idea"
import { getIdeas } from "@/apis/idea"
import { useToast } from "@/components/ui/use-toast"

export default function HomePage() {
  const { toast } = useToast()
  const { data, isPending, isSuccess } = useQuery({
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
        `,
        toast
      )
    },
  })

  return (
    <div className="flex flex-col items-center gap-5">
      {isPending ? (
        <Loader2 />
      ) : (
        data?.data?.ideas?.map((idea) => <Idea key={idea.id} idea={idea} />)
      )}
    </div>
  )
}
