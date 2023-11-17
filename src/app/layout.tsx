import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";

const inria = Inria_Sans({
  weight: ["400", "700"],
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
      <body className={inria.className}>{children}</body>
    </html>
  );
}
