import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İsa Altunoğlu - AI, Cybersecurity & Embedded Systems",
  description: "Portfolio of İsa Altunoğlu - AI, Cybersecurity & Embedded Systems Explorer specializing in Backend, Computer Vision, and Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
