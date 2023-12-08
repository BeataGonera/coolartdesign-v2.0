import Logo from "../atoms/Logo";
import Navlink from "../atoms/Navlink";

const Navbar = () => {
  return (
    <>
      <nav className="hidden w-screen fixed top-0 h-fit lg:flex justify-between items-center py-4 px-12 bg-white opacity-80 z-50">
        <div className="w-1/6">
          <Logo />
        </div>
        <ul className="flex gap-4 xl:gap-8 text-dark-primary font-bold text-lg xl:text-xl tracking-widest menu-list">
          <Navlink path="/" linkName="Home" />
          <Navlink path="/wykonawstwo" linkName="Wykonawstwo" />
          <Navlink path="/architektura" linkName="Architektura" />
          <Navlink path="/doradztwo" linkName="Doradztwo" />
          <Navlink path="/nadzor" linkName="Nadzór" />
          <Navlink path="/about" linkName="O nas" />
          <Navlink path="/kontakt" linkName="Kontakt" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
