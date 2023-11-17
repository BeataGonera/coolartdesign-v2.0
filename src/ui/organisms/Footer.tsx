import LogoDark from "../atoms/LogoDark";

const Footer = () => {
  return (
    <footer className="w-screen h-8 bg-dark-primary absolute bottom-0 left-0 px-12 opacity-8 flex justify-between">
      <LogoDark />
      <div className="text-sm text-white">Designed by AG Media</div>
    </footer>
  );
};

export default Footer;
