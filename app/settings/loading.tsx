import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSettings() {
  return (
    <div className="p-6 space-y-6 max-w-lg">
      <Skeleton className="h-8 w-1/3" /> 
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-28" /> 
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
      <Skeleton className="h-10 w-full" />
    </div>
  );
}
