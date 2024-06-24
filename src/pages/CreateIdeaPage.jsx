import IdeaForm from "@/components/custom/IdeaForm"

export default function CreateIdeaPage() {
  const onSubmit = (values) => {
    console.log(values)
  }

  return <IdeaForm onSubmit={onSubmit} />
}
