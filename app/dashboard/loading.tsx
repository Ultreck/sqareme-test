import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-4">
        <Skeleton className="h-6 w-1/4 mb-4" />
        <Skeleton className="h-72 w-full" />
      </div>

      <div className="border rounded-lg p-4">
        <Skeleton className="h-6 w-1/4 mb-4" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between py-2 border-b last:border-0"
          >
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
