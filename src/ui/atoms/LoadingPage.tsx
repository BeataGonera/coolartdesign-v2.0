const LoadingPage = () => {
  return (
    <main className="w-screen h-screen absolute top-0 left-0 z-[60] flex flex-col justify-center items-center bg-white">
      <div className="preloader">
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
      </div>
      <div className="status tracking-widest font-thin text-lg">
        Wczytuję
        <span className="status__dot">.</span>
        <span className="status__dot">.</span>
        <span className="status__dot">.</span>
      </div>
    </main>
  );
};

export default LoadingPage;
