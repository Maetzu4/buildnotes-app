"use client";

import { useState } from "react";
import { Profile } from "@/components/profile";
import { MobileOptions } from "./mobileOptions";
import { MobileHome } from "./mobileHome";
import { MobileSearch } from "./mobileSearch";

export default function HomeMobile() {
  const [activePage, setActivePage] = useState("home"); // Página por defecto

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <MobileHome />;
      case "search":
        return <MobileSearch />;
      case "settings":
        return <div>Hola configuracion</div>;
      // return <MobileSettings />;
      case "book":
        return <div>Hola nuevo</div>;
      // return <MobileNew />;
      default:
        return <MobileHome />;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white dark:bg-black dark:text-white text-black duration-300">
      {/* Componente Profile fijo en la parte superior */}
      <div className="fixed top-0 left-0 w-full dark:bg-black bg-white dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 pt-2 rounded-sm duration-300">
        <Profile Toggle={true} />
      </div>

      {/* Contenido en medio */}
      <div className="pb-10 pt-14 flex-1 px-4">
        {renderContent()} {/* Mostramos el contenido según la página activa */}
      </div>

      {/* Botones fijos en la parte inferior */}
      <div className="fixed bottom-0 left-0 w-full dark:bg-black bg-white dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 py-1 rounded-sm duration-300">
        <MobileOptions setActivePage={setActivePage} />
        {/* Pasamos la función para actualizar la página */}
      </div>
    </div>
  );
}
