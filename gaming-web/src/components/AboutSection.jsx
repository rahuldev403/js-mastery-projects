import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  FaTrophy,
  FaUsers,
  FaDiscord,
  FaGift,
  FaGamepad,
  FaStar,
} from "react-icons/fa";

const Sparkle = ({ className = "" }) => (
  <svg
    className={`absolute w-7 h-7 text-fuchsia-400 opacity-80 pointer-events-none ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{
      animation: "sparkle 1.6s infinite linear",
      top: `${Math.random() * 60 + 10}%`,
      left: `${Math.random() * 80 + 5}%`,
      zIndex: 2,
    }}
  >
    <polygon points="12,2 15,10 23,12 15,14 12,22 9,14 1,12 9,10" />
    <style>{`
      @keyframes sparkle {
        0% { opacity: 0; transform: scale(0.5) rotate(0deg);}
        50% { opacity: 1; transform: scale(1.2) rotate(20deg);}
        100% { opacity: 0; transform: scale(0.5) rotate(0deg);}
      }
    `}</style>
  </svg>
);

// Gaming Feature List
const features = [
  {
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    title: "Daily Tournaments",
    desc: "Compete in thrilling daily brackets across top titles.",
  },
  {
    icon: <FaUsers className="text-blue-400 text-3xl" />,
    title: "Global Playerbase",
    desc: "Join a massive, inclusive community of gamers worldwide.",
  },
  {
    icon: <FaDiscord className="text-indigo-400 text-3xl" />,
    title: "Exclusive Discord",
    desc: "Access private channels for strategy, team-ups, and events.",
  },
  {
    icon: <FaGift className="text-pink-400 text-3xl" />,
    title: "Monthly Giveaways",
    desc: "Win gaming gear, in-game loot, and more every month.",
  },
  {
    icon: <FaGamepad className="text-green-400 text-3xl" />,
    title: "Pro Coaching",
    desc: "Level up with sessions from elite esports coaches.",
  },
  {
    icon: <FaStar className="text-fuchsia-400 text-3xl" />,
    title: "Achievements & Rewards",
    desc: "Unlock badges and climb the leaderboards.",
  },
];

// Dummy images for the marquee
const images = [
  "/images/game1.png",
  "/images/game2.png",
  "/images/game3.png",
  "/images/game4.png",
  "/images/game5.png",
  "/images/game6.png",
  "/images/game7.png",
  "/images/game8.png",
];

const AboutSection = () => {
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#1a1333] to-[#191970] p-8"
    >
      {/* Animated Gradient Heading with Sparkles */}
      <div className="relative flex items-center justify-center mb-8">
        <motion.h2
          className="relative text-4xl md:text-6xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundSize: "200% 200%",
            animation: "gradient-x 6s ease-in-out infinite",
          }}
        >
          <span className="relative z-10">Level Up Your Gaming Experience</span>
          {/* Sparkles overlay */}
          {[...Array(7)].map((_, i) => (
            <Sparkle key={i} />
          ))}
        </motion.h2>
        <style>{`
          @keyframes gradient-x {
            0%,100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </div>

      {/* Vibrant Feature List with Gaming Vibe */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="relative bg-gradient-to-br from-gray-900 via-fuchsia-900/40 to-indigo-900 rounded-2xl p-8 flex flex-col items-center shadow-xl border-2 border-fuchsia-700/30 hover:border-fuchsia-400 transition group"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px 8px #a21caf" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-white text-xl font-bold mb-2 text-center group-hover:text-fuchsia-300 transition">
              {f.title}
            </h3>
            <p className="text-fuchsia-200 text-center">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Smooth Infinite Marquee with Hover-Stop and Smooth Break */}
      <div className="w-full max-w-5xl mb-10 rounded-xl overflow-hidden shadow-lg border border-fuchsia-700/20">
        <Marquee
          speed={40}
          gradient={true}
          gradientColor={[26, 19, 51]}
          gradientWidth={80}
          pauseOnHover={true}
          autoFill={true}
          direction="left"
          className="gaming-marquee"
        >
          {images.concat(images).map((src, idx) => (
            <motion.div
              key={idx}
              className="mx-6 my-3 w-40 h-28 rounded-xl overflow-hidden bg-gray-900 shadow-lg flex items-center justify-center border-2 border-fuchsia-700/20 hover:border-fuchsia-400 transition"
              whileHover={{
                scale: 1.08,
                rotate: 2,
                zIndex: 2,
                boxShadow: "0 0 32px 8px #a21caf",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={src}
                alt={`Game ${idx + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </Marquee>
      </div>

      {/* Tagline */}
      <motion.p
        className="max-w-2xl text-lg md:text-2xl text-center text-[#babaff] font-medium leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Welcome to the future of online tournaments. Compete, connect, and
        conquer in the world's most immersive gaming platform.
        <br />
        <span className="text-violet-400 font-bold">
          Join players from around the globe, unlock achievements, and shape
          your legend.
        </span>
      </motion.p>

      {/* Community Button */}
      <button
        className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
        onClick={() => setShowCommunity(true)}
      >
        Know About the Community
      </button>

      {/* Community Popup */}
      {showCommunity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center"
          onClick={() => setShowCommunity(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            className="bg-gradient-to-br from-violet-900 to-indigo-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-violet-500/30 text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl hover:text-violet-400"
              onClick={() => setShowCommunity(false)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">About Our Community</h3>
            <p className="mb-4 text-[#babaff]">
              Welcome to the heart of competitive gaming! Our community is a
              vibrant hub for players of all levels.
              <br />
              <br />
              <span className="font-semibold text-violet-300">
                What makes us special?
              </span>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
                <li>Daily tournaments and leaderboard events</li>
                <li>Supportive, inclusive, and global player base</li>
                <li>Exclusive Discord channels for strategy and team-ups</li>
                <li>Monthly giveaways and pro coaching sessions</li>
              </ul>
              <br />
              <span className="italic text-fuchsia-400">
                Join us and level up your game—together!
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;
