import { TeamMemberType } from "@/types/TeamMemberType";
import Image from "next/image";
import { FC } from "react";
import LayerShadow from "../atoms/LayerShadow";

type CardTeamMemberProps = {
  teamMember: TeamMemberType;
};

const CardTeamMember: FC<CardTeamMemberProps> = ({ teamMember }) => {
  return (
    <div className="relative w-full cursor-pointer">
      <Image
        src={teamMember.image}
        alt={teamMember.name}
        width="100"
        height="100"
        layout="responsive"
      />
      <LayerShadow
        cardContent={{
          title: teamMember.name,
          subtitle: teamMember.profession,
          description: teamMember.description,
        }}
      />
    </div>
  );
};

export default CardTeamMember;
