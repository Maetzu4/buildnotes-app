// hooks/useMobileLayout.ts
import { useState } from "react";

export const useMobileLayout = () => {
  const [activePage, setActivePage] = useState("home"); // estado para la pagina activa
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // estado para saber si el drawer esta activo

  return {
    activePage,
    setActivePage,
    isDrawerOpen,
    setIsDrawerOpen,
  };
};
