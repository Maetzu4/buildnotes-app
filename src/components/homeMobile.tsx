import { Profile } from "@/components/profile";
import { MobileOptions } from "./mobileOptions";

export default function HomeMobile() {
  return (
    <div className="w-screen h-screen flex flex-col p-4">
      {/* Componente Profile fijo en la parte superior */}
      <div className="sticky top-0 z-10">
        <Profile Toggle={true} />
      </div>

      {/* Contenido en medio */}
      <div className="pt-2 flex-1 overflow-y-auto">
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
        <div className="h-96 bg-gray-300 rounded-lg p-4 mb-4"></div>
      </div>
      {/* Botones fijos en la parte inferior */}
      <div className="sticky bottom-0 px-4 py-2 z-20">
        <MobileOptions />
      </div>
    </div>
  );
}
