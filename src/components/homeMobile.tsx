import { Profile } from "@/components/profile";
import { MobileOptions } from "./mobileOptions";
import { MobileContent } from "./mobileContent";

export default function HomeMobile() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Componente Profile fijo en la parte superior */}
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-lg z-10 px-4 pt-2 rounded-sm">
        <Profile Toggle={true} />
      </div>

      {/* Contenido en medio */}
      <div className="pb-10 pt-14 flex-1 px-4">
        <MobileContent />
      </div>

      {/* Botones fijos en la parte inferior */}
      <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-40 backdrop-blur-md shadow-lg z-10 px-4 py-1 rounded-sm">
        <MobileOptions />
      </div>
    </div>
  );
}
