import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaTrophy, FaMedal, FaCrown } from "react-icons/fa";
import "@splidejs/react-splide/css";

// Dummy data
const banners = [
  {
    id: 1,
    image: "/images/tourney1.jpg",
    title: "Valorant Masters",
    subtitle: "Grand Finals Live!",
  },
  {
    id: 2,
    image: "/images/tourney2.jpg",
    title: "CS:GO Showdown",
    subtitle: "Clash of Titans",
  },
  {
    id: 3,
    image: "/images/tourney3.jpg",
    title: "FIFA 24 Cup",
    subtitle: "Goal Rush",
  },
];

const offers = [
  {
    id: 1,
    game: "Valorant",
    offer: "50% off Entry Fee!",
    image: "/images/valorant.jpg",
  },
  {
    id: 2,
    game: "CS:GO",
    offer: "Win a Gaming Mouse!",
    image: "/images/csgo.jpg",
  },
  {
    id: 3,
    game: "FIFA 24",
    offer: "Free Jersey for Top 10",
    image: "/images/fifa.jpg",
  },
];

const liveGames = [
  {
    id: 1,
    game: "Valorant",
    streamer: "ProPlayerX",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/valorant.jpg",
  },
  {
    id: 2,
    game: "CS:GO",
    streamer: "HeadshotKing",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/csgo.jpg",
  },
];

const stories = [
  {
    id: 1,
    player: "Shadow",
    story: "From Bronze to Champion in 2 months!",
    avatar: "/images/avatar2.png",
  },
  {
    id: 2,
    player: "Ace",
    story: "Clutched 1v5 in the finals!",
    avatar: "/images/avatar3.png",
  },
  {
    id: 3,
    player: "Nova",
    story: "Youngest MVP in tournament history.",
    avatar: "/images/avatar4.png",
  },
];

const leaderboards = {
  Valorant: [
    { name: "Shadow", score: 980, avatar: "/images/avatar2.png" },
    { name: "Ace", score: 950, avatar: "/images/avatar3.png" },
    { name: "Nova", score: 900, avatar: "/images/avatar4.png" },
  ],
  "CS:GO": [
    { name: "HeadshotKing", score: 990, avatar: "/images/avatar1.png" },
    { name: "SniperWolf", score: 940, avatar: "/images/avatar2.png" },
    { name: "RushB", score: 900, avatar: "/images/avatar3.png" },
  ],
  "FIFA 24": [
    { name: "Goalie", score: 980, avatar: "/images/avatar4.png" },
    { name: "Striker", score: 970, avatar: "/images/avatar1.png" },
    { name: "MidfieldMaestro", score: 950, avatar: "/images/avatar2.png" },
  ],
};

const games = Object.keys(leaderboards);

export default function TournamentPage() {
  const [livePopup, setLivePopup] = useState(null);
  const [selectedGame, setSelectedGame] = useState(games[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1333] to-[#191970] pb-20 pt-10 font-sans">
      {/* Animated Gradient Hero Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 mt-12 drop-shadow-lg bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x"
        initial={{ scale: 0.8, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
      >
        🎮 Welcome to the Ultimate Tournament Arena!
      </motion.h1>

      {/* Carousel */}
      <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl w-full">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 4000,
            arrows: false,
            pagination: true,
            pauseOnHover: true,
            perPage: 1,
            breakpoints: {
              768: { perPage: 1 },
            },
          }}
        >
          {banners.map((banner) => (
            <SplideSlide key={banner.id}>
              <div className="relative">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
                  <motion.h2
                    className="text-3xl font-bold text-white drop-shadow"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {banner.title}
                  </motion.h2>
                  <motion.p
                    className="text-xl text-fuchsia-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    {banner.subtitle}
                  </motion.p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Offers Section */}
      <div className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold text-violet-300 mb-4 tracking-wider">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              whileHover={{
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="bg-gradient-to-br from-gray-900 via-indigo-900 to-fuchsia-900 rounded-2xl p-6 flex flex-col items-center shadow-xl border-2 border-fuchsia-700/30 hover:border-fuchsia-400 transition"
            >
              <img
                src={offer.image}
                alt={offer.game}
                className="w-24 h-24 rounded-xl mb-4 object-cover border-4 border-fuchsia-400/30"
              />
              <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                {offer.game}
              </h3>
              <p className="text-fuchsia-300 font-semibold">{offer.offer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Games Section */}
      <div className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold text-violet-300 mb-4 tracking-wider">
          Live Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {liveGames.map((live) => (
            <motion.div
              key={live.id}
              whileHover={{
                scale: 1.06,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 17 }}
              className="bg-gradient-to-tr from-gray-900 via-fuchsia-900/70 to-black rounded-2xl p-6 flex flex-col items-center shadow-lg border-2 border-fuchsia-700/30 hover:border-red-500 relative"
            >
              <img
                src={live.thumbnail}
                alt={live.game}
                className="w-32 h-20 rounded-lg mb-4 object-cover border-2 border-red-500/60"
              />
              <span className="absolute top-4 right-4 px-3 py-1 bg-red-600/80 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                LIVE
              </span>
              <h3 className="text-lg font-bold text-white mb-1">{live.game}</h3>
              <p className="text-fuchsia-200 mb-2">by {live.streamer}</p>
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-fuchsia-600 text-white px-5 py-2 rounded-lg font-bold shadow hover:scale-105 hover:from-fuchsia-700 hover:to-red-600 transition"
                onClick={() => setLivePopup(live)}
              >
                <FaYoutube className="text-xl" /> Watch Live
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live YouTube Popup */}
      <AnimatePresence>
        {livePopup && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLivePopup(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-4 shadow-xl w-full max-w-2xl relative"
              initial={{ scale: 0.95, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 60 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-4 text-2xl text-white hover:text-fuchsia-400"
                onClick={() => setLivePopup(null)}
                aria-label="Close"
              >
                ×
              </button>
              <iframe
                key={livePopup.id}
                src={livePopup.youtube}
                title={`YouTube Live - ${livePopup.game}`}
                className="w-full h-80 rounded-xl mb-4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="flex justify-between flex-wrap">
                <span className="text-white font-semibold">
                  {livePopup.game} - {livePopup.streamer}
                </span>
                <a
                  href={livePopup.youtube.replace("/embed/", "/watch?v=")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-bold"
                >
                  Open in YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player Stories */}
      <div className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold text-violet-300 mb-4 tracking-wider">
          Player Stories
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 w-full">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              transition={{ type: "spring", stiffness: 250, damping: 17 }}
              className="bg-gradient-to-tr from-violet-900/80 to-fuchsia-700/40 rounded-2xl p-6 min-w-[260px] flex flex-col items-center shadow-lg border-2 border-fuchsia-700/30 hover:border-fuchsia-400"
            >
              <img
                src={story.avatar}
                alt={story.player}
                className="w-16 h-16 rounded-full mb-3 border-2 border-fuchsia-400"
              />
              <h3 className="text-lg font-bold text-white">{story.player}</h3>
              <p className="text-fuchsia-200 text-center mt-2">{story.story}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <FaCrown className="text-3xl text-yellow-400" />
          <h2 className="text-2xl font-bold text-violet-300 tracking-wider">
            Leaderboard
          </h2>
          <select
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="ml-auto px-3 py-2 rounded-lg bg-gray-800 text-white border border-violet-600 focus:outline-none"
          >
            {games.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-violet-900/70 to-black rounded-2xl shadow-lg p-6 border-2 border-fuchsia-700/30">
          {leaderboards[selectedGame].map((entry, idx) => (
            <motion.div
              key={entry.name}
              className="flex items-center gap-4 mb-3 p-2 rounded-lg"
              whileHover={{
                backgroundColor: "rgba(124,58,237,0.24)",
              }}
              transition={{ duration: 0.18 }}
            >
              <span className="text-2xl font-bold text-fuchsia-400 w-8 text-center">
                {idx === 0 ? (
                  <FaCrown className="text-yellow-400" />
                ) : idx === 1 ? (
                  <FaMedal className="text-gray-300" />
                ) : idx === 2 ? (
                  <FaMedal className="text-orange-400" />
                ) : (
                  idx + 1
                )}
              </span>
              <img
                src={entry.avatar}
                alt={entry.name}
                className="w-10 h-10 rounded-full border-2 border-violet-400"
              />
              <span className="font-semibold text-white">{entry.name}</span>
              <span className="ml-auto text-lg font-bold text-violet-300">
                {entry.score} pts
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
