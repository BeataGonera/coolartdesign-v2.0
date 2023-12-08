import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { Specialization } from "@/types/SpecializationType";
import CardSpecialization from "./CardSpecialization";

const specializations: Specialization[] = [
  {
    label: "Wykonawstwo",
    icon: <BuildOutlinedIcon sx={{ fontSize: "50px" }} />,
    href: "/wykonawstwo",
  },
  {
    label: "Architektura",
    icon: <CorporateFareOutlinedIcon sx={{ fontSize: "50px" }} />,
    href: "/architektura",
  },
  {
    label: "Doradztwo",
    icon: <InfoOutlinedIcon sx={{ fontSize: "50px" }} />,
    href: "/doradztwo",
  },
  {
    label: "Nadzór",
    icon: <DoneOutlineOutlinedIcon className="text-[50px]" />,
    href: "/nadzor",
  },
];

const SectionSpecialization = () => {
  return (
    <>
      {specializations.map((specialization) => (
        <CardSpecialization specialization={specialization} />
      ))}
    </>
  );
};

export default SectionSpecialization;
