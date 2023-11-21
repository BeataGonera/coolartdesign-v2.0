import { FC } from "react";
import Image from "next/image";

type ImageBuildingProps = {
  image: string;
};

const ImageBuilding: FC<ImageBuildingProps> = ({ image }) => {
  return (
    <Image
      src={image}
      alt={image}
      width="500"
      height="500"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  );
};

export default ImageBuilding;
