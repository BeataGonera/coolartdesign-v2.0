import DecorStripes from "@/ui/atoms/DecorStripes";
import DecorStripesDark from "@/ui/atoms/DecorStripesDark";
import DecorStripesRight from "@/ui/atoms/DecorStripesRight";
import HeaderMobile from "@/ui/molecules/HeaderMobile";
import Image from "next/image";

const NadzorPage = () => {
  return (
    <main className="min-h-screen w-screen bg-none lg:bg-nadzor-page bg-cover flex justify-end items-center lg:pb-0">
      <section className="w-full lg:w-1/2 p-2 lg:p-12 gap-2 lg:gap-8 flex flex-col pt-36 lg:pt-0">
        <HeaderMobile header={"Nadzór"} />
        <div className="lg:hidden">
          <Image
            src="/doradztwo-bg-mobile.png"
            alt="architect"
            layout="responsive"
            width="200"
            height="200"
          />
        </div>
        <div className="text-white lg:text-dark-primary bg-dark-primary lg:bg-inherit py-8 lg:py-0 flex flex-col gap-4 lg:gap-12 p-4 lg:p-0">
          <h1 className="w-full text-center lg:text-right uppercase font-thin tracking-widest lg:text-dark-primary text-2xl lg:text-5xl">
            Nadzorujemy realizację inwestycji
          </h1>
          <div className="hidden lg:block">
            <DecorStripesRight />
          </div>
          <div className="block lg:hidden">
            <DecorStripes />
          </div>
          <p className="w-full text-center lg:text-right text-lg lg:text-2xl font-thin">
            Po zatwierdzeniu projektu wykonawczego, CoolArtDesign zapewnia
            profesjonalny nadzór autorski nad całością inwestycji w taki sposób,
            aby realizowana była zgodnie z wolą inwestora oraz z najlepszą
            wiedzą zawodową.
          </p>
        </div>
      </section>
    </main>
  );
};

export default NadzorPage;
