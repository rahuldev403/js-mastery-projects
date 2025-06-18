import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthContext from "../context/AuthContext";
import AuthPopup from "../components/AuthPopup";
import { GiCash, GiProgression } from "react-icons/gi";
import { FaGamepad, FaPlay, FaCrown } from "react-icons/fa";

// Dummy valid states
const validStates = ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi"];

// Dummy games data
const games = [
  { id: 1, name: "Valorant", image: "valorant.jpg" },
  { id: 2, name: "CS:GO", image: "csgo.jpg" },
  { id: 3, name: "Fortnite", image: "fortnite.jpg" },
  { id: 4, name: "Apex Legends", image: "apex.jpg" },
  { id: 5, name: "PUBG", image: "pubg.jpg" },
  { id: 6, name: "Dota 2", image: "dota2.jpg" },
  { id: 7, name: "Rocket League", image: "rocket.jpg" },
  { id: 8, name: "Overwatch", image: "overwatch.jpg" },
  { id: 9, name: "FIFA 24", image: "fifa.jpg" },
];

const PAGE_SIZE = 3;

const motivationalQuotes = [
  "Unleash your inner champion. Every click is a step closer to victory!",
  "Epic adventures await. Level up, lock in, and play your legend!",
  "The battleground is set. Are you ready to conquer?",
  "Every game is a new story. Make yours legendary.",
  "Press play. Defy limits. Become unstoppable.",
  "Victory favors the bold—jump in and claim your glory!",
  "Every challenge is a chance to rise. Click play and start your saga!",
  "Legends aren’t born—they’re made. Choose your game and let’s go!",
  "Your journey to greatness begins with a single click.",
  "Game on. Level up. Never settle.",
];

const levels = [
  {
    label: "Beginner",
    color: "from-green-600 to-green-400",
    text: "Start your journey. Every legend begins here.",
  },
  {
    label: "Mid",
    color: "from-yellow-600 to-yellow-400",
    text: "Rise to the challenge. Prove your mettle.",
  },
  {
    label: "Pro",
    color: "from-fuchsia-700 to-pink-400",
    text: "Go for glory. Only the best survive.",
  },
];

const GameListing = () => {
  const { user, login } = useContext(AuthContext);
  const [showAuth, setShowAuth] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [page, setPage] = useState(1);

  // Pagination
  const totalPages = Math.ceil(games.length / PAGE_SIZE);
  const paginatedGames = games.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Motivational quote randomizer
  const quote =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  // Handle game click: if user logged in, allow selection; else show login popup
  const handleGameClick = (game) => {
    if (!user) {
      setShowAuth(true);
    } else {
      setSelectedGame(game);
    }
  };

  // Level selection
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setShowPayment(true);
  };

  // Payment
  const handlePayment = () => {
    alert("Payment Successful! Get ready to play and make your mark!");
    setShowPayment(false);
    setSelectedGame(null);
    setSelectedLevel(null);
  };

  // Auth handler for popup
  const handleLogin = (userData) => {
    login(userData);
    setShowAuth(false);
    // If a game was clicked before login, allow to select level after login
    if (selectedGame === null) setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101018] via-[#1a1333] to-[#191970] p-0 md:p-8 flex flex-col items-center font-sans">
      {/* Hero Section with Animated Gradient Title */}
      <motion.div
        className="w-full max-w-5xl mx-auto text-center mt-10 mb-6 px-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-xl tracking-wide uppercase">
          Ready to Play? Choose Your Game & Level Up!
        </h1>
        <p className="text-lg md:text-xl text-fuchsia-200 mt-4 font-semibold animate-pulse">
          {quote}
        </p>
      </motion.div>

      {/* Game Cards */}
      <div className="w-full max-w-5xl">
        <div
          className={`mb-16 ${
            page === 1
              ? "flex flex-row gap-8 justify-center"
              : "grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
          }`}
        >
          {paginatedGames.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{
                scale: 1.09,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative cursor-pointer bg-gradient-to-br from-gray-900 via-indigo-900 to-fuchsia-900 rounded-2xl overflow-hidden w-72 border-2 border-fuchsia-700/30 hover:border-fuchsia-400 shadow-xl group"
              onClick={() => handleGameClick(game)}
            >
              <img
                src={`/images/${game.image}`}
                alt={game.name}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black/70 p-4 rounded-b-2xl flex items-center justify-between">
                <h3 className="text-white text-2xl font-bold tracking-wide flex items-center gap-2">
                  <FaGamepad className="text-fuchsia-400" /> {game.name}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="ml-2 px-3 py-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold rounded-xl shadow hover:from-indigo-700 hover:to-fuchsia-700 transition"
                >
                  Play
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mb-8">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-10 h-10 rounded-full font-bold transition ${
              page === i + 1
                ? "bg-fuchsia-600 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-fuchsia-500 hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Skill Level Modal */}
      <AnimatePresence>
        {user && selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[9999]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-gray-900 via-violet-900 to-black rounded-2xl p-8 max-w-md w-full border-2 border-fuchsia-700/30 shadow-2xl"
            >
              <h2 className="text-2xl md:text-3xl text-white mb-6 font-extrabold flex items-center gap-2">
                <FaCrown className="text-yellow-400" /> Select Your Skill Level
              </h2>
              <div className="grid gap-4">
                {levels.map((level) => (
                  <motion.button
                    key={level.label}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 0 32px 8px #a21caf, 0 0 64px 16px #38bdf8",
                    }}
                    className={`flex items-center gap-4 p-4 bg-gradient-to-r ${level.color} rounded-xl hover:brightness-110 transition-colors shadow-xl`}
                    onClick={() => handleLevelSelect(level.label)}
                  >
                    <GiProgression className="text-2xl text-white" />
                    <div>
                      <span className="text-white text-lg font-bold">
                        {level.label}
                      </span>
                      <div className="text-xs text-fuchsia-100">
                        {level.text}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => setSelectedGame(null)}
                className="mt-6 text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPayment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[9999]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-gray-900 via-violet-900 to-black rounded-2xl p-8 max-w-md w-full border-2 border-fuchsia-700/30 shadow-2xl"
            >
              <h2 className="text-2xl md:text-3xl text-white mb-6 font-extrabold flex items-center gap-2">
                <GiCash className="text-green-400" /> Ready to Lock In?
              </h2>
              {validStates.includes(user.state) ? (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-white text-lg font-bold">
                      Entry Fee: <span className="text-green-400">₹80</span>
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({user.state})
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-indigo-700 hover:to-fuchsia-700 text-white py-3 rounded-xl font-bold text-lg shadow-xl transition"
                    onClick={handlePayment}
                  >
                    <FaPlay className="inline mr-2" /> Pay & Play Now!
                  </motion.button>
                  <div className="text-fuchsia-200 mt-4 text-center font-semibold animate-pulse">
                    One click away from the action.{" "}
                    <span className="font-bold">Gear up and dive in!</span>
                  </div>
                </>
              ) : (
                <div className="text-red-400 text-center">
                  Tournaments not available in your state ({user.state})
                </div>
              )}
              <button
                onClick={() => setShowPayment(false)}
                className="mt-6 text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Popup (for login/signup) */}
      <AuthPopup
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onLogin={handleLogin}
      />

      {/* Footer with Motivational Slogan */}
      <footer className="w-full mt-12 text-center py-8 bg-gradient-to-r from-fuchsia-900 via-indigo-900 to-fuchsia-900">
        <div className="text-xl md:text-2xl text-fuchsia-200 font-bold tracking-wide animate-gradient-x">
          "Press Play. Conquer Worlds. Become Legendary."
        </div>
        <div className="text-fuchsia-400 mt-2">
          Gaming never sleeps. Neither should you.
        </div>
      </footer>
    </div>
  );
};

export default GameListing;
