import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Idea({
  idea: {
    title,
    body,
    createdAt,
    user: { name },
  },
}) {
  let date = new Date(+createdAt)
  date = date.toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Australia/Sydney",
  })
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
    </Card>
  )
}
