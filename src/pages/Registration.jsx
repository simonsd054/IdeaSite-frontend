import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FormInput from "@/components/custom/FormInput"
import { useToast } from "@/components/ui/use-toast"

import { registerUser } from "@/apis/user"
import { graphqlError } from "@/utils/error"
import { useGlobalContext } from "@/utils/reducer"
import { graphQLClient } from "@/apis/common"

export default function Registration() {
  const { dispatch } = useGlobalContext()

  const userMutation = useMutation({
    mutationFn: (variables) => {
      return registerUser(variables)
    },
  })

  const { toast } = useToast()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      gender: "",
      phone: "",
    },
  })

  const {
    ref: genderRegisterRef,
    onChange: onGenderChange,
    ...genderRegisterRest
  } = register("gender")

  const onSubmit = async (values) => {
    try {
      const registerResp = await userMutation.mutateAsync(values)
      const errors = graphqlError(registerResp)
      if (errors) {
        toast({
          title: errors,
        })
      } else {
        const token = registerResp?.data?.register?.token
        toast({
          title: "Registration Successful",
        })
        dispatch({
          type: "setToken",
          data: token,
        })
        graphQLClient.setHeader("authorization", `Bearer ${token}`)
        navigate("/")
      }
    } catch (err) {
      toast({
        title: "Something went wrong!",
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <form className="w-6/12" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          registerName="name"
          label="Full Name"
          placeholder="Full Name"
          register={register}
          validation={{
            required: "Full Name is required",
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

        <div className="space-y-2 mb-7">
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
        </div>

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
          Register
        </Button>
      </form>
    </div>
  )
}
