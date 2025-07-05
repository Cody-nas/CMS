import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${
        scrolled 
          ? "shadow-2xl bg-white/90 backdrop-blur-xl border-white/20" 
          : "bg-white/80 backdrop-blur-md border-white/10"
      } fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 border hover:shadow-xl`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 group">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-lg shadow-sm" />
        </motion.div>
        <span className="font-bold text-xl text-gray-800 group-hover:text-[#440829] transition-colors duration-300">
          Brand
        </span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-1">
        {links.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <Link
              to={link.path}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                currentPath === link.path 
                  ? "text-[#440829] bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm" 
                  : "text-gray-600 hover:text-[#440829] hover:bg-gray-50"
              }`}
            >
              {link.name}
              {currentPath === link.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#440829] to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#3434ad] to-purple-600 hover:from-purple-600 hover:to-[#3434ad] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <span>Get Started</span>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          →
        </motion.div>
      </motion.button>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <motion.button
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
        >
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 z-50 md:hidden border border-white/20"
            >
              <div className="flex flex-col space-y-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        currentPath === link.path 
                          ? "text-[#440829] bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm" 
                          : "text-gray-600 hover:text-[#440829] hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-gray-100"
                >
                  <button className="w-full bg-gradient-to-r from-[#3434ad] to-purple-600 hover:from-purple-600 hover:to-[#3434ad] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;