import { useState, useEffect } from "react";
import { Nota } from "@/lib/types"; // Importar la interfaz Nota

export const useNotas = () => {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]);

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        const response = await fetch("/api/notes");
        if (!response.ok) {
          throw new Error("Error al obtener las notas");
        }
        const data = await response.json();
        setNotas(data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Error desconocido");
        setLoading(false);
      }
    };
    fetchNotas();
  }, []);

  const handleDeleteNotes = async () => {
    try {
      const response = await fetch("/api/notes/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedNotes }),
      });

      if (response.ok) {
        setNotas(notas.filter((nota) => !selectedNotes.includes(nota.id)));
        setSelectedNotes([]);
      } else {
        throw new Error("Error al eliminar las notas");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    notas,
    loading,
    error,
    selectedNotes,
    setSelectedNotes,
    handleDeleteNotes,
  };
};
