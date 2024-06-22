import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Idea() {
  return (
    <Card className="w-1/2 bg-slate-100">
      <CardHeader>
        <CardTitle className="text-center">Title</CardTitle>
        <h1 className="text-lg">User</h1>
        <CardDescription>Date</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          expedita nesciunt quia eligendi dolore, ullam unde in, cum quidem
          facere fuga deleniti. Cupiditate vel excepturi, aspernatur quae enim
          voluptas architecto.
        </p>
      </CardContent>
    </Card>
  )
}
