import { useState } from "react";
import AuthPopup from "./AuthPopup";
//import CustomCursor from "./CustomCursor";

const Hero = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <main className="relative w-full h-screen overflow-hidden flex justify-center">
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[95%] object-cover absolute top-0 left-0 -z-10"
      ></video>
      <div className="absolute bottom-[15%] flex flex-col gap-4 items-center">
        <img
          src="/images/illu-text.png"
          alt="illu"
          className="md:w-[30rem] w-[20rem]"
        />
        <h1 className="md:text-2xl text-1xl font-bold">
          Explore , Capture , Conquer
        </h1>
        <div className="md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]"></div>

        {/* Getting Started Button */}
        <button
          className="h-8 px-6 bg-gradient-to-r from-fuchsia-600 to-purple-700 rounded-lg font-semibold text-white text-nowrap shadow-md hover:opacity-80 transition-all duration-300"
          onClick={() => setShowAuth(true)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Getting Started
        </button>
        <div className="flex items-center gap-5 text-3xl font-extrabold text-gray-200">
          <img src="/images/illu-logo.png" alt="" className="md:h-16 h-12" />
          <h1>LEVEL-403</h1>
        </div>
        <p className="max-w-[80%] text-center text-[#babaff]">
          Notice - Illuvium Games are in Beta Particiaption involves risk. Read
          our full Disclaimer here.
        </p>
      </div>
      <div className="absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1">
            <div className="w-1 h-3 bg-[#babaff] rounded-full animate-pulse"></div>
          </div>
          <p className="text-[#babaff]">Scroll Down</p>
        </div>
      </div>
      {/* Auth Popup */}
      <AuthPopup open={showAuth} onClose={() => setShowAuth(false)} />
      {/* Custom Cursor: disable when AuthPopup is open */}
      {/* <CustomCursor isActive={isHovering} disabled={showAuth} /> */}
    </main>
  );
};

export default Hero;
