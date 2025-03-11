import { useState, useEffect } from "react";
import { toast } from "sonner";

interface Nota {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
}

export const useNotas = () => {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
        toast.success("Notas eliminadas", {
          description:
            "Las notas seleccionadas se han eliminado correctamente.",
        });
      } else {
        throw new Error("Error al eliminar las notas");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al eliminar las notas", {
        description: "Hubo un problema al eliminar las notas seleccionadas.",
      });
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
