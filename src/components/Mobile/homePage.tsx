// src/components/Mobile/homePage.tsx
"use client";
import React from "react";
import ErrorMessage from "@/components/Mui/errorMessage"; // componente para mostrar los mensajes de error
import { SkeletonHomePage } from "@/components/Skeletons/skeletonHomePage"; // componente para mostrar los skeletons mientras cargan los datos
import { Profile } from "@/components/Mui/profile"; // componente del perfil para el home
import { ProfileToolbar } from "@/components/Mui/profileToolbar"; // componente para la barra de herramientas del perfil
import { useSaludo } from "@/hooks/ui/useSaludo"; // hook para tener un saludo dinamico
import { useNotas } from "@/hooks/Notesh/useNotas"; // hook para manejar las notas
import { useLongPress } from "@/hooks/Notesh/useLongPress"; // hook para manejar las pulsaciones y las acciones en las notas
import { NotasRecientes } from "@/components/Notes/notasRecientes"; // componente para mostrar las notas recientes
import { TodasLasNotas } from "@/components/Notes/todasLasNotas"; // componente para mostrar todas las notas

export const HomePage: React.FC = () => {
  const saludo = useSaludo(); // llamado del hook saludo
  const {
    notas,
    loading,
    error,
    selectedNotes,
    setSelectedNotes,
    handleDeleteNotes,
  } = useNotas(); // optencion de los datos de las notas  y sus estados
  // manejo de las pulsaciones largas en las notas
  const { start: handleLongPressStart, end: handleLongPressEnd } = useLongPress(
    (id: number) => {
      setSelectedNotes((prev) =>
        prev.includes(id)
          ? prev.filter((noteId) => noteId !== id)
          : [...prev, id]
      );
    },
    500
  );

  // Ordenar las notas
  const notasOrdenadas = notas
    .sort(
      (a, b) =>
        new Date(b.updatedAt || new Date(0)).getTime() -
        new Date(a.updatedAt || new Date(0)).getTime()
    )
    .slice(0, 6);

  const notasOrdenadasPorId = notas.sort((a, b) => a.id - b.id);

  if (loading) {
    return (
      <div>
        <SkeletonHomePage /> {/* Skeleton para el resto del contenido */}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />; // manejo de errores
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
      <NotasRecientes
        notas={notasOrdenadas}
        selectedNotes={selectedNotes}
        handleLongPressStart={handleLongPressStart}
        handleLongPressEnd={handleLongPressEnd}
      />
      {/* Mostrar todas las notas en forma de lista */}
      <TodasLasNotas
        notas={notasOrdenadasPorId}
        selectedNotes={selectedNotes}
        handleLongPressStart={handleLongPressStart}
        handleLongPressEnd={handleLongPressEnd}
      />
    </div>
  );
};
