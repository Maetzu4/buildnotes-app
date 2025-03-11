import { useState, useEffect } from "react";

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
