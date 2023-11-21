export default function Home() {
  return (
    <main className="w-screen h-screen bg-landing-page bg-cover">
      <div className="w-full h-full bg-dark-primary opacity-40"></div>
      <section className="flex flex-col absolute bottom-0 pl-4 lg:pl-48 left-0 h-1/2 gap-4 lg:gap-12 text-white tracking-widest uppercase font-light">
        <h1 className="text-4xl lg:text-6xl">Architektura i wykonawstwo</h1>
        <h2 className="text-xl lg:text-3xl pl-0 lg:pl-24">
          Doradztwo dla funduszy inwestycyjnych i inwestorów
        </h2>
        <h2 className="text-xl lg:text-3xl">Nadzór nad realizacją projektów</h2>
      </section>
    </main>
  );
}
