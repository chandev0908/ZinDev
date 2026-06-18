import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import ThemeTransition from "@/components/ui/ThemeTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandev | Christian Dalagan",
  description:
    "Shopify Developer and Store Manager building custom themes, faster storefronts, B2B workflows, and ecommerce automations.",
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
