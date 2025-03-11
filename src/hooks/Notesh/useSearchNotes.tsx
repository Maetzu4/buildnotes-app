import { useState } from "react";
import { Nota } from "@/lib/types"; // Importar la interfaz

export const useSearchNotes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState<Nota[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (term: string) => {
    if (term.trim() === "") {
      setNotes([]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/notes?search=${term}`);
      const data = await res.json();
      setNotes(data);
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
