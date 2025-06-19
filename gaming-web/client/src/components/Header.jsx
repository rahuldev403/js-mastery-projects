import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGamepad, FaTrophy, FaUsers, FaInfoCircle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState, useContext, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthContext from "../context/AuthContext";

const navLinks = [
  { icon: <FaGamepad />, label: "Games", to: "/games" },
  { icon: <FaTrophy />, label: "Tournaments", to: "/tournaments" },
  { icon: <FaUsers />, label: "Community", to: "/community" },
  { icon: <FaInfoCircle />, label: "About", to: "/about" },
  { icon: <MdContactMail />, label: "Contact", to: "/contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.25 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.07 * i,
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  }),
};

const HEADER_HEIGHT = "6.5em"; // 104px, matches pt-[6.5em] in App

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const avatarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setAvatarDropdown(false);
      }
    }
    if (avatarDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [avatarDropdown]);

  // For accessibility: close menu on nav link click (mobile)
  const handleNavClick = () => setMenu(false);

  // Handle logout
  const handleLogout = () => {
    logout();
    setAvatarDropdown(false);
    setMenu(false);
    navigate("/");
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-center bg-gradient-to-r from-black/70 via-[#1a1333]/70 to-[#191970]/70 backdrop-blur-lg bg-opacity-60 rounded-b-2xl shadow-xl border-b border-violet-800"
      style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }}
    >
      <motion.div
        className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-7"
        style={{
          height: HEADER_HEIGHT,
          minHeight: HEADER_HEIGHT,
          boxShadow:
            "0 8px 32px 0 rgba(80,0,120,0.12), 0 1.5px 6px 0 rgba(120,0,255,0.04)",
          transform: "perspective(900px) translateZ(0px)",
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {/* Logo + Play Now */}
        <div className="flex lg:gap-14 gap-4 items-center min-w-0">
          <Link to="/">
            <img
              src="/images/logo.png"
              className="md:w-16 w-12 cursor-pointer hover:scale-105 transition-transform duration-300"
              alt="logo"
              style={{
                filter: "drop-shadow(0 0 8px #a78bfa88)",
                perspective: "400px",
              }}
            />
          </Link>
          {location.pathname !== "/games" && (
            <button
              className="h-9 px-7 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl font-semibold text-white text-nowrap shadow-lg hover:scale-105 hover:from-fuchsia-500 transition-all duration-300"
              onClick={() => navigate("/games")}
            >
              Play Now
            </button>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="justify-around items-center gap-7 hidden md:flex lg:gap-8 gap-4">
          {navLinks.map((item, i) =>
            item.to.startsWith("/") ? (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.13,
                  rotateY: 8,
                  boxShadow: "0 4px 24px #a78bfa77",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                variants={linkVariants}
                className="flex items-center"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Link
                  to={item.to}
                  className={`flex items-center justify-center relative py-1 text-lg font-medium gap-2 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap
                    ${
                      location.pathname === item.to
                        ? "text-fuchsia-400"
                        : "hover:text-purple-300"
                    }
                  `}
                  onClick={handleNavClick}
                >
                  {item.icon} {item.label}
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.label}
                href={item.to}
                onClick={handleNavClick}
                whileHover={{
                  scale: 1.13,
                  rotateY: 8,
                  boxShadow: "0 4px 24px #a78bfa77",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="flex items-center justify-center relative py-1 text-lg font-medium gap-2 hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {item.icon} {item.label}
              </motion.a>
            )
          )}
        </nav>

        {/* User Avatar Dropdown */}
        {user && (
          <div className="relative ml-4" ref={avatarRef}>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setAvatarDropdown((v) => !v)}
              aria-haspopup="true"
              aria-expanded={avatarDropdown}
              aria-label="User menu"
            >
              <img
                src={user.avatar || "/images/avatar1.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-violet-400 shadow"
              />
            </button>
            <AnimatePresence>
              {avatarDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-violet-100 py-1 z-50"
                >
                  <div className="flex items-center px-4 py-3 border-b border-gray-200">
                    <img
                      src={user.avatar || "/images/avatar1.png"}
                      alt="avatar"
                      className="w-9 h-9 rounded-full border border-violet-300"
                    />
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900 truncate">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-violet-50 text-gray-800 font-medium"
                    onClick={() => {
                      setAvatarDropdown(false);
                      navigate("/account");
                    }}
                  >
                    Manage Account
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-violet-50 text-red-600 font-medium"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="text-3xl md:hidden transition-transform duration-300 ease-in-out"
          onClick={() => setMenu((m) => !m)}
          aria-label={menu ? "Close navigation" : "Open navigation"}
        >
          {menu ? (
            <motion.span initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
              <IoClose />
            </motion.span>
          ) : (
            <motion.span initial={{ rotate: 180 }} animate={{ rotate: 0 }}>
              <CiMenuFries />
            </motion.span>
          )}
        </button>

        {/* Mobile Nav (Animated) */}
        <AnimatePresence>
          {menu && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gradient-to-b from-black/95 via-[#1a1333]/90 to-[#191970]/95 backdrop-blur-lg p-6 flex flex-col items-center"
              style={{
                boxShadow: "0 8px 32px 0 #a78bfa44",
                transform: "perspective(700px) translateZ(10px)",
              }}
            >
              <button
                className="absolute top-4 right-6 text-4xl text-purple-200 hover:text-white transition"
                onClick={() => setMenu(false)}
                aria-label="Close navigation"
              >
                <IoClose />
              </button>
              <motion.nav className="flex flex-col gap-7 mt-20 w-full items-center">
                {navLinks.map((item, i) =>
                  item.to.startsWith("/") ? (
                    <motion.div
                      key={item.label}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={linkVariants}
                      className="w-full"
                      whileHover={{
                        scale: 1.09,
                        rotateY: 7,
                        boxShadow: "0 2px 16px #a78bfa77",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Link
                        to={item.to}
                        onClick={handleNavClick}
                        className={`flex items-center justify-center relative py-2 text-2xl font-bold gap-3 hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-1 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap
                          ${
                            location.pathname === item.to
                              ? "text-fuchsia-400"
                              : ""
                          }
                        `}
                      >
                        {item.icon} {item.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={item.label}
                      href={item.to}
                      onClick={handleNavClick}
                      className="flex items-center justify-center relative py-2 text-2xl font-bold gap-3 hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-1 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={linkVariants}
                      whileHover={{
                        scale: 1.09,
                        rotateY: 7,
                        boxShadow: "0 2px 16px #a78bfa77",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {item.icon} {item.label}
                    </motion.a>
                  )
                )}
              </motion.nav>
              {location.pathname !== "/games" && (
                <motion.button
                  className="mt-10 h-10 px-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  onClick={() => {
                    navigate("/games");
                    setMenu(false);
                  }}
                  style={{
                    boxShadow: "0 2px 12px 0 #a78bfa55",
                    transform: "perspective(600px) translateZ(5px)",
                  }}
                >
                  Play Now
                </motion.button>
              )}
              <motion.button
                className="mt-4 h-10 px-8 bg-gray-700 rounded-xl font-bold text-white shadow hover:bg-gray-600 transition-all duration-300"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
              >
                NFT Store
              </motion.button>
              {/* Mobile user menu */}
              {user && (
                <div className="mt-8 w-full flex flex-col items-center">
                  <img
                    src={user.avatar || "/images/avatar1.png"}
                    alt="avatar"
                    className="w-14 h-14 rounded-full border-2 border-violet-400 shadow mb-2"
                  />
                  <div className="font-semibold text-white">{user.name}</div>
                  <div className="text-xs text-gray-300 mb-2">{user.email}</div>
                  <button
                    className="w-full text-left px-4 py-2 mb-1 rounded hover:bg-violet-800 text-white font-medium"
                    onClick={() => {
                      setMenu(false);
                      navigate("/account");
                    }}
                  >
                    Manage Account
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 rounded hover:bg-violet-800 text-red-300 font-medium"
                    onClick={() => {
                      setMenu(false);
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
