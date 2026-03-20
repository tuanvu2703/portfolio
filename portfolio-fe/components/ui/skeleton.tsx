import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

//
export function SkeletonIMG() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="(max-width: 768px) 100vw, 50vw object-cover" />
    </div>
  )
}

//
export function SkeletonAVT() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-125 w-125 rounded-full border-8" />
    </div>
  )
}