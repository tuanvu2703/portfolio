import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonAVT() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-125 w-125 rounded-full border-8" />
    </div>
  )
}
