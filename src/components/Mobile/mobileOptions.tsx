"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { BookPlus, House, Search, Settings } from "lucide-react";

interface MobileOptionsProps {
  setActivePage: (page: string) => void;
}

interface ButtonProps {
  id: number;
  site: string;
  word: string;
  Icon: React.ComponentType;
}

export const MobileOptions: React.FC<MobileOptionsProps> = ({
  setActivePage,
}) => {
  const [activeButton, setActiveButton] = useState("home");

  const butons: ButtonProps[] = [
    {
      id: 1,
      site: "home",
      word: "Inicio",
      Icon: House,
    },
    {
      id: 2,
      site: "search",
      word: "Buscar",
      Icon: Search,
    },
    {
      id: 3,
      site: "book",
      word: "Nuevo",
      Icon: BookPlus,
    },
    {
      id: 4,
      site: "settings",
      word: "Configuracion",
      Icon: Settings,
    },
  ];

  const handleButtonClick = (page: string) => {
    setActiveButton(page);
    setActivePage(page);
  };

  return (
    <div className="flex justify-between w-full">
      {butons.map(({ id, site, Icon }) => (
        <Button
          key={id}
          onClick={() => handleButtonClick(site)}
          className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black ${
            activeButton === site ? "bg-violet-800 dark:bg-violet-800" : ""
          }`}
        >
          <Icon />
        </Button>
      ))}
    </div>
  );
};
