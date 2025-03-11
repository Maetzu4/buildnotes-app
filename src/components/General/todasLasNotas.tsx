import React from "react";
import Link from "next/link";

interface Nota {
  id: number;
  title: string;
  content: string;
}

interface TodasLasNotasProps {
  notas: Nota[];
  selectedNotes: number[];
  handleLongPressStart: (id: number) => void;
  handleLongPressEnd: () => void;
}

export const TodasLasNotas: React.FC<TodasLasNotasProps> = ({
  notas,
  selectedNotes,
  handleLongPressStart,
  handleLongPressEnd,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold">Todas las notas</h4>
        <h4 className="text-xl font-semibold">{notas.length}</h4>
      </div>
      <ul className="space-y-4 mt-2">
        {notas.map((nota) => (
          <li
            key={nota.id}
            className={`p-2 shadow-sm border-violet-600 border-b-2 rounded ${
              selectedNotes.includes(nota.id)
                ? "bg-violet-800 dark:bg-violet-800"
                : ""
            }`}
            onTouchStart={() => handleLongPressStart(nota.id)}
            onTouchEnd={handleLongPressEnd}
            onMouseDown={() => handleLongPressStart(nota.id)}
            onMouseUp={handleLongPressEnd}
            onMouseLeave={handleLongPressEnd}
          >
            <Link href={`/nota/${nota.id}`} className="w-full h-full">
              <h5 className="font-semibold mb-2 line-clamp-2">{nota.title}</h5>
              <p className="text-xs line-clamp-2">{nota.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
