"use client";

import { useIsMenuOpenStore } from "@/state/isMenuOpen";
import Logo from "../atoms/Logo";
import ButtonToggleMenu from "../atoms/ButtonToggleMenu";
import Navlink from "../atoms/Navlink";

const MenuMobile = () => {
  const { isMenuOpen } = useIsMenuOpenStore();
  return (
    <>
      <nav
        className={
          isMenuOpen
            ? `lg:hidden flex flex-col w-screen h-screen bg-white opacity-100 fixed top-0 left-0 p-4 gap-14 z-20`
            : `flex lg:hidden w-screen fixed bg-white opacity-80 top-0 left-0 p-4 h-fit justify-between items-center z-20`
        }
      >
        <div className="w-1/2">
          <Logo />
        </div>
        <ul
          className={
            isMenuOpen ? "flex flex-col gap-8 text-lg items-center" : "hidden"
          }
        >
          <Navlink path="/" linkName="Home" />
          <Navlink path="/wykonawstwo" linkName="Wykonawstwo" />
          <Navlink path="/architektura" linkName="Architektura" />
          <Navlink path="/doradztwo" linkName="Doradztwo" />
          <Navlink path="/nadzór" linkName="Nadzór" />
          <Navlink path="/about" linkName="O nas" />
          <Navlink path="/kontakt" linkName="Kontakt" />
        </ul>
      </nav>
      <ButtonToggleMenu />
    </>
  );
};

export default MenuMobile;
