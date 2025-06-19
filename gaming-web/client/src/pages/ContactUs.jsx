import React from 'react';
import { FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1333] to-[#191970] flex flex-col items-center justify-center p-8 text-white">
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-center text-fuchsia-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>
      <motion.p
        className="max-w-3xl text-center text-lg md:text-xl text-purple-300 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We value every gamer in our community. Your feedback, questions, and support help us build the ultimate gaming experience. Reach out to us anytime — we&apos;re here to listen and assist.
      </motion.p>
      <motion.div
        className="flex flex-col md:flex-row gap-10 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="mailto:support@gamingarena.com"
          className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          aria-label="Email us"
        >
          <FaEnvelope className="text-3xl" />
          <span className="text-xl font-semibold">support@gamingarena.com</span>
        </a>
        <a
          href="https://twitter.com/gamingarena"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          aria-label="Follow us on Twitter"
        >
          <FaTwitter className="text-3xl" />
          <span className="text-xl font-semibold">@GamingArena</span>
        </a>
        <a
          href="https://discord.gg/gamingarena"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          aria-label="Join our Discord"
        >
          <FaDiscord className="text-3xl" />
          <span className="text-xl font-semibold">Join our Discord</span>
        </a>
      </motion.div>
    </div>
  );
};

export default ContactUs;
