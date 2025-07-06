import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Top badges */}
          {/* <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white shadow-lg">
              Next Generation
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-600 text-white shadow-lg">
              Predictive Insights
            </span>
          </motion.div> */}

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Build websites for your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Business with AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Unlock the potential of AI to streamline processes, boost
            productivity, and drive innovation with Aspire.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 group"
            >
              Request a Demo
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </motion.div>

          {/* Profile images section */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center items-center gap-4 flex-wrap"
          >
            {/* First profile - circular */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl md:text-2xl">
                    👤
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Second profile - star shape */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-24 h-24 md:w-32 md:h-32 relative"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-xl md:text-2xl">
                  👩
                </span>
              </div>
            </motion.div>

            {/* Third profile - circular with gradient */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl md:text-2xl">
                    🎭
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Fourth profile - circular */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl md:text-2xl">
                    👨
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-8 h-8 bg-blue-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-10 w-6 h-6 bg-purple-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-20"
        />
      </div>
    </section>
  );
};

export default Hero;
