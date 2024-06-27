import { useMutation } from "@tanstack/react-query"

import IdeaForm from "@/components/custom/IdeaForm"
import { useToast } from "@/components/ui/use-toast"

import { createIdea } from "@/apis/idea"
import { graphqlError } from "@/utils/error"
import { useNavigate } from "react-router"

export default function CreateIdeaPage() {
  const ideaMutation = useMutation({
    mutationFn: (variables) => {
      return createIdea(variables)
    },
  })

  const { toast } = useToast()

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      const createIdeaResp = await ideaMutation.mutateAsync(values)
      const errors = graphqlError(createIdeaResp)
      if (errors) {
        toast({
          title: errors,
        })
      } else {
        toast({
          title: "Idea Posted",
        })
        navigate("/")
      }
    } catch (err) {
      console.log(err)
      toast({
        title: "Something went wrong!",
      })
    }
  }

  return <IdeaForm onSubmit={onSubmit} />
}
