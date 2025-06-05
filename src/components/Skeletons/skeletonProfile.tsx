// src/components/mobile/skeletonProfile.tsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProfile = () => {
  return (
    <div className="flex justify-between items-center my-2">
      {/* Avatar y nombre */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
        <Skeleton className="h-4 w-20" /> {/* Nombre */}
      </div>

      {/* Botones de configuración o modo */}
      <div className="flex justify-center">
        <Skeleton className="h-8 w-8 rounded-full" />
        {/* Botón de modo o configuración */}
      </div>
    </div>
  );
};
