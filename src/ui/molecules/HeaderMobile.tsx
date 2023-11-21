import { FC } from "react";

type HeaderProps = {
  header: string;
};

const HeaderMobile: FC<HeaderProps> = ({ header }) => {
  return (
    <div className="lg:hidden flex items-center w-full justify-between">
      <div className="h-[1px] w-full bg-dark-primary"></div>
      <h1 className="text-center uppercase tracking-widest text-dark-primary font-light text-2xl mb-2 p-4 whitespace-nowrap">
        {header}
      </h1>
      <div className="h-[1px] w-full bg-dark-primary"></div>
    </div>
  );
};

export default HeaderMobile;
