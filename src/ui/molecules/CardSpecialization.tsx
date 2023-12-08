import { Specialization } from "@/types/SpecializationType";
import Link from "next/link";

const CardSpecialization = ({
  specialization,
}: {
  specialization: Specialization;
}) => {
  return (
    <Link
      href={specialization.href}
      className="bg-dark-primary flex h-[200px] lg:h-auto flex-col gap-2 justify-center items-center hover:opacity-80 hover:animate-pulse"
    >
      {specialization.icon}
      <h4 className="text-white text-2xl tracking-widest">
        {specialization.label}
      </h4>
    </Link>
  );
};

export default CardSpecialization;
