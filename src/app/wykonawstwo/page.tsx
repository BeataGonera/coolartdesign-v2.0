import DecorStripesDark from "@/ui/atoms/DecorStripesDark";
import DecorStripesLeft from "@/ui/atoms/DecorStripesLeft";
import Footer from "@/ui/organisms/Footer";
import Image from "next/image";

const WykonawstwoPage = () => {
  return (
    <main className="w-screen h-screen bg-none lg:bg-wykonawstwo-page bg-cover flex flex-col justify-between min-h-screen pt-36 text-dark-primary">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 p-2 lg:p-12 lg:bg-none">
        <section className="w-full flex flex-col gap-8 ">
          <div className="">
            <Image
              src="/house.png"
              alt="house"
              layout="responsive"
              width="200"
              height="200"
            />
          </div>
          <h1 className="text-center lg:text-left uppercase font-thin text-2xl lg:text-5xl text-dark-primary tracking-widest">
            Budujemy pod klucz
          </h1>
          <div className="hidden lg:block">
            <DecorStripesLeft />
          </div>
          <div className="block lg:hidden">
            <DecorStripesDark />
          </div>
          <p className="text-lg text-center lg:text-left lg:text-2xl tracking-widest font-thin">
            Zapewniamy kompleksowe wykonawstwo, rzetelną dokumentację procesu
            budowy i wykonywanych robót. Posiadamy własne ekipy wykonawcze.
          </p>
        </section>
        <section className="flex flex-col gap-8 pb-8 lg:pb-0">
          <p className="uppercase tracking-widest text-center lg:text-left text-2xl font-light text-dark-primary">
            Nasze usługi obejmują:
          </p>
          <ul className="text-lg lg:text-2xl font-light services list-none lg:list-square tracking-widest">
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
      <Footer />
    </main>
  );
};

export default WykonawstwoPage;
