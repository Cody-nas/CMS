import React, { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const textVariations = [
    "Build websites for your business with AI",
    "Create stunning digital experiences",
    "Transform your ideas into reality",
    "Launch your dream website today",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textVariations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const FloatingOrb = ({ delay, size, color }) => (
    <div
      className={`absolute rounded-full opacity-20 animate-pulse`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent)`,
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]" />

      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <FloatingOrb
          key={i}
          delay={i * 0.8}
          size={`${Math.random() * 100 + 50}px`}
          color={i % 2 === 0 ? "#8b5cf6" : "#06b6d4"}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center mb-6 md:mb-8 px-3 py-2 md:px-4 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-xs md:text-sm font-medium shadow-lg hover:shadow-purple-500/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
            {/* <div className="relative mr-2 md:mr-3">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-ping absolute" />
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full relative" />
            </div> */}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
              AI-Powered
            </span>
            <span className="ml-1 text-white/90">Website Builder</span>
            <div className="ml-2 md:ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-white/60"
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
            </div>
          </div>

          {/* Main Heading with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-6 leading-tight">
            <span className="block transform transition-all duration-1000">
              {textVariations[currentText]}
            </span>
          </h1>

          {/* Glowing Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            We help businesses and individuals launch, scale, and succeed with
            <span className="text-purple-300 font-semibold"> beautiful</span>,
            <span className="text-cyan-300 font-semibold"> functional</span>,
            and
            <span className="text-pink-300 font-semibold">
              {" "}
              user-focused
            </span>{" "}
            digital products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                Explore Features
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
              </span>
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Websites Created" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold  mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div> */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(180deg);
          }
          75% {
            transform: translate(-20px, -20px) rotate(270deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
