
import { Construction, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function ComingSoon({
  title = "Coming Soon",
  description = "This feature is currently under development. We're working hard to make it available soon.",
}) {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Construction className="size-10" />
      </div>

      <span className="mb-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Coming Soon
      </span>

      <h2 className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <p className="mt-2 text-xs text-muted-foreground">
        Thank you for your patience!
      </p>

      <Button
        variant="outline"
        className="mt-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 size-4" />
        Go Back
      </Button>
    </div>
  )
}
