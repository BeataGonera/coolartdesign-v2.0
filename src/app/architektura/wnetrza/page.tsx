import { Project } from "@/types/ProjectType";
import DecorScrollDown from "@/ui/atoms/DecorScrollDown";
import DecorStripes from "@/ui/atoms/DecorStripes";
import MenuArchitekturaPage from "@/ui/molecules/MenuArchitekturaPage";
import SectionCardsGrid from "@/ui/molecules/SectionCardsGrid";

const interiors: Project[] = [
  {
    name: "Projekt wnętrza domu we Wrocławiu",
    description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
    image: "/interior1.webp",
  },
  {
    name: "Projekt wnętrza domu we Wrocławiu",
    description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
    image: "/interior2.webp",
  },
  {
    name: "Projekt wnętrza domu we Wrocławiu",
    description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
    image: "/interior1.webp",
  },
  {
    name: "Projekt wnętrza domu we Wrocławiu",
    description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
    image: "/interior2.webp",
  },
  {
    name: "Projekt wnętrza domu we Wrocławiu",
    description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
    image: "/interior1.webp",
  },
  {
    name: "Projekt wnętrza domu we Wrocławiu",
    description: "Zaprojektowana przez CoolArtDesign Architecture Studio",
    image: "/interior2.webp",
  },
];

const WnetrzaPage = () => {
  return (
    <main className="flex flex-col justify-end gap-4 mt-32">
      <MenuArchitekturaPage />
      <SectionCardsGrid projects={interiors} />
      <section className="w-screen bg-dark-primary h-fit p-4 py-12 text-center lg:text-left lg:p-36 lg:pt-12 leading-7 flex flex-col gap-8 lg:gap-12">
        <DecorScrollDown />
        <h1 className="text-white uppercase tracking-widest font-light text-2xl lg:text-5xl w-full text-center">
          Projektujemy od 2003 roku
        </h1>
        <DecorStripes />
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
    </main>
  );
};

export default WnetrzaPage;
