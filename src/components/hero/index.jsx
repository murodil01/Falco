const Hero = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen flex items-center pt-[120px] md:pt-[100px]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#09291b] mb-4">
            Welcome to <span className="text-[#8e7d53]">Falco</span> Community
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Where passion meets purpose. Together, we learn, grow, and build the
            future. Falco is not just a community — it's your launchpad to
            greatness.
          </p>
          <button className="bg-[#09291b] !text-white w-[220px] h-[55px] px-2 py-3 rounded-2xl hover:bg-[#8e7d53] transition duration-300">
            Join the Movement
          </button>
        </div>

        <div className="flex-1">
          <div className="w-full max-w-md md:max-w-lg aspect-video mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/MXxlafFN6Ew"
              title="Falco Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
