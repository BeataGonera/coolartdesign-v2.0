import DecorStripes from "@/ui/atoms/DecorStripes";
import DecorStripesLeft from "@/ui/atoms/DecorStripesLeft";
import HeaderMobile from "@/ui/molecules/HeaderMobile";
import Image from "next/image";

const WykonawstwoPage = () => {
  return (
    <main className="w-screen bg-none lg:bg-wykonawstwo-page bg-cover flex flex-col justify-center min-h-screen pt-36 text-dark-primary p-2">
      <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-12 lg:p-12 lg:bg-none">
        <section className="w-full flex flex-col gap-2">
          <HeaderMobile header={"Wykonawstwo"} />
          <div className="lg:hidden">
            <Image
              src="/house.png"
              alt="house"
              layout="responsive"
              width="200"
              height="200"
            />
          </div>
          <div className="w-full text-white lg:text-dark-primary bg-dark-primary lg:bg-inherit p-4 lg:p-0 flex flex-col gap-8 lg:gap-12 py-8 lg:py-0">
            <h1 className="text-center lg:text-left uppercase font-thin text-2xl lg:text-5xl tracking-widest">
              Budujemy pod klucz
            </h1>
            <div className="hidden lg:block">
              <DecorStripesLeft />
            </div>
            <div className="block lg:hidden">
              <DecorStripes />
            </div>
            <p className="text-lg text-center lg:text-left lg:text-2xl tracking-widest font-thin">
              Zapewniamy kompleksowe wykonawstwo, rzetelną dokumentację procesu
              budowy i wykonywanych robót. Posiadamy własne ekipy wykonawcze.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-8 pb-8 lg:pb-0 bg-dark-primary lg:bg-inherit text-white lg:text-dark-primary py-8 lg:py-0 p-4 lg:p-0">
          <p className="uppercase tracking-widest text-center lg:text-left text-2xl font-light lg:text-dark-primary">
            Nasze usługi obejmują:
          </p>
          <ul className="text-lg lg:text-2xl font-light services list-none lg:list-square tracking-widest list-inside lg:columns-2">
            <li className="mb-1 w-full text-center lg:text-left">
              Projektowanie
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Adaptację projektu
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Uzyskanie pozwolenia
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Obsługę geodezyjną
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Realizację projektu
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Odbiór budowy
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Projektowanie wnętrz
            </li>
            <li className="mb-1 w-full text-center lg:text-left">
              Wykańczanie pod klucz
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default WykonawstwoPage;
