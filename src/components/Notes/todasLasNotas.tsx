import React from "react";
import { NotaItem } from "@/components/Notes/notaItem";
import { Nota } from "@/lib/types"; // Importar la interfaz Nota

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
          <li key={nota.id}>
            <NotaItem
              nota={nota}
              isSelected={selectedNotes.includes(nota.id)}
              onTouchStart={() => handleLongPressStart(nota.id)}
              onTouchEnd={handleLongPressEnd}
              onMouseDown={() => handleLongPressStart(nota.id)}
              onMouseUp={handleLongPressEnd}
              onMouseLeave={handleLongPressEnd}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
