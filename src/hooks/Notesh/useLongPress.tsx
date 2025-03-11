import { useRef } from "react";

export const useLongPress = (
  callback: (id: number) => void,
  delay: number = 500
) => {
  const longPressTimer = useRef<number | null>(null);

  const start = (id: number) => {
    longPressTimer.current = window.setTimeout(() => {
      callback(id);
    }, delay);
  };

  const end = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  return { start, end };
};
