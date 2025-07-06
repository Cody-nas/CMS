import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const links = [
    {
      name: "Home",
      path: "/",
      hasDropdown: false,
    },
    {
      name: "Features",
      path: "/features",
      hasDropdown: true,
      dropdown: [
        {
          name: "AI Website Builder",
          path: "/features/ai-builder",
          icon: "🤖",
        },
        { name: "Template Gallery", path: "/features/templates", icon: "🎨" },
        { name: "SEO Tools", path: "/features/seo", icon: "📈" },
        { name: "Analytics", path: "/features/analytics", icon: "📊" },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      hasDropdown: true,
      dropdown: [
        { name: "Starter Plan", path: "/pricing/starter", icon: "🚀" },
        { name: "Professional", path: "/pricing/pro", icon: "💼" },
        { name: "Enterprise", path: "/pricing/enterprise", icon: "🏢" },
        { name: "Custom Solutions", path: "/pricing/custom", icon: "⚙️" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      hasDropdown: true,
      dropdown: [
        { name: "Get Support", path: "/contact/support", icon: "🛠️" },
        { name: "Sales Team", path: "/contact/sales", icon: "💬" },
        { name: "Partnership", path: "/contact/partnership", icon: "🤝" },
        { name: "Careers", path: "/contact/careers", icon: "💼" },
      ],
    },
  ];

  return (
    <nav
      className={`${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-slate-900/90 backdrop-blur-md border border-slate-700/50"
      } fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500`}
    >
      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0 opacity-20 rounded-2xl transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Logo */}
      <div className="flex items-center space-x-3 relative z-10">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <span className="text-white font-bold text-lg hidden sm:block">
          WebBuilder
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-1 relative z-10">
        {links.map((link, index) => (
          <li key={link.name} className="relative group">
            <button
              onClick={() => link.hasDropdown && handleDropdownToggle(index)}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <span>{link.name}</span>
              {link.hasDropdown && (
                <FaChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    activeDropdown === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Dropdown Menu */}
            {link.hasDropdown && (
              <div
                className={`absolute top-full left-0 mt-2 w-64 transition-all duration-300 ${
                  activeDropdown === index
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-purple-500/20 p-2">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-slate-800 rotate-45 border-l border-t border-purple-500/20"></div>
                  {link.dropdown.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200 group"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                      <svg
                        className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 relative z-10 group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
        <span className="relative z-10">Get Started</span>
        <svg
          className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>

      {/* Mobile Toggle */}
      <div className="md:hidden relative z-10">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-300 hover:text-white"
        >
          <div className="transform transition-transform duration-300">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm"
          />

          {/* Menu Panel */}
          <div className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl p-6 z-50 md:hidden border border-purple-500/20">
            <div className="flex flex-col space-y-2">
              {links.map((link, index) => (
                <div key={link.name} className="space-y-2">
                  <button
                    onClick={() =>
                      link.hasDropdown && handleDropdownToggle(index)
                    }
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {link.hasDropdown && activeDropdown === index && (
                    <div className="ml-4 space-y-1">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-200"
                        >
                          <span>{item.icon}</span>
                          <span className="text-sm">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
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
