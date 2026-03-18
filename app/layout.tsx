import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import ThemeTransition from "@/components/ui/ThemeTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandev — Christian Dalagan",
  description: "Full-stack web developer. Building modern web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SmoothScroll />
          <Cursor />
          <ThemeTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}