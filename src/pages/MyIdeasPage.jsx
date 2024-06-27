import IdeaList from "@/components/custom/IdeaList"

export default function MyIdeasPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">My Ideas</h2>
      <IdeaList queryKey="myIdeas" queryName="myIdeas" />
    </div>
  )
}
