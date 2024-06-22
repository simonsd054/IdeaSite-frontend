import Idea from "@/components/custom/Idea"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-5">
      {[1, 2, 3, 4, 5].map((_) => (
        <Idea />
      ))}
    </div>
  )
}
