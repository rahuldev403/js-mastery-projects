import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedTitle = ({ title, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current.querySelectorAll(".animated-word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 40, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <h2
      ref={containerRef}
      className={`font-extrabold text-4xl md:text-6xl text-center ${className}`}
    >
      {title.split(" ").map((word, idx) => (
        <span
          key={idx}
          className="animated-word inline-block mx-1"
          style={{ perspective: 400 }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
