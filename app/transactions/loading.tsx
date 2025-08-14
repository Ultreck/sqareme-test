import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingTransactions() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 bg-gray-200 w-32" />
        <Skeleton className="h-8 bg-gray-200 w-24" />
      </div>

      <div className="border rounded-lg mx-auto">
        <div className="flex items-center  justify-between gap-4 p-3 border-b">
          <Skeleton className="h-5 bg-gray-200 w-5 rounded" />
          <Skeleton className="h-4 bg-gray-200 w-32" />
          <Skeleton className="h-4 bg-gray-200 w-24" />
          <Skeleton className="h-4 bg-gray-200 w-20" />
          <Skeleton className="h-4 bg-gray-200 w-16" />
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 p-3 border-b last:border-0"
          >
            <Skeleton className="h-5 bg-gray-200 w-5 rounded" />
            <Skeleton className="h-4 bg-gray-200 w-32" />
            <Skeleton className="h-4 bg-gray-200 w-24" />
            <Skeleton className="h-4 bg-gray-200 w-20" />
            <Skeleton className="h-4 bg-gray-200 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
