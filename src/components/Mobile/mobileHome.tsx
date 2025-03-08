import React, { useState, useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import ErrorMessage from "../General/errorMessage";
import { SkeletonMobileHome } from "../Skeletons/skeletonMobileHome";
import { Profile } from "@/components/General/profile";

export const MobileHome = () => {
  // Estado para almacenar las notas
  const [notas, setNotas] = useState<
    {
      id: number;
      title: string;
      content: string;
      updatedAt: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener las notas de la API
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
    fetchNotas(); // Llamada para cargar las notas
  }, []); // Solo se ejecuta una vez al montar el componente
  // Ordenar las notas por la fecha de actualización (últimas 6 notas)
  const notasOrdenadas = notas
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 6); // Obtenemos solo las 6 últimas notas
  // Ordenar todas las notas por id (de menor a mayor)
  const notasOrdenadasPorId = notas.sort((a, b) => a.id - b.id);
  if (loading) {
    return <SkeletonMobileHome />; // Mostrar el Skeleton mientras se carga
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className="overflow-auto p-4">
      <div className="fixed top-0 left-0 w-full dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 pt-2 rounded-sm">
        <Profile Toggle={true} />
      </div>
      <h3 className="text-3xl font-bold text-center">Buenas noches</h3>
      {/* Mostrar las notas recientes */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Recientes</h4>
        <ScrollArea className="w-full rounded-md">
          <div className="flex pt-4">
            {notasOrdenadas.map((nota) => (
              <div
                key={nota.id}
                className="w-32 h-32 bg-violet-700 p-3 rounded-xl mr-4 mb-4"
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
        <h4 className="text-xl font-semibold">Todas las notas</h4>
        <ul className="space-y-4 mt-2">
          {notasOrdenadasPorId.map((nota) => (
            <li
              key={nota.id}
              className="p-4 rounded-lg shadow-sm border-violet-600 border-b-2"
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
