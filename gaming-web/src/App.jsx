import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import GameListing from "./pages/GameListing";
import ManageAccount from "./pages/ManageAccount";
import TournamentPage from "./pages/TournamentPage"; // <-- Add this import
import CommunityPage from "./pages/CommunityPage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen pt-[6.5em]">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutSection />
                </>
              }
            />
            <Route path="/games" element={<GameListing />} />
            <Route path="/account" element={<ManageAccount />} />
            <Route path="/tournaments" element={<TournamentPage />} />{" "}
            {/* <-- New route */}
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
