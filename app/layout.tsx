import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruhanur Islam Babu | Full Stack Developer",
  description: "Personal portfolio of Ruhanur Islam Babu — Full Stack Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}