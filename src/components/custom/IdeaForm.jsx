import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function IdeaForm({ prevValues = { username: "" }, onSubmit }) {
  const form = useForm({
    defaultValues: prevValues,
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <Input placeholder="shadcn" {...field} />
      <Input placeholder="shadcn" {...field} />
      <Input placeholder="shadcn" {...field} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
