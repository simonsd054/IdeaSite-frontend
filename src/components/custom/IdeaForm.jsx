import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import FormInput from "./form/FormInput"

export default function IdeaForm({ prevValues = { username: "" }, onSubmit }) {
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

        <FormInput
          id="email"
          registerName="email"
          label="Email Address"
          placeholder="Email Address"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address format",
            },
          }}
          errors={errors}
        />

        <FormInput
          id="password"
          registerName="password"
          label="Password"
          placeholder="Password"
          register={register}
          validation={{
            required: "Password is required",
            // to trigger the match of password and confirmPassword
            validate: () => {
              trigger("confirmPassword")
              return true
            },
          }}
          errors={errors}
          type="password"
        />

        <FormInput
          id="confirmPassword"
          registerName="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          register={register}
          validation={{
            required: "Confirm Password is required",
            validate: (value, formValues) =>
              value === formValues.password ||
              "Password and Confirm Password must match",
          }}
          errors={errors}
          type="password"
        />

        <FormInput
          id="address"
          registerName="address"
          label="Address"
          placeholder="Address"
          register={register}
          errors={errors}
        />

        {/* <div className="space-y-2 mb-7">
          <Label className={`${errors.gender && "text-red-700"}`}>Gender</Label>
          <Select
            {...genderRegisterRest}
            defaultValue={getValues("gender")}
            onValueChange={(value) => {
              onGenderChange({ target: { name: "gender", value } })
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a gender</SelectLabel>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}

        <FormInput
          id="phone"
          registerName="phone"
          label="Phone"
          placeholder="Phone"
          register={register}
          validation={{
            required: "Phone is required",
          }}
          errors={errors}
          type="number"
        />

        <Button disabled={isSubmitting} type="submit">
          Post Idea
        </Button>
      </form>
    </div>
  )
}
