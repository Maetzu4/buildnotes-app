import { useState } from "react";

interface Note {
  id: string; // o number, dependiendo del tipo de ID que uses
  title: string;
  content: string;
}

export const useSearchNotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (term: string) => {
    if (term.trim() === "") {
      setNotes([]); // Si el término de búsqueda está vacío, limpiar los resultados
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/notes?search=${term}`);
      const data = await res.json();
      setNotes(data); // Guardar las notas filtradas en el estado
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    notes,
    loading,
    handleSearch,
  };
};
