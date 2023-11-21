import DecorStripes from "@/ui/atoms/DecorStripes";
import DecorStripesRight from "@/ui/atoms/DecorStripesRight";
import HeaderMobile from "@/ui/molecules/HeaderMobile";
import Image from "next/image";

const DoradztwoPage = () => {
  return (
    <main className="min-h-screen w-screen bg-none lg:bg-doradztwo-page bg-cover flex justify-end items-center lg:pb-0 p-2">
      <section className="w-full lg:w-1/2 lg:p-12 gap-2 flex flex-col pt-36 lg:pt-0 text-white lg:text-dark-primary">
        <HeaderMobile header={"Doradztwo"} />

        <div className="lg:hidden ">
          <Image
            src="/doradztwo-mobile.png"
            alt="architect"
            layout="responsive"
            width="200"
            height="200"
          />
        </div>
        <div className="w-full bg-black lg:bg-inherit p-4 pb-8 pt-8 lg:pt-0 lg:pb-0 lg:p-0 flex flex-col gap-8 lg:gap-12">
          <h1 className="w-full text-center lg:text-right uppercase font-thin tracking-widest text-2xl lg:text-5xl">
            Doradzamy inwestorom i funduszom inwestycyjnym
          </h1>
          <div className="hidden lg:block">
            <DecorStripesRight />
          </div>
          <div className="block lg:hidden">
            <DecorStripes />
          </div>
          <p className="w-full text-center lg:text-right text-lg lg:text-2xl font-thin">
            Wykonujemy analizy pokazujące możliwe zagospodarowanie działki,
            uzyskane powierzchnie PUM, wskazujemy optymalne kierunki rozwoju
            projektu, ich uwarunkowania oraz problemy mogące występować w czasie
            realizacji inwestycji. Przygotowujemy szacunkowe kosztorysy i
            schematy cashflow. Jesteśmy w stanie przygotowywać kosztorysy
            realizacyjne.
          </p>
        </div>
      </section>
    </main>
  );
};

export default DoradztwoPage;
