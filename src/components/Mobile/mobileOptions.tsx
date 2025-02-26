"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { BookPlus, House, Search, Settings } from "lucide-react";

interface MobileOptionsProps {
  setActivePage: (page: string) => void;
}

export const MobileOptions: React.FC<MobileOptionsProps> = ({
  setActivePage,
}) => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (page: string) => {
    setActiveButton(page);
    setActivePage(page); // Cambiar el contenido de la página
  };

  return (
    <div className="flex justify-between w-full">
      <Button
        onClick={() => handleButtonClick("home")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "home" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <House size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Inicio
        </span>
      </Button>
      <Button
        onClick={() => handleButtonClick("search")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "search" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <Search size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Buscar
        </span>
      </Button>
      <Button
        onClick={() => handleButtonClick("settings")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "settings" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <Settings size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Configuración
        </span>
      </Button>
      <Button
        onClick={() => handleButtonClick("book")}
        className={`flex items-center bg-transparent px-4 py-6 rounded-sm dark:text-white text-black group ${
          activeButton === "book" ? "bg-gray-200 dark:bg-gray-600" : ""
        }`}
      >
        <BookPlus size={40} />
        <span className="hidden ml-2 opacity-0 group-hover:opacity-100 text-sm text-black dark:text-white transition-opacity duration-300">
          Nuevo
        </span>
      </Button>
    </div>
  );
};

// import { Heart, ShoppingCart, Store, UserRound } from "lucide-react";
// import React from "react";
// import {
//   IBottomNavigationBar,
//   IitemBottomNavigationBar,
// } from "@/types/navbarTypes";
// const Items = ({ name, Icon, router }: IitemBottomNavigationBar) => {
//   return (
//     <a href={router} className="flex flex-col justify-center items-center">
//       <Icon />
//       <p className="text-sm w-16 truncate text-center">{name}</p>
//     </a>
//   );
// };
// function BottomNavigationBar() {
//   const items: IBottomNavigationBar[] = [
//     {
//       id: 1,
//       name: "tienda",
//       Icon: Store,
//       router: "/",
//     },
//     {
//       id: 2,
//       name: "Lista de deseos",
//       Icon: Heart,
//       router: "/favoritos",
//     },
//     {
//       id: 3,
//       name: "Carrito",
//       Icon: ShoppingCart,
//       router: "/",
//     },
//     {
//       id: 4,
//       name: "Mi cuenta",
//       Icon: UserRound,
//       router: "/",
//     },
//   ];
//   return (
//     <div className="fixed bottom-0 left-0 w-full h-[2.9rem] bg-white flex items-center justify-center sm:gap-[6rem] gap-[5vw] py-7 lg:hidden">
//       {items.map(({ id, name, Icon, router }) => (
//         <Items key={id} Icon={Icon} name={name} router={router} />
//       ))}
//     </div>
//   );
// }

// export default BottomNavigationBar;
