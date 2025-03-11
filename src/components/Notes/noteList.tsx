import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NotaItem } from "@/components/Notes/notaItem";
import { Nota } from "@/lib/types"; // Importar la interfaz

interface NoteListProps {
  notes: Nota[];
  loading: boolean;
  searchTerm: string;
}

export const NoteList: React.FC<NoteListProps> = ({
  notes,
  loading,
  searchTerm,
}) => {
  if (loading) {
    return <p className="text-lg text-center mt-4">Buscando...</p>;
  }

  if (notes.length === 0 && searchTerm) {
    return <p className="text-lg text-center mt-4">No se encontraron notas</p>;
  }

  return (
    <ScrollArea className="flex-1 overflow-y-auto">
      <div className="px-2">
        {notes.map((note) => (
          <NotaItem key={note.id} nota={note} />
        ))}
      </div>
    </ScrollArea>
  );
};
