import { FC } from "react";
import { Project } from "@/types/ProjectType";
import CardProject from "./CardProject";

type SectionCardsGridProps = {
  projects: Project[];
};

const SectionCardsGrid: FC<SectionCardsGridProps> = ({ projects }) => {
  return (
    <section className="grid gdid-cols-1 lg:grid-cols-3 w-full gap-4">
      {projects.map((project) => (
        <CardProject project={project} />
      ))}
    </section>
  );
};

export default SectionCardsGrid;
