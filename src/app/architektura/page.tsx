import HeaderMobile from "@/ui/molecules/HeaderMobile";
import SectionBuildings from "@/ui/molecules/SectionBuildings";
import SectionInteriors from "@/ui/molecules/SectionInteriors";

const ArchitekturaPage = () => {
  return (
    <main className="flex flex-col gap-4 lg:h-[calc(100vh-63px)] justify-center xl:justify-end pt-36">
      <section className="flex p-2 lg:p-0 flex-col lg:flex-row w-screen gap-2 lg:gap-4">
        <HeaderMobile header="Architektura" />
        <SectionBuildings />
        <SectionInteriors />
      </section>
    </main>
  );
};

export default ArchitekturaPage;
