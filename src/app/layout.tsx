import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/organisms/Navbar";
import MenuMobile from "@/ui/organisms/MenuMobile";
import LoadingPage from "@/ui/atoms/LoadingTea";
import { Suspense } from "react";

const inria = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoolArtDesign Architecture",
  description:
    "Architektura i wykonawstwo, doradztwo dla funduszy inwestycyjnych, nadzór nad realizacją projektów.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<LoadingPage />}>
        <body className={inria.className}>
          <Navbar />
          <MenuMobile />
          {children}
        </body>
      </Suspense>
    </html>
  );
}
