"use client";

import React, { useState, useEffect } from "react";

interface ResponsiveComponentProps {
  mobile: React.ReactNode; // Componente para móviles
  desktop: React.ReactNode; // Componente para escritorio
}

export const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  mobile,
  desktop,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el tamaño de la pantalla
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // 640px es el breakpoint "sm" de Tailwind
    };

    // Ejecutar la función al montar el componente
    handleResize();

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? mobile : desktop}</>;
};
