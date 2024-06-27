import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"

import FormInput from "./form/FormInput"
import FormTextArea from "./form/FormTextArea"

export default function IdeaForm({ prevValues = {}, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: prevValues,
  })

  return (
    <div className="flex flex-col items-center">
      <form className="w-6/12" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="title"
          registerName="title"
          label="Title"
          placeholder="Title"
          register={register}
          validation={{
            required: "Title is required",
          }}
          errors={errors}
        />

        <FormTextArea
          id="body"
          registerName="body"
          label="Body"
          placeholder="Body"
          register={register}
          validation={{
            required: "Body is required",
          }}
          errors={errors}
          cols="50"
        />

        <Button disabled={isSubmitting} type="submit">
          Post Idea
        </Button>
      </form>
    </div>
  )
}
