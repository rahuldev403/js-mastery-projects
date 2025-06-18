// components/LoadingPage.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black z-[9999]">
      <motion.div
        className="w-24 h-24 border-8 border-t-transparent border-purple-400 rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="text-white mt-6 text-xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      ></motion.p>
    </div>
  );
};

export default LoadingPage;
