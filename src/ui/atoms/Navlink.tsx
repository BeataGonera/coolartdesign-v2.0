"use client";

import { useIsMenuOpenStore } from "@/state/isMenuOpen";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type NavlinkProps = {
  path: string;
  linkName: string;
};

const Navlink: FC<NavlinkProps> = ({ path, linkName }) => {
  const pathname = usePathname();
  const { setIsMenuOpen } = useIsMenuOpenStore();
  return (
    <Link
      href={path}
      className={pathname == path ? `menu-link active` : `menu-link`}
      onClick={() => setIsMenuOpen(false)}
    >
      {linkName}
    </Link>
  );
};

export default Navlink;
