"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Note {
  id: string; // o number, dependiendo del tipo de ID que uses
  title: string;
  content: string;
}

interface MobileSearchDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSearchDrawer: React.FC<MobileSearchDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [notes, setNotes] = React.useState<Note[]>([]); // Array para almacenar las notas filtradas
  const [loading, setLoading] = React.useState(false);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setNotes([]); // Si el término de búsqueda está vacío, limpiar los resultados
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/notes?search=${term}`);
      const data = await res.json();
      setNotes(data); // Guardar las notas filtradas en el estado
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDrawer = () => {
    // Reiniciar el estado antes de cerrar el Drawer
    setSearchTerm("");
    setNotes([]);
    setIsOpen(false);
  };

  return (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          // Si el Drawer se está cerrando, reiniciar el estado
          setSearchTerm("");
          setNotes([]);
        }
        setIsOpen(open);
      }}
    >
      <DrawerContent className="h-5/6 flex flex-col dark:bg-opacity-20 backdrop-blur-md dark:bg-black">
        {/* 75% de la altura de la pantalla y diseño flexible */}
        <DrawerHeader>
          <DrawerTitle>Buscar Notas</DrawerTitle>
        </DrawerHeader>

        <div className="px-6 flex-1 flex flex-col overflow-hidden">
          <Input
            type="text"
            placeholder="Buscar notas..."
            value={searchTerm}
            onChange={handleSearch}
            className="my-4 bg-transparent dark:bg-transparent"
          />

          {loading && <p className="text-lg text-center mt-4">Buscando...</p>}

          {/* ScrollArea ocupa el espacio restante */}
          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="px-2">
              {notes.length === 0 && !loading && searchTerm && (
                <p className="text-lg text-center mt-4">
                  No se encontraron notas
                </p>
              )}
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="py-3 border-violet-600 border-b-2 rounded"
                >
                  <Link href={`/nota/${note.id}`} className="w-full h-full">
                    <h3 className="font-bold text-sm mb-1 line-clamp-1">
                      {note.title}
                    </h3>
                    <p className="text-xs line-clamp-2">{note.content}</p>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Botón siempre en la parte inferior */}
        <DrawerFooter className="px-6">
          <Button onClick={handleCloseDrawer}>Cerrar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileSearchDrawer;
