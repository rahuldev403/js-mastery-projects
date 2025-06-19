// components/IntroAnimation.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Gamepad logo (customizable)
const GameLogo = () => (
  <motion.svg
    width={96}
    height={96}
    viewBox="0 0 48 48"
    fill="none"
    className="drop-shadow-glow"
    initial={{ scale: 0.7, opacity: 0 }}
    animate={{ scale: [0.7, 1.15, 1], opacity: [0, 1, 1] }}
    transition={{ duration: 1.3, times: [0, 0.6, 1] }}
  >
    <rect x="6" y="18" width="36" height="18" rx="9" fill="#191970" stroke="#a21caf" strokeWidth="2.5" />
    <circle cx="16" cy="27" r="3" fill="#a21caf" />
    <circle cx="32" cy="27" r="3" fill="#a21caf" />
    <rect x="22" y="24" width="4" height="6" rx="2" fill="#a21caf" />
    <rect x="13" y="24" width="6" height="2" rx="1" fill="#fff" />
    <rect x="16" y="21" width="2" height="6" rx="1" fill="#fff" />
    <circle cx="36" cy="23" r="1.5" fill="#fff" />
    <circle cx="36" cy="31" r="1.5" fill="#fff" />
    {/* Scanlines */}
    <motion.rect
      x="6"
      y="18"
      width="36"
      height="18"
      rx="9"
      fill="url(#scanlines)"
      initial={{ y: 18 }}
      animate={{ y: [18, 36, 18] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      style={{ mixBlendMode: "screen", opacity: 0.15 }}
    />
    <defs>
      <linearGradient id="scanlines" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor="#fff" stopOpacity="0.6" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Particle sparkles
const SparkleParticles = () =>
  Array.from({ length: 18 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full"
      style={{
        width: Math.random() * 7 + 3,
        height: Math.random() * 7 + 3,
        background: "radial-gradient(circle, #fff 60%, #a21caf 100%)",
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0.6 + Math.random() * 0.4,
        filter: "blur(0.5px)",
        zIndex: 1,
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: [0, 1.5, 1],
        opacity: [0, 1, 0],
        y: [0, Math.random() * -80 - 20, 0],
      }}
      transition={{
        duration: 2.5 + Math.random(),
        delay: Math.random() * 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  ));

// Flickering animated gradient text
const FlickerText = ({ children }) => (
  <motion.span
    className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl"
    initial={{ opacity: 0.3, filter: "blur(4px)" }}
    animate={{
      opacity: [0.3, 1, 0.7, 1, 0.85, 1],
      filter: [
        "blur(4px)",
        "blur(0px)",
        "blur(2px)",
        "blur(0px)",
        "blur(1px)",
        "blur(0px)",
      ],
    }}
    transition={{
      duration: 2.5,
      times: [0, 0.2, 0.4, 0.7, 0.85, 1],
      ease: "easeInOut",
    }}
    style={{
      backgroundSize: "200% 200%",
      animation: "gradient-x 5s ease-in-out infinite",
    }}
  >
    {children}
    <style>{`
      @keyframes gradient-x {
        0%,100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}</style>
  </motion.span>
);

// Typewriter effect for subtext
const Typewriter = ({ text, speed = 35 }) => {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const interval = setInterval(() => {
      setShown((prev) => text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span className="inline-block">{shown}<span className="animate-pulse">|</span></span>
  );
};

const IntroAnimation = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 4000); // 4 seconds intro
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden"
          style={{
            background:
              "linear-gradient(120deg, #0f1020 0%, #1a1333 60%, #191970 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated background gradient waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 52%, #a21caf33 0%, transparent 100%)",
              zIndex: 0,
            }}
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{
              opacity: [0.7, 1, 0.8],
              scale: [1, 1.07, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          {/* Sparkle particles */}
          <SparkleParticles />
          {/* Logo */}
          <div className="relative mb-8 z-10">
            <GameLogo />
          </div>
          {/* Flickering animated title */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ letterSpacing: "0.05em" }}
          >
            <FlickerText>WELCOME TO THE ARENA</FlickerText>
          </motion.h1>
          {/* Typewriter subtext */}
          <motion.p
            className="text-lg md:text-2xl text-fuchsia-200 font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Typewriter text="Prepare to conquer your next challenge!" speed={33} />
          </motion.p>
          {/* Screen flash/fade at end */}
          <AnimatePresence>
            {show && (
              <motion.div
                className="fixed inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.18, 0] }}
                transition={{
                  duration: 0.8,
                  delay: 3.3,
                  times: [0, 0.5, 1],
                }}
                style={{
                  background: "linear-gradient(120deg,#fff,#a21caf 60%,#fff 100%)",
                  mixBlendMode: "screen",
                  zIndex: 99999,
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
