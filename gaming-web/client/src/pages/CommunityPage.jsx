import React from "react";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

// Example data (replace with your own)
const stories = [
  {
    image: "/images/success1.jpg",
    quote: "Victory is always possible for the person who refuses to stop fighting.",
    player: "— Alex 'Ace' Turner",
  },
  {
    image: "/images/success2.jpg",
    quote: "Champions keep playing until they get it right.",
    player: "— Priya 'Phoenix' Sharma",
  },
  {
    image: "/images/success3.jpg",
    quote: "Your only limit is your mind. Dream big, play bigger.",
    player: "— Lee 'Shadow' Chen",
  },
  {
    image: "/images/success4.jpg",
    quote: "Every setback is a setup for a comeback.",
    player: "— Sara 'Blitz' Martinez",
  },
];

const discordLink = "https://discord.gg/your-community-link"; // Replace with your actual Discord invite

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 py-12 px-4 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Player Success Stories
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-purple-200 max-w-2xl text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Our community is filled with inspiring stories of players who turned their passion into triumph. Check out some of their highlights and join our thriving Discord to become part of the next big story!
      </motion.p>

      {/* Success Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 w-full max-w-6xl">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 rounded-2xl shadow-xl border border-fuchsia-700/30 overflow-hidden flex flex-col items-center p-4 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <img
              src={story.image}
              alt="Success story screenshot"
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
            />
            <p className="italic text-fuchsia-200 text-base text-center mb-2">"{story.quote}"</p>
            <span className="text-sm text-purple-200 font-semibold">{story.player}</span>
          </motion.div>
        ))}
      </div>

      {/* Animated Discord Button Section */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <p className="text-xl md:text-2xl text-white font-bold mb-5 text-center max-w-xl">
          Ready to write your own success story? <br />
          <span className="text-fuchsia-300">Join our Discord community, connect with champions, and unlock your true potential!</span>
        </p>
        <motion.a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group inline-flex items-center px-10 py-4 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-purple-600 text-white text-2xl font-extrabold rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-400"
          whileHover={{
            scale: 1.13,
            rotate: [0, 2, -2, 2, 0],
            boxShadow: "0 0 40px 10px #a21caf99",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse bg-fuchsia-700/30 rounded-full blur-lg"></span>
          <FaDiscord className="mr-3 text-3xl animate-bounce" />
          Join Our Discord
        </motion.a>
        <span className="text-fuchsia-200 mt-4 text-sm text-center max-w-xs">
          Get exclusive tips, team up for tournaments, and never miss an event!
        </span>
      </motion.div>
    </div>
  );
}
