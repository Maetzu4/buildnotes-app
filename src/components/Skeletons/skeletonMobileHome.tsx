import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonMobileHome = () => {
  return (
    <div className="overflow-auto p-4">
      <h3 className="text-3xl font-bold text-center">Buenas noches</h3>

      {/* Mostrar Skeletons en lugar de las notas */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Recientes</h4>
        <ScrollArea className="w-full rounded-md">
          <div className="flex pt-4">
            {/* Aquí agregamos Skeletons */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-32 h-32 bg-slate-600 p-3 rounded-xl mr-4 mb-4"
                >
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-2" />
                </div>
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Mostrar Skeletons para las notas completas */}
      <div>
        <h4 className="text-xl font-semibold">Todas las notas</h4>
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
