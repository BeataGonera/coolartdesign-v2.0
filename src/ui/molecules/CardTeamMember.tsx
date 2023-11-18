import { TeamMemberType } from "@/types/TeamMemberType";
import Image from "next/image";
import { FC } from "react";

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
      <div className="w-full h-full absolute top-0 left-0 p-12 flex-col justify-between bg-dark-primary opacity-0 hover:opacity-75 flex text-white">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">{teamMember.name}</h2>
          <h4 className="text-base">{teamMember.profession}</h4>
        </div>
        <div>
          <p className="text-base">{teamMember.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTeamMember;
