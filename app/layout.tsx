import "./globals.css";

import { Halant } from "next/font/google";

const halant = Halant({ weight: "500", subsets: ['latin'] });

export const metadata = {
  title: "Christian Dalagan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`overflow-x-hidden ${halant.className} text-primary-text`}>{children}</body>
    </html>
  );
}
