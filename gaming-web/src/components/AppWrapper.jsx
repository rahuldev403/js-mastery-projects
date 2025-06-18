// components/AppWrapper.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import IntroAnimation from './IntroAnimation';

const AppWrapper = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!showIntro) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800); // simulate loading delay
      return () => clearTimeout(timer);
    }
  }, [location, showIntro]);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      ) : loading ? (
        <LoadingPage />
      ) : (
        children
      )}
    </>
  );
};

export default AppWrapper;
