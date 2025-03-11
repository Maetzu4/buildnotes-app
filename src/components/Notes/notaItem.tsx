import React from "react";
import Link from "next/link";
import { Nota } from "@/lib/types";

interface NotaItemProps {
  nota: Nota;
  isSelected?: boolean;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
}

export const NotaItem: React.FC<NotaItemProps> = ({
  nota,
  isSelected = false,
  onTouchStart,
  onTouchEnd,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
}) => {
  return (
    <div
      className={`p-2 shadow-sm border-violet-600 border-b-2 rounded ${
        isSelected ? "bg-violet-800 dark:bg-violet-800" : ""
      }`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <Link href={`/nota/${nota.id}`} className="w-full h-full">
        <h5 className="font-semibold mb-2 line-clamp-2">{nota.title}</h5>
        <p className="text-xs line-clamp-2">{nota.content}</p>
      </Link>
    </div>
  );
};
