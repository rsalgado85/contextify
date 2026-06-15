import { Suspense } from "react";
import { ConvertPageClient } from "./ConvertPageClient";
import { LoadingState } from "@/components/LoadingState";

export default function ConvertPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ConvertPageClient />
    </Suspense>
  );
}
