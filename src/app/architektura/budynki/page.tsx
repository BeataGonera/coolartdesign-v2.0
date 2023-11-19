import { Project } from "@/types/ProjectType";
import MenuArchitekturaPage from "@/ui/molecules/MenuArchitekturaPage";
import SectionCardsGrid from "@/ui/molecules/SectionCardsGrid";
import Footer from "@/ui/organisms/Footer";

const BudynkiPage = () => {
  const buildings: Project[] = [
    {
      name: "Inwestycja we Wrocławiu",
      description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
      image: "/building1.png",
    },
    {
      name: "Inwestycja we Wrocławiu",
      description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
      image: "/building2.png",
    },
    {
      name: "Inwestycja we Wrocławiu",
      description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
      image: "/building3.png",
    },
    {
      name: "Inwestycja we Wrocławiu",
      description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
      image: "/building4.png",
    },
    {
      name: "Inwestycja we Wrocławiu",
      description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
      image: "/building1.png",
    },
    {
      name: "Inwestycja we Wrocławiu",
      description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
      image: "/building2.png",
    },
  ];

  return (
    <main className="flex flex-col justify-end gap-4 mt-32">
      <MenuArchitekturaPage />
      <SectionCardsGrid projects={buildings} />
      <section className="w-screen bg-dark-primary h-fit p-4 py-12 text-center lg:text-left lg:p-36 leading-7 flex flex-col gap-12">
        <h1 className="text-white uppercase tracking-widest font-light text-2xl lg:text-5xl w-full text-center">
          Projektujemy od 2003 roku
        </h1>
        <p className="text-white tracking-widest">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default BudynkiPage;
