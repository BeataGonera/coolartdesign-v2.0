import { FC } from "react";

type LayerShadowProps = {
  cardContent: {
    title: string;
    subtitle: string;
    description: string;
  };
};

const LayerShadow: FC<LayerShadowProps> = ({ cardContent }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 p-12 flex-col justify-between bg-dark-primary opacity-0 hover:animate-appear flex text-white shadow-layer">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">{cardContent.title}</h2>
        <h4 className="text-base">{cardContent.subtitle}</h4>
      </div>
      <div>
        <p className="text-base">{cardContent.description}</p>
      </div>
    </div>
  );
};

export default LayerShadow;
