import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update active link based on current path
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        scrolled ? "shadow-lg bg-white" : "bg-white"
      } fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300`}
    >
      {/* Logo */}
      <Link to="/" className="font-bold text-lg text-gray-800">
        Alspire
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-600">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`hover:text-black transition ${
                currentPath === link.path ? "text-black font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="hidden md:block bg-gray-100 hover:bg-gray-200 text-sm font-semibold px-4 py-2 rounded-full shadow">
        Get Started
      </button>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50 flex flex-col gap-4 text-sm text-gray-600 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-black transition ${
                  currentPath === link.path ? "text-black font-medium" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-gray-100 hover:bg-gray-200 text-sm font-semibold px-4 py-2 rounded-full shadow w-full">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
