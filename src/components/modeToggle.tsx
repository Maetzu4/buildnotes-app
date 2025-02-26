"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle"; // Importamos Toggle de ShadCN

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  // Cambiar entre los diferentes temas
  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === "dark"} // El estado inicial depende del tema actual
      onPressedChange={handleToggle} // Cambiamos el tema cuando se hace toggle
      className="relative inline-flex items-center justify-center bg-transparent dark:bg-transparent dark:hover:bg-zinc-900 group"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-violet-600" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-violet-600 " />
    </Toggle>
  );
}
