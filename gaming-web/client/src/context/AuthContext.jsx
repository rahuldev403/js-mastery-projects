import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulate async login/signup (always succeeds for demo)
  const login = async (userData) => {
    // Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 400));
    setUser(userData);
    // If you want to simulate error, throw new Error("Some error");
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
