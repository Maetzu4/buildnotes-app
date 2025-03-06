import React, { useState, useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton"; // Importamos el Skeleton

export const MobileHome = () => {
  // Estado para almacenar las notas
  const [notas, setNotas] = useState<
    {
      id: number;
      title: string;
      content: string;
    }[]
  >([]);

  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener las notas de la API
    const fetchNotas = async () => {
      try {
        const response = await fetch("/api/notes"); // Asegúrate de que la URL sea la correcta
        if (!response.ok) {
          throw new Error("Error al obtener las notas");
        }
        const data = await response.json();
        setNotas(data);
        setLoading(false);
      } catch (error) {
        setError("No se pudo cargar las notas" + error);
        setLoading(false);
      }
    };

    fetchNotas(); // Llamada para cargar las notas
  }, []); // Solo se ejecuta una vez al montar el componente

  // Obtener las 10 notas más recientes
  const notasRecientes = notas.slice(0, 10);

  if (loading) {
    return (
      <div className="overflow-auto p-4">
        <h3 className="text-3xl font-bold text-center">Buenas noches</h3>

        {/* Mostrar Skeletons en lugar de las notas */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold">Recientes</h4>
          <ScrollArea className="w-full rounded-md">
            <div className="flex pt-4">
              {/* Aquí agregamos Skeletons */}
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 bg-violet-400 p-3 rounded-xl mr-4 mb-4"
                  >
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-2" />
                  </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Mostrar Skeletons para las notas completas */}
        <div>
          <h4 className="text-xl font-semibold">Todas las notas</h4>
          <ul className="space-y-4 mt-2">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className="p-4 rounded-lg shadow-sm border-violet-600 border-b-2"
                >
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-full mt-2" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>; // Muestra el mensaje de error si ocurre un problema
  }

  return (
    <div className="overflow-auto p-4">
      <h3 className="text-3xl font-bold text-center">Buenas noches</h3>
      {/* Mostrar las notas recientes */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Recientes</h4>
        <ScrollArea className="w-full rounded-md">
          <div className="flex pt-4">
            {notasRecientes.map((nota) => (
              <div
                key={nota.id}
                className="w-32 h-32 bg-violet-400 p-3 rounded-xl mr-4 mb-4"
              >
                <Link href={`/nota/${nota.id}`} className="w-full h-full">
                  <h4 className="font-semibold text-sm pb-2">{nota.title}</h4>
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
        <h4 className="text-xl font-semibold">Todas las notas</h4>
        <ul className="space-y-4 mt-2">
          {notas.map((nota) => (
            <li
              key={nota.id}
              className="p-4 rounded-lg shadow-sm border-violet-600 border-b-2"
            >
              <Link href={`/nota/${nota.id}`} className="w-full h-full">
                <h5 className="font-semibold pb-2">{nota.title}</h5>
                <p className="text-xs line-clamp-2">{nota.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
