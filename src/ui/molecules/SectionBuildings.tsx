import Link from "next/link";
import ImageBuilding from "../atoms/ImageBuilding";

const buildings = [
  "/building1.webp",
  "/building2.webp",
  "/building3.webp",
  "/building4.webp",
];

const SectionBuildings = () => {
  return (
    <>
      <section className="hidden lg:grid grid-cols-2 gap-4 w-2/3 relative">
        {buildings.map((building, index) => (
          <ImageBuilding image={building} key={index} />
        ))}
        <div className="absolute top-0 right-0 w-full h-full p-12 pl-0">
          <Link
            href="/architektura/budynki"
            className="bg-white opacity-75 w-full h-full hover:animate-category cursor-pointer p-12 flex items-end category"
          >
            <p className="uppercase font-light tracking-widest text-dark-primary w-full text-end">
              Budynki
            </p>
          </Link>
        </div>
      </section>
      <a
        href="/architektura/budynki"
        className="w-full lg:hidden h-[30vh] relative"
      >
        <div className="absolute top-0 left-0 w-full h-full p-2 flex items-center">
          <div className="uppercase font-light tracking-widest text-dark-primary flex items-center justify-center w-full h-1/2 bg-white opacity-75 ">
            Budynki
          </div>
        </div>
        <img
          src="/building1.png"
          className="w-full h-full object-cover"
          alt="buildings"
        />
      </a>
    </>
  );
};

export default SectionBuildings;
