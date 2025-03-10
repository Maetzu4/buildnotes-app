import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonProfile } from "./skeletonProfile"; // Importar el SkeletonProfile

export const SkeletonMobileHome = () => {
  return (
    <div className="overflow-auto p-4 pb-16 pt-16">
      {/* Skeleton para el Profile */}
      <div className="fixed top-0 left-0 w-full dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 pt-2 rounded-sm">
        <SkeletonProfile />
      </div>

      {/* Skeleton para el título */}
      <Skeleton className="h-8 w-48 mx-auto my-2" />

      {/* Skeleton para las notas recientes */}
      <div className="mt-6">
        <Skeleton className="h-6 w-24" /> {/* Título "Recientes" */}
        <ScrollArea className="w-full rounded-md">
          <div className="flex pt-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-32 h-32 bg-slate-600 p-3 rounded-xl mr-4 mb-4"
                >
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-4" />
                  <Skeleton className="h-4 w-full mt-1" />
                </div>
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Skeleton para todas las notas */}
      <div>
        <Skeleton className="h-6 w-32 mt-2" /> {/* Título "Todas las notas" */}
        <ul className="space-y-4 mt-2">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className="p-4 rounded-lg shadow-sm border-slate-600 border-b-2"
              >
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-full mt-2" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
