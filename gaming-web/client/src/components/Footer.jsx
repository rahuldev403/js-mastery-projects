import { motion } from "framer-motion";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socials = [
  { icon: <FaDiscord />, label: "Discord", href: "#" },
  { icon: <FaTwitter />, label: "Twitter", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
  { icon: <FaMedium />, label: "Medium", href: "#" },
];

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 py-7 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-[#babaff] text-center md:text-left text-sm font-light"
      >
        © {new Date().getFullYear()} Nova. All rights reserved.
      </motion.div>
      <div className="flex gap-5">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.2, color: "#fff" }}
            className="text-[#babaff] text-2xl transition"
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
      <motion.a
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        href="#privacy-policy"
        className="text-[#babaff] text-center md:text-right text-sm font-light hover:underline"
      >
        Privacy Policy
      </motion.a>
    </div>
  </footer>
);

export default Footer;
