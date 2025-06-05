//  src/components/Mui/responsiveComponent.tsx
"use client";
import React, { useState, useEffect } from "react";
// interface para manipular las props del componente
interface ResponsiveComponentProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  mobile,
  desktop,
}) => {
  const [isMobile, setIsMobile] = useState(false); //estado para determinar si es mobile o no
  // efecto para recien entre la pagina determinar si es mobile o no
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 640); // condición para determinar si es mobile o no
    };
    handleResize(); // llamado de la funciona para determinar el estado
    window.addEventListener("resize", handleResize); // actualiza cuando se cambia el tamaño de la ventana
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? desktop : mobile}</>; // retorna el componente segun corresponda con el tamaño de la ventana
};
