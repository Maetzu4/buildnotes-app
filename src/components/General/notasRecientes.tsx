import React from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Nota {
  id: number;
  title: string;
  content: string;
}

interface NotasRecientesProps {
  notas: Nota[];
  selectedNotes: number[];
  handleLongPressStart: (id: number) => void;
  handleLongPressEnd: () => void;
}

export const NotasRecientes: React.FC<NotasRecientesProps> = ({
  notas,
  selectedNotes,
  handleLongPressStart,
  handleLongPressEnd,
}) => {
  return (
    <div className="mt-6">
      <h4 className="text-xl font-semibold">Recientes</h4>
      <ScrollArea className="w-full rounded-md">
        <div className="flex pt-4">
          {notas.map((nota) => (
            <div
              key={nota.id}
              className={`w-32 h-32 bg-violet-700 p-3 rounded-xl mr-4 mb-4 ${
                selectedNotes.includes(nota.id)
                  ? "border-2 border-yellow-400"
                  : ""
              }`}
              onTouchStart={() => handleLongPressStart(nota.id)}
              onTouchEnd={handleLongPressEnd}
              onMouseDown={() => handleLongPressStart(nota.id)}
              onMouseUp={handleLongPressEnd}
              onMouseLeave={handleLongPressEnd}
            >
              <Link href={`/nota/${nota.id}`} className="w-full h-full">
                <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                  {nota.title}
                </h4>
                <p className="text-xs line-clamp-4">{nota.content}</p>
              </Link>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
