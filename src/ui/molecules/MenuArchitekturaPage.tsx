"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuArchitekturaPage = () => {
  const pathname = usePathname();
  return (
    <section className="flex w-screen justify-end px-12 gap-8">
      <Link
        href="/architektura/wnetrza"
        className={
          pathname == "/architektura/wnetrza"
            ? "uppercase tracking-widest text-dark-primary text-lg font-bold"
            : `uppercase tracking-widest text-dark-primary text-lg font-light`
        }
      >
        Wnętrza
      </Link>
      <Link
        href="/architektura/budynki"
        className={
          pathname.includes("/architektura/budynki")
            ? "uppercase tracking-widest text-dark-primary text-lg font-bold"
            : `uppercase tracking-widest text-dark-primary text-lg font-light`
        }
      >
        Budynki
      </Link>
    </section>
  );
};

export default MenuArchitekturaPage;
