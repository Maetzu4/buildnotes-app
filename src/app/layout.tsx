import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/General/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BuildNotes",
  description: "Here you can Build your Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="duration-300 dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster position="top-right" theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
