import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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

const Infinite3DMarquee = ({ pause }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (pause) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [pause, controls]);

  return (
    <motion.div
      className="flex space-x-8 overflow-hidden w-full cursor-pointer perspective-1000"
      animate={controls}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start()}
      style={{ transformStyle: "preserve-3d" }}
    >
      {images.concat(images).map((src, idx) => (
        <motion.div
          key={idx}
          className="w-40 h-24 rounded-lg overflow-hidden shadow-lg"
          whileHover={{ rotateX: 15, rotateY: 15, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img src={src} alt={`Game ${idx + 1}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Infinite3DMarquee;
