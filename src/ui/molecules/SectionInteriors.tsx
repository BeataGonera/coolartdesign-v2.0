import Link from "next/link";
import ImageBuilding from "../atoms/ImageBuilding";

const interiors = ["/interior1.webp", "/interior2.webp"];

const SectionInteriors = () => {
  return (
    <>
      <section className="hidden lg:grid grid-cols-1 gap-4 w-1/3 relative">
        {interiors.map((interior, index) => (
          <ImageBuilding image={interior} key={index} />
        ))}
        <div className="absolute top-0 left-0 w-full h-full p-12 pr-0">
          <Link
            href="/architektura/wnetrza"
            className="bg-white opacity-75 w-full h-full hover:animate-category flex items-end p-12 cursor-pointer category"
          >
            <p className="uppercase font-light tracking-widest text-dark-primary">
              Wnętrza
            </p>
          </Link>
        </div>
      </section>
      <a
        href="/architektura/wnetrza"
        className="w-full lg:hidden h-[30vh] relative"
      >
        <div className="absolute top-0 left-0 w-full h-full p-2 flex items-center">
          <div className="uppercase font-light tracking-widest text-dark-primary flex items-center justify-center w-full h-1/2 bg-white opacity-75 ">
            Wnętrza
          </div>
        </div>
        <img
          src="/interior1.png"
          className="w-full h-full object-cover"
          alt="buildings"
        />
      </a>
    </>
  );
};

export default SectionInteriors;
