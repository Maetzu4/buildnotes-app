"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { BookPlus, House, Search, Settings } from "lucide-react";

interface MobileOptionsProps {
  setActivePage: (page: string) => void;
}

export const MobileOptions: React.FC<MobileOptionsProps> = ({
  setActivePage,
}) => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (page: string) => {
    setActiveButton(page);
    setActivePage(page); // Cambiar el contenido de la página
  };

  return (
    <div className="flex justify-between w-full">
      <Button
        onClick={() => handleButtonClick("home")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "home" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <House size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Inicio
        </span>
      </Button>
      <Button
        onClick={() => handleButtonClick("search")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "search" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <Search size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Buscar
        </span>
      </Button>
      <Button
        onClick={() => handleButtonClick("settings")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "settings" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <Settings size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Configuración
        </span>
      </Button>
      <Button
        onClick={() => handleButtonClick("book")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "book" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <BookPlus size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Nuevo
        </span>
      </Button>
    </div>
  );
};
