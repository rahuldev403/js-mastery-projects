import { useContext, useState, useRef } from "react";
import AuthContext from "../context/AuthContext";

const initialFields = user => ({
  name: user?.name || "",
  email: user?.email || "",
  state: user?.state || "",
  bio: user?.bio || "",
  favoriteGame: user?.favoriteGame || "",
  avatar: user?.avatar || "/images/avatar1.png",
});

const states = [
  "Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "Uttar Pradesh", "West Bengal", "Gujarat", "Other"
];

const gamesList = [
  "Valorant", "CS:GO", "Fortnite", "Apex Legends", "PUBG", "Dota 2", "Rocket League", "Overwatch", "FIFA 24"
];

const ManageAccount = () => {
  const { user, login } = useContext(AuthContext);
  const [fields, setFields] = useState(initialFields(user));
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef();

  // Handle avatar upload and preview
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setFields(f => ({ ...f, avatar: ev.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ ...user, ...fields });
    setSuccess("Profile updated!");
    setTimeout(() => setSuccess(""), 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-10 bg-gradient-to-b from-black via-[#1a1333] to-[#191970] flex flex-col items-center">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-xl w-full border border-violet-700/40">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Manage Account</h2>
        {success && <div className="mb-4 text-green-400 text-center">{success}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative group">
              <img
                src={fields.avatar}
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-violet-600 shadow-lg"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-violet-600 text-white rounded-full p-2 opacity-80 group-hover:opacity-100 transition"
                onClick={() => fileInputRef.current.click()}
                title="Upload new avatar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <span className="text-xs text-gray-400">Click the + to upload a new avatar</span>
          </div>
          {/* Name */}
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Player Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition"
            required
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition"
            required
          />
          {/* State */}
          <select
            name="state"
            value={fields.state}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none border border-transparent focus:border-violet-500 transition"
            required
          >
            <option value="">Select State</option>
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {/* Favorite Game */}
          <select
            name="favoriteGame"
            value={fields.favoriteGame}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none border border-transparent focus:border-violet-500 transition"
          >
            <option value="">Favorite Game (optional)</option>
            {gamesList.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          {/* Bio */}
          <textarea
            name="bio"
            value={fields.bio}
            onChange={handleChange}
            placeholder="Short Bio (optional)"
            rows={3}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-violet-500 transition resize-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-violet-600 text-white font-bold hover:bg-violet-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
