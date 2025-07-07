import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-slate-900/90 backdrop-blur-md border border-slate-700/50"
      } fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500`}
    >
      {/* Background Gradient Effect */}
      <div
        className="absolute inset-0 opacity-20 rounded-2xl transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Logo */}
      <div className="flex items-center space-x-3 relative z-10">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        {/* <span className="text-white font-bold text-lg hidden sm:block">
          WebBuilder
        </span> */}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-1 relative z-10">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-white bg-purple-600/20"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 relative z-10 group overflow-hidden cursor-pointer">
        <span className="relative z-10">Get Started</span>
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden relative z-10">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm"
          />
          <div className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 z-50 md:hidden border border-purple-500/20">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-white bg-purple-600/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
