// src/components/Mobile/mobileLayout.tsx
"use client";
import { MobileOptions } from "@/components/Mobile/mobileOptions";
import { HomePage } from "@/components/Mobile/homePage";
import MobileSearchDrawer from "@/components/Mobile/mobileSearchDrawer";
import { MobileSettings } from "@/components/Mobile/mobileSettings";
import { MobileNew } from "@/components/Mobile/mobileNew";
import { useMobileLayout } from "@/hooks/ui/useMobileLayout";

export default function MobileLayout() {
  const { activePage, isDrawerOpen, setIsDrawerOpen, setActivePage } =
    useMobileLayout();

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "settings":
        return <MobileSettings />;
      case "book":
        return <MobileNew />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 px-4 pb-20">{renderContent()}</div>
      <div className="fixed bottom-0 left-0 w-full dark:bg-opacity-40 bg-opacity-40 backdrop-blur-md z-10 px-4 py-1 border-t dark:border-gray-800 border-gray-200">
        <MobileOptions
          activePage={activePage}
          setActivePage={setActivePage}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </div>
      <div className="z-50">
        <MobileSearchDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </div>
    </div>
  );
}
