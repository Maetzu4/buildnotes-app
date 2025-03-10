import React, { useState, useEffect, useRef } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import ErrorMessage from "../General/errorMessage";
import { SkeletonMobileHome } from "@/components/Skeletons/skeletonMobileHome";
import { Profile } from "@/components/General/profile";
import { ProfileToolbar } from "@/components/General/profileToolbar"; // Nuevo componente
import { toast } from "sonner"; // Importar toast de Sonner

export const MobileHome = () => {
  const [notas, setNotas] = useState<
    {
      id: number;
      title: string;
      content: string;
      updatedAt: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNotes, setSelectedNotes] = useState<number[]>([]); // Notas seleccionadas
  const longPressTimer = useRef<number | null>(null); // Timer para el long press

  // Función para obtener el saludo según la hora del día
  const getSaludo = (): string => {
    const horaActual = new Date().getHours();

    if (horaActual >= 6 && horaActual < 12) {
      return "Buenos días";
    } else if (horaActual >= 12 && horaActual < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };
  const [saludo, setSaludo] = useState(getSaludo());

  // Actualizar el saludo cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setSaludo(getSaludo());
    }, 60000); // Actualizar cada minuto

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  // Cargar las notas
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
        setError("" + error);
        setLoading(false);
      }
    };
    fetchNotas();
  }, []);

  // Ordenar las notas
  const notasOrdenadas = notas
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 6);

  const notasOrdenadasPorId = notas.sort((a, b) => a.id - b.id);

  // Función para manejar el inicio del long press
  const handleLongPressStart = (id: number) => {
    longPressTimer.current = window.setTimeout(() => {
      setSelectedNotes((prev) =>
        prev.includes(id)
          ? prev.filter((noteId) => noteId !== id)
          : [...prev, id]
      );
    }, 500); // Long press después de 500 ms
  };

  // Función para manejar el fin del long press
  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current); // Cancelar el timer si el usuario suelta antes de tiempo
      longPressTimer.current = null;
    }
  };

  // Función para borrar las notas seleccionadas
  const handleDeleteNotes = async () => {
    try {
      const response = await fetch("/api/notes/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedNotes }), // Enviar los IDs de las notas seleccionadas
      });

      if (response.ok) {
        setNotas(notas.filter((nota) => !selectedNotes.includes(nota.id))); // Eliminar las notas del estado
        setSelectedNotes([]); // Limpiar la selección

        // Mostrar toast de éxito
        toast.success("Notas eliminadas", {
          description:
            "Las notas seleccionadas se han eliminado correctamente.",
        });
      } else {
        throw new Error("Error al eliminar las notas");
      }
    } catch (error) {
      console.error("Error:", error);

      // Mostrar toast de error
      toast.error("Error al eliminar las notas", {
        description: "Hubo un problema al eliminar las notas seleccionadas.",
      });
    }
  };

  if (loading) {
    return (
      <div>
        <SkeletonMobileHome /> {/* Skeleton para el resto del contenido */}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="overflow-auto p-4 pb-16 pt-16">
      <div className="fixed top-0 left-0 w-full dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 pt-2 rounded-sm">
        {selectedNotes.length > 0 ? (
          <ProfileToolbar onDeleteNotes={handleDeleteNotes} /> // Mostrar la toolbar si hay notas seleccionadas
        ) : (
          <Profile Toggle={true} /> // Mostrar el perfil normal si no hay notas seleccionadas
        )}
      </div>
      <h3 className="text-3xl font-bold text-center">{saludo}</h3>
      {/* Mostrar el saludo dinámico */}
      {/* Mostrar las notas recientes */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Recientes</h4>
        <ScrollArea className="w-full rounded-md">
          <div className="flex pt-4">
            {notasOrdenadas.map((nota) => (
              <div
                key={nota.id}
                className={`w-32 h-32 bg-violet-700 p-3 rounded-xl mr-4 mb-4 ${
                  selectedNotes.includes(nota.id)
                    ? "border-2 border-yellow-400" // Indicador visual para notas seleccionadas
                    : ""
                }`}
                onTouchStart={() => handleLongPressStart(nota.id)} // Iniciar long press
                onTouchEnd={handleLongPressEnd} // Finalizar long press
                onMouseDown={() => handleLongPressStart(nota.id)} // Soporte para desktop
                onMouseUp={handleLongPressEnd} // Soporte para desktop
                onMouseLeave={handleLongPressEnd} // Cancelar si el mouse sale del elemento
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
      {/* Mostrar todas las notas en forma de lista */}
      <div>
        <div className="flex justify-between">
          <h4 className="text-xl font-semibold">Todas las notas</h4>
          <h4 className="text-xl font-semibold">{notas.length}</h4>
        </div>
        <ul className="space-y-4 mt-2">
          {notasOrdenadasPorId.map((nota) => (
            <li
              key={nota.id}
              className={`p-2 shadow-sm border-violet-600 border-b-2 rounded ${
                selectedNotes.includes(nota.id)
                  ? "bg-violet-800 dark:bg-violet-800" // Indicador visual para notas seleccionadas
                  : ""
              }`}
              onTouchStart={() => handleLongPressStart(nota.id)} // Iniciar long press
              onTouchEnd={handleLongPressEnd} // Finalizar long press
              onMouseDown={() => handleLongPressStart(nota.id)} // Soporte para desktop
              onMouseUp={handleLongPressEnd} // Soporte para desktop
              onMouseLeave={handleLongPressEnd} // Cancelar si el mouse sale del elemento
            >
              <Link href={`/nota/${nota.id}`} className="w-full h-full">
                <h5 className="font-semibold mb-2 line-clamp-2">
                  {nota.title}
                </h5>
                <p className="text-xs line-clamp-2">{nota.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
