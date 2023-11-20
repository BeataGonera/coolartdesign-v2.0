import CardAddress from "@/ui/molecules/CardAddress";
import Map from "@/ui/molecules/MapGoogle";
import Footer from "@/ui/organisms/Footer";
import FormContact from "@/ui/organisms/FormContact";

const ContactPage = () => {
  return (
    <>
      <main className="w-screen">
        <section className="w-full h-fit bg-contact-page-mobile lg:bg-contact-page bg-cover object-left-top lg:object-center min-h-screen relative text-white flex flex-col justify-center gap-12 p-2 pt-36 lg:gap-24 lg:p-12 lg:pt-48">
          <div className="w-full h-full absolute top-0 left-0 bg-dark-primary opacity-40 "></div>
          <div className="w-full z-20 flex flex-col gap-12">
            <h1 className="uppercase tracking-widest text-2xl text-center lg:text-left lg:text-5xl font-light">
              Skontaktuj się z nami
            </h1>
            <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
              <FormContact />
              <CardAddress />
            </div>
          </div>
          <div className="z-20 flex items-center">
            <div className="w-1/4 h-[1px] bg-white"></div>
            <h2 className="text-white uppercase tracking-widest text-2xl lg:text-5xl font-light p-8 lg:w-1/3 whitespace-nowrap">
              tu jesteśmy
            </h2>
            <div className="w-full h-[1px] bg-white"></div>
          </div>
          <Map />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
