import FALCO from "../../assets/FALCO.png";

const Hero = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen flex items-center pt-[120px] md:pt-[100px]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#09291b] mb-4 leading-tight">
            Welcome to <span className="text-[#8e7d53]">Falco</span> Community
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
            Where passion meets purpose. Together, we learn, grow, and build the
            future. Falco is not just a community — it's your launchpad to
            greatness.
          </p>
          <button className="bg-[#09291b] font-[500] text-white w-[200px] h-[55px] px-6 py-3 rounded-2xl hover:bg-[#8e7d53] transition duration-300 text-lg">
            <a href="#contact">Contact us</a>
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="w-[280px] md:w-[350px] lg:w-[400px] max-h-[500px] overflow-hidden rounded-2xl">
            <img
              src={FALCO}
              alt="Falco Illustration"
              loading="lazy"
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
