import HeaderMobile from "@/ui/molecules/HeaderMobile";
import SectionSpecialization from "@/ui/molecules/SectionSpecializations";

export default function Home() {
  return (
    <main className="w-screen lg:h-[calc(100vh-100px-63px)] mt-[100px] flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-landing-page gap-2 text-white pb-2">
      <HeaderMobile header="Architektura wykonawstwo" />

      <div className="w-full col-span-4">
        <h1 className="w-full h-full hidden lg:flex px-12 text-center text-dark-primary lg:text-right uppercase font-thin tracking-widest text-2xl lg:text-5xl items-center justify-end">
          Architektura i wykonawstwo
        </h1>
      </div>
      <div className="bg-dark-primary p-8 flex text-center lg:text-left justify-center items-center text-2xl">
        Zapewniamy kompleksowe wykonawstwo, rzetelną dokumentację procesu budowy
        i wykonywanych robót. Posiadamy własne ekipy wykonawcze.
      </div>
      <div className="bg-landing-page h-[300px] lg:h-auto bg-cover bg-center col-span-3 row-span-2"></div>
      <div className="bg-dark-primary h-[100px] lg:h-auto uppercase flex justify-center items-center tracking-widest text-2xl">
        20 lat na rynku
      </div>
      <SectionSpecialization />
    </main>
  );
}
