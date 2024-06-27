import { EditIcon, Trash } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"

import { deleteIdea } from "@/apis/idea"
import { graphqlError } from "@/utils/error"
import { useGlobalContext } from "@/utils/reducer"
import { Link } from "react-router-dom"

export default function Idea({
  idea: {
    id,
    title,
    body,
    createdAt,
    user: { id: userId, name },
  },
}) {
  let date = new Date(+createdAt)
  date = date.toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Australia/Sydney",
  })

  const { store } = useGlobalContext()

  const queryClient = useQueryClient()

  const deleteIdeaMutation = useMutation({
    mutationFn: (variables) => {
      return deleteIdea(variables)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ideas"] })
      queryClient.invalidateQueries({ queryKey: ["myIdeas"] })
    },
  })

  const { toast } = useToast()

  const onClickDelete = async () => {
    try {
      const deleteIdeaResp = await deleteIdeaMutation.mutateAsync({ id })
      const errors = graphqlError(deleteIdeaResp)
      if (errors) {
        toast({
          title: errors,
        })
      } else {
        toast({
          title: "Idea Deleted",
        })
      }
    } catch (err) {
      console.log(err)
      toast({
        title: "Something went wrong!",
      })
    }
  }

  return (
    <Card className="w-1/2 bg-slate-100">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <h1 className="text-lg">{name}</h1>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      {store?.user?.id === userId && (
        <CardFooter className="flex justify-around">
          <Link to={`/ideas/${id}/edit`}>
            <Button variant="outline">
              <EditIcon className="mr-2 h-4 w-4" /> Edit
            </Button>
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to delete this idea?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  idea and remove it our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction onClick={onClickDelete}>
                  Yes
                </AlertDialogAction>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      )}
    </Card>
  )
}
