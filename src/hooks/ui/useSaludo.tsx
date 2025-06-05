// hooks/ui/useSaludo.tsx
import { useState, useEffect } from "react";
//saludo de acuerdo a la hora del dia
const getSaludo = (): string => {
  const horaActual = new Date().getHours();

  if (horaActual >= 6 && horaActual < 12) {
    return "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
};
//funcion que retorna el saludo
export const useSaludo = (): string => {
  const [saludo, setSaludo] = useState<string>(getSaludo());

  useEffect(() => {
    const interval = setInterval(() => {
      setSaludo(getSaludo());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return saludo;
};
