import React, { useState, useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

export const MobileHome = () => {
  // Estado para almacenar las notas
  const [notas, setNotas] = useState<
    { id: number; nombre: string; contenido: string }[]
  >([]);

  useEffect(() => {
    // Simulamos una llamada a una API
    const fetchNotas = () => {
      const notasSimuladas = [
        { id: 1, nombre: "Nota 1", contenido: "Esta es la primera nota." },
        { id: 2, nombre: "Nota 2", contenido: "Contenido de la segunda nota." },
        {
          id: 3,
          nombre: "Nota 3",
          contenido: "Aquí va el contenido de la tercera nota.",
        },
        {
          id: 4,
          nombre: "Nota 4",
          contenido: "Cuarta nota con más información.",
        },
        {
          id: 5,
          nombre: "Nota 5",
          contenido: "Esta es la quinta nota con más detalle.",
        },
        {
          id: 6,
          nombre: "Nota 6",
          contenido:
            "Este es el contenido largo de la nota 6. Aquí se agrega una explicación extensa sobre algún tema de interés.",
        },
        {
          id: 7,
          nombre: "Nota 7",
          contenido:
            "Otra nota con contenido largo. Esta nota también cuenta con una cantidad considerable de texto.",
        },
        {
          id: 8,
          nombre: "Nota 8",
          contenido: "Contenido de la octava nota.",
        },
        {
          id: 9,
          nombre: "Nota 9",
          contenido: "Esta es la novena nota con más detalles.",
        },
        {
          id: 10,
          nombre: "Nota 10",
          contenido: "Aquí va el contenido de la décima nota.",
        },
        {
          id: 11,
          nombre: "Nota 11",
          contenido: "Contenido de la nota 11.",
        },
        {
          id: 12,
          nombre: "Nota 12",
          contenido: "Información de la doceava nota.",
        },
        {
          id: 13,
          nombre: "Nota 13",
          contenido: "Aquí va el contenido de la nota 13.",
        },
        {
          id: 14,
          nombre: "Nota 14",
          contenido: "Contenido de la nota 14.",
        },
      ];

      // Actualizamos el estado con las notas obtenidas
      setNotas(notasSimuladas);
    };

    fetchNotas(); // Llamada para cargar las notas
  }, []); // Solo se ejecuta una vez al montar el componente

  // Obtener las 10 notas más recientes
  const notasRecientes = notas.slice(0, 10);

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
                  <h4 className="font-semibold text-sm pb-2">{nota.nombre}</h4>
                  <p className="text-xs line-clamp-4">{nota.contenido}</p>
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
                <h5 className="font-semibold pb-2">{nota.nombre}</h5>
                <p className="text-xs line-clamp-2">{nota.contenido}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
