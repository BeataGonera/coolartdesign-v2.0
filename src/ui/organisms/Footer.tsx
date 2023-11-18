import LogoDark from "../atoms/LogoDark";

const Footer = () => {
  return (
    <footer className="w-screen h-fit bg-dark-primary p-4 opacity-8 flex justify-between">
      <LogoDark />
      <div className="text-sm text-white">Designed by AG Media</div>
    </footer>
  );
};

export default Footer;
