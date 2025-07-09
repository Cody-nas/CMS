import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import OnboardingFlow from "./components/OnboardingFlow";
import "./App.css";

// Wrapper to use hooks
const AppContent = () => {
  const location = useLocation();

  // Define all paths where Navbar should be hidden
  const hideNavbarPaths = ["/onboarding", "/login", "/register"];

  // Check if the current path starts with any of the hidden paths
  const hideNavbar = hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<OnboardingFlow />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
