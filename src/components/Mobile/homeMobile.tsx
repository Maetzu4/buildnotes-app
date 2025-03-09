"use client";

import { useState } from "react";
import { MobileOptions } from "@/components/Mobile/mobileOptions";
import { MobileHome } from "@/components/Mobile/mobileHome";
import MobileSearchDrawer from "@/components/Mobile/mobileSearchDrawer";
import { MobileSettings } from "@/components/Mobile/mobileSettings";
import { MobileNew } from "@/components/Mobile/mobileNew";

export default function HomeMobile() {
  const [activePage, setActivePage] = useState("home"); // Página por defecto
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Estado para controlar el Drawer

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <MobileHome />;
      case "search":
        return <MobileHome />;
      case "settings":
        return <MobileSettings />;
      case "book":
        return <MobileNew />;
      default:
        return <MobileHome />;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Contenido en medio */}
      <div className="flex-1 px-4">
        {renderContent()} {/* Mostramos el contenido según la página activa */}
      </div>

      {/* Botones fijos en la parte inferior */}
      <div className="fixed bottom-0 left-0 w-full dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 py-1 rounded-sm">
        <MobileOptions
          setActivePage={setActivePage}
          setIsDrawerOpen={setIsDrawerOpen} // Pasamos setIsDrawerOpen
        />
        {/* Pasamos la función para actualizar la página */}
      </div>

      {/* Aquí añadimos el Drawer, para que sea global y se pueda cerrar al cambiar de página */}
      <div className="z-50">
        <MobileSearchDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </div>
    </div>
  );
}
