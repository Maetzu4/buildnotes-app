"use client";
import { ResponsiveComponent } from "@/components/General/responsiveComponent";
import HomeMobile from "@/components/Mobile/homeMobile";
import HomeDesktop from "@/components/Desktop/homeDesk";
export default function Home() {
  return (
    <div className="dark:text-white text-black">
      <ResponsiveComponent mobile={<HomeMobile />} desktop={<HomeDesktop />} />
    </div>
  );
}
