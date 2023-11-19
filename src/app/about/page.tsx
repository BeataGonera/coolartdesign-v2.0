import { TeamMemberType } from "@/types/TeamMemberType";
import DecorStripes from "@/ui/atoms/DecorStripes";
import CardTeamMember from "@/ui/molecules/CardTeamMember";
import Footer from "@/ui/organisms/Footer";

const teamMembers: TeamMemberType[] = [
  {
    name: "Piotr Kowalski",
    profession: "Architekt",
    description: "Ukończył studia na wydziale...",
    image: "/teamMember.webp",
  },
  {
    name: "Piotr Kowalski",
    profession: "Architekt",
    description: "Ukończył studia na wydziale...",
    image: "/teamMember.webp",
  },
  {
    name: "Piotr Kowalski",
    profession: "Architekt",
    description: "Ukończył studia na wydziale...",
    image: "/teamMember.webp",
  },
  {
    name: "Piotr Kowalski",
    profession: "Architekt",
    description: "Ukończył studia na wydziale...",
    image: "/teamMember.webp",
  },
];

const AboutPage = () => {
  return (
    <>
      <main className="pt-32 lg:pt-48 flex flex-col gap-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 p-4 lg:p-12">
          {teamMembers.map((teamMember) => (
            <CardTeamMember teamMember={teamMember} />
          ))}
        </section>
        <section className="w-screen bg-dark-primary h-fit p-4 py-12 text-center lg:text-left lg:p-36 leading-7 flex flex-col gap-12">
          <h1 className="text-white uppercase tracking-widest font-light text-5xl w-full text-center">
            O nas
          </h1>
          <DecorStripes />
          <p className="text-white tracking-widest">
            Firma CoolArtDesign została formalnie zarejestrowana w 2003 r. i
            jest efektem długotrwałej współpracy z doświadczonymi architektami
            oraz dekoratorami wnętrz. Zdobyta wiedza i doświadczenie pozwalają
            nam świadczyć usługi na bardzo wysokim poziomie. Podstawową dewizę
            firmy stanowi dążenie do wysokiej jakości estetycznej, realizacji
            projektów w założonym terminie oraz w ramach założonego budżetu.
            Szeroka znajomość oferty nowoczesnych rozwiązań budowalanych oraz
            wnętrzarskich oparta na solidnym kosztorysie, pozwala realizować
            bezbłędnie założenia projektowe. W połączeniu z wielkim
            zaangażowaniem naszych pracowników we współpracy z
            inwestorem/klientem nasze założenia są gwarancją sukcesu.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
