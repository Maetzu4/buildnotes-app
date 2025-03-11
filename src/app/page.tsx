"use client";
import { ResponsiveComponent } from "@/components/Mui/responsiveComponent";
import MobileLayout from "@/components/Mobile/mobileLayout";
import HomeDesktop from "@/components/Desktop/homeDesk";
export default function Home() {
  return (
    <div className="dark:text-white text-black">
      <ResponsiveComponent
        mobile={<MobileLayout />}
        desktop={<HomeDesktop />}
      />
    </div>
  );
}
