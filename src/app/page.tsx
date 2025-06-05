// src/app/page.tsx
"use client";
import { ResponsiveComponent } from "@/components/Mui/responsiveComponent"; // determina si es mobile o no
import MobileLayout from "@/components/Mobile/mobileLayout"; // layout para mobile
import HomeDesktop from "@/components/Desktop/homeDesk"; // layout para desktop
export default function Home() {
  return (
    <div>
      {/* Componente que lleva el mobile o el desktop para cargar */}
      <ResponsiveComponent
        mobile={<MobileLayout />}
        desktop={<HomeDesktop />}
      />
    </div>
  );
}
