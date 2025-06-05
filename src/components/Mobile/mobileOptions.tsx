// src/components/Mobile/mobileOptions.tsx
"use client";
import React from "react";
import { Button } from "../ui/button";
import { BookPlus, House, Search, Settings } from "lucide-react";

interface MobileOptionsProps {
  activePage: string; // Recibe la página activa del padre
  setActivePage: (page: string) => void;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileOptions: React.FC<MobileOptionsProps> = ({
  activePage, // Recibimos el estado activo
  setActivePage,
  setIsDrawerOpen,
}) => {
  const butons = [
    {
      id: 1,
      site: "home",
      Icon: House,
    },
    {
      id: 2,
      site: "search",
      Icon: Search,
    },
    {
      id: 3,
      site: "book",
      Icon: BookPlus,
    },
    {
      id: 4,
      site: "settings",
      Icon: Settings,
    },
  ];

  const handleButtonClick = (page: string) => {
    if (page === "search") {
      setIsDrawerOpen(true); // Abre el drawer de búsqueda si se hace clic en el botón de búsqueda
    } else {
      setActivePage(page); // Establece la página activa si no es el botón de búsqueda
      setIsDrawerOpen(false); // Cierra el drawer si se selecciona otra opción
    }
  };

  return (
    <div className="flex justify-around w-full h-12 items-center">
      {/* Usamos justify-around para distribuir y una altura fija */}
      {butons.map(({ id, site, Icon }) => (
        <Button
          key={id}
          onClick={() => handleButtonClick(site)}
          className={`
            flex flex-col items-center justify-center rounded-md
            text-white transition-colors duration-200 ease-in-out
            ${
              site === "search"
                ? "bg-transparent hover:bg-white/10"
                : activePage === site
                ? "bg-violet-800"
                : "bg-transparent hover:bg-white/10"
            }
          `}
        >
          <Icon size={24} />
        </Button>
      ))}
    </div>
  );
};
