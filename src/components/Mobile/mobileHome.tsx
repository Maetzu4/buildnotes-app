"use client";
import React from "react";
import ErrorMessage from "../General/errorMessage";
import { SkeletonMobileHome } from "@/components/Skeletons/skeletonMobileHome";
import { Profile } from "@/components/General/profile";
import { ProfileToolbar } from "@/components/General/profileToolbar";
import { useSaludo } from "@/hooks/useSaludo";
import { useNotas } from "@/hooks/useNotas";
import { useLongPress } from "@/hooks/useLongPress";
import { NotasRecientes } from "@/components/General/notasRecientes";
import { TodasLasNotas } from "@/components/General/todasLasNotas";

export const MobileHome: React.FC = () => {
  const saludo = useSaludo();
  const {
    notas,
    loading,
    error,
    selectedNotes,
    setSelectedNotes,
    handleDeleteNotes,
  } = useNotas();
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
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 6);

  const notasOrdenadasPorId = notas.sort((a, b) => a.id - b.id);

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
