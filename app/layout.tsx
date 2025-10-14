import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RestartFitness - Transform Your Life",
  description: "Professional fitness training and wellness programs to help you restart your fitness journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
