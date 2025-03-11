"use client";
import React, { useState, useEffect } from "react";
interface ResponsiveComponentProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  mobile,
  desktop,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? desktop : mobile}</>;
};
