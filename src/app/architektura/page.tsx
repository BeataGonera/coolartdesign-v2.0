import HeaderArchitecture from "@/ui/molecules/HeaderArchitecture";
import SectionBuildings from "@/ui/molecules/SectionBuildings";
import SectionInteriors from "@/ui/molecules/SectionInteriors";
import Footer from "@/ui/organisms/Footer";

const ArchitekturaPage = () => {
  return (
    <main className="flex flex-col gap-4 min-h-screen justify-end pt-36">
      <section className="flex p-2 lg:p-0 flex-col lg:flex-row w-screen gap-2 lg:gap-4">
        <HeaderArchitecture />
        <SectionBuildings />
        <SectionInteriors />
      </section>
      <Footer />
    </main>
  );
};

export default ArchitekturaPage;
