import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#09291b] flex items-center justify-center z-[9999] transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1
        className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text"
        style={{
          fontFamily: `"Pragmatica Extended", sans-serif`,
          backgroundImage: "linear-gradient(to right, #8e7d53, transparent)",
          animation: "shimmerOnce 1s linear forwards",
          backgroundSize: "200% auto",
          backgroundPosition: "-100% 0",
        }}
      >
        FALCO
      </h1>

      <style>
        {`
          @keyframes shimmerOnce {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 100% 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
