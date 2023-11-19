import { FC } from "react";
import ImageBuilding from "../atoms/ImageBuilding";
import { Project } from "@/types/ProjectType";
import LayerShadow from "../atoms/LayerShadow";

type CardProjectProps = {
  project: Project;
};

const CardProject: FC<CardProjectProps> = ({ project }) => {
  return (
    <div className="relative w-full h-full">
      <ImageBuilding image={project.image} />
      <LayerShadow
        cardContent={{
          title: project.name,
          subtitle: "",
          description: project.description,
        }}
      />
    </div>
  );
};

export default CardProject;
