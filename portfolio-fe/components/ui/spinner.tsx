import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }

export function SpinnerButton() {
  return (
    <div className="my-auto flex flex-col items-center gap-4">
      <Spinner data-icon="inline-start" />
      Loading...
    </div>
  )
}
