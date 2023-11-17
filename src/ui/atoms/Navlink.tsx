"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type NavlinkProps = {
  path: string;
  linkName: string;
};

const Navlink: FC<NavlinkProps> = ({ path, linkName }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={pathname == `${path}` ? `menu-link active` : `menu-link`}
    >
      {linkName}
    </Link>
  );
};

export default Navlink;
