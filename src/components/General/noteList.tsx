import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
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
          <div
            key={note.id}
            className="py-3 border-violet-600 border-b-2 rounded"
          >
            <Link href={`/nota/${note.id}`} className="w-full h-full">
              <h3 className="font-bold text-sm mb-1 line-clamp-1">
                {note.title}
              </h3>
              <p className="text-xs line-clamp-2">{note.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
