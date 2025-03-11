// hooks/useMobileLayout.ts
import { useState } from "react";

export const useMobileLayout = () => {
  const [activePage, setActivePage] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return {
    activePage,
    setActivePage,
    isDrawerOpen,
    setIsDrawerOpen,
  };
};
