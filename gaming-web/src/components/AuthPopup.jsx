import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AuthPopup = ({ open, onClose, onLogin }) => {
  const [tab, setTab] = useState("login");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const form = e.target;
      const userData = {
        name: tab === "signup" ? form.username.value : "Player",
        state: "Maharashtra",
      };

      // Await onLogin to catch errors
      await onLogin(userData);

      setSuccessMsg(`Welcome to the arena, ${userData.name}! 🎮`);
      setTimeout(() => {
        setSuccessMsg("");
        onClose();
      }, 1500);
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong! Please try again.");
      setTimeout(() => setErrorMsg(""), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-gray-900 rounded-2xl p-8 shadow-xl w-full max-w-md"
            initial={{ y: 80, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 80, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success/Error Messages */}
            <AnimatePresence>
              {(successMsg || errorMsg) && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className={`absolute top-4 left-0 right-0 text-center p-3 rounded-lg mx-4 ${
                    successMsg ? "bg-green-900/80" : "bg-red-900/80"
                  }`}
                >
                  <span className="text-sm font-medium">
                    {successMsg || errorMsg}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="absolute top-4 right-4 text-xl hover:text-violet-400"
              onClick={onClose}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>

            <div className="flex mb-6">
              <button
                className={`flex-1 py-2 rounded-l-xl font-bold transition ${
                  tab === "login"
                    ? "bg-violet-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => {
                  setTab("login");
                  setErrorMsg("");
                }}
                type="button"
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 rounded-r-xl font-bold transition ${
                  tab === "signup"
                    ? "bg-violet-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => {
                  setTab("signup");
                  setErrorMsg("");
                }}
                type="button"
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {tab === "signup" && (
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  className="w-full mb-3 px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition"
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full mb-3 px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full mb-5 px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 rounded bg-violet-600 text-white font-bold hover:bg-violet-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    {tab === "login" ? "Signing In..." : "Creating Account..."}
                  </span>
                ) : tab === "login" ? (
                  "Sign In"
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthPopup;
