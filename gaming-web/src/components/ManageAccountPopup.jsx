import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuthContext from "../context/AuthContext";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
];

const ManageAccountPopup = ({ open, onClose }) => {
  const { user, login } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || avatars[0]);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...user, name, avatar });
    setSuccess("Profile updated!");
    setTimeout(() => {
      setSuccess("");
      onClose();
    }, 1200);
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
            <button
              className="absolute top-4 right-4 text-xl hover:text-violet-400"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Manage Account</h2>
            {success && (
              <div className="mb-4 text-green-400 text-center">{success}</div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex items-center justify-center gap-4 mb-2">
                {avatars.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setAvatar(a)}
                    className={`rounded-full border-2 ${avatar === a ? "border-violet-500" : "border-transparent"} transition`}
                  >
                    <img src={a} alt="avatar" className="w-14 h-14 rounded-full object-cover" />
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Player Name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition"
                required
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-violet-600 text-white font-bold hover:bg-violet-700 transition"
              >
                Save Changes
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ManageAccountPopup;
