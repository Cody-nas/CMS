import React from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Cleaning checklist", href: "#" },
      { name: "House cleaning", href: "#" },
      { name: "Apartments clean", href: "#" },
      { name: "Commercial", href: "#" },
      { name: "Spring cleaning", href: "#" },
      { name: "Partnerships", href: "#" },
    ],
    helpfulLinks: [
      { name: "About us", href: "#" },
      { name: "Areas we serve", href: "#" },
      { name: "Work with us", href: "#" },
      { name: "Reviews", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partnerships", href: "#" },
    ],
    information: [
      { name: "Blog", href: "#" },
      { name: "Help", href: "#" },
      { name: "Reviews", href: "#" },
      { name: "Job application", href: "#" },
      { name: "About us", href: "#" },
    ],
  };

  const socialIcons = [
    {
      name: "Discord",
      href: "#",
      icon: FaDiscord,
      color: "hover:text-indigo-600 hover:bg-indigo-50",
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
      color: "hover:text-pink-600 hover:bg-pink-50",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn,
      color: "hover:text-blue-700 hover:bg-blue-50",
    },
  ];

  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="relative overflow-hidden px-6 md:px-12 lg:px-20 pb-8">
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          {/* Floating particles */}
          <div className="absolute top-8 right-16 animate-pulse">
            <IoSparkles className="w-6 h-6 text-white/40" />
          </div>
          <div className="absolute top-16 right-32 animate-bounce">
            <FaStar className="w-4 h-4 text-white/30" />
          </div>
          <div className="absolute bottom-12 right-20 animate-pulse delay-300">
            <div className="w-3 h-3 bg-white/25 rounded-full"></div>
          </div>
          <div className="absolute top-20 right-8 animate-bounce delay-500">
            <div className="w-2 h-2 bg-white/35 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to get started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Your time to relax. Our time to sparkle. Let's make your space
              shine today.
            </p>
            <button className="group bg-white text-gray-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
              </div>
              <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
                Your time to relax. Our time to sparkle. Professional cleaning
                services that bring comfort to your space.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">
                Helpful Links
              </h3>
              <ul className="space-y-4">
                {footerLinks.helpfulLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information & Location */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">
                Information
              </h3>
              <ul className="space-y-4 mb-8">
                {footerLinks.information.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-base font-bold text-gray-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="w-4 h-4 text-purple-600 mr-2" />
                  Contact Info
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      Vicarage Chambers 9 Park Square East Leeds
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <a
                      href="tel:01132305566"
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300"
                    >
                      0113 2305566 (Hotline)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 flex items-center">
              <span>©Copyright All rights reserved. 2025</span>
              <IoSparkles className="w-3 h-3 text-purple-600 ml-2" />
            </p>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
              >
                Privacy & Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
              >
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
