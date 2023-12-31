import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/organisms/Navbar";
import MenuMobile from "@/ui/organisms/MenuMobile";
import LoadingTea from "@/ui/atoms/LoadingTea";
import Footer from "@/ui/organisms/Footer";

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
      <body className={inria.className}>
        <Navbar />
        <MenuMobile />
        <LoadingTea />
        {children}
        <Footer />
      </body>
    </html>
  );
}
