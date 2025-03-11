"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface ProfileToolbarProps {
  onDeleteNotes: () => void; // Función para borrar las notas seleccionadas
}

export const ProfileToolbar: React.FC<ProfileToolbarProps> = ({
  onDeleteNotes,
}) => {
  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex items-center gap-2">
        <h2>Notas seleccionadas</h2>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={onDeleteNotes}
          className="bg-transparent px-3 rounded-sm dark:text-white text-black"
          aria-label="Eliminar notas seleccionadas"
        >
          <Trash2 /> {/* Icono de borrar */}
        </Button>
      </div>
    </div>
  );
};
