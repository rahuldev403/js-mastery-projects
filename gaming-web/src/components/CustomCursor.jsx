// CustomCursor.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * CustomCursor
 * @param {boolean} isActive - If true, cursor is in "active" (hover) state
 * @param {boolean} disabled - If true, cursor is hidden (e.g. during modal)
 */
const CustomCursor = ({ isActive = false, disabled = false }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [disabled]);

  // Hide cursor when disabled
  if (disabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      animate={{
        x: pos.x - (isActive ? 16 : 20),
        y: pos.y - (isActive ? 16 : 20),
        scale: isActive ? 1.4 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className={`rounded-full ${isActive ? "bg-purple-500" : "bg-white"}`}
        animate={{
          width: isActive ? "32px" : "40px",
          height: isActive ? "32px" : "40px",
        }}
        transition={{ duration: 0.2 }}
      />
      {isActive && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="w-12 h-12 rounded-full border border-purple-500 bg-transparent"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CustomCursor;
