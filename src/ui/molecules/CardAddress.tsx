import Logo from "../atoms/Logo";

const CardAddress = () => {
  return (
    <section className="lg:w-1/3 bg-white opacity-80 p-4 lg:p-8 flex flex-col gap-4">
      <Logo />
      <div className="w-full flex flex-col text-dark-primary font-light tracking-widest text-lg gap-2">
        <p>coolartdesign@gmail.com</p>
        <p>+48 665 725 451</p>
        <p>ul. Marszałkowska 12</p>
        <p>00 - 000</p>
        <p>Warszawa</p>
      </div>
    </section>
  );
};

export default CardAddress;
