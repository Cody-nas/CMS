import React, { useState } from "react";
import {
  FiGrid,
  FiHeart,
  FiTrendingUp,
  FiSun,
  FiMoon,
  FiZap,
} from "react-icons/fi";

const DesignStyleStep = ({ formData = {}, updateFormData = () => {} }) => {
  const [hoveredStyle, setHoveredStyle] = useState(null);

  const styles = [
    {
      value: "minimal",
      label: "Minimal & Clean",
      icon: FiGrid,
      description: "Simple, elegant design with lots of white space",
      preview: "Clean lines, subtle colors, focused content",
      color: "from-slate-500 to-gray-500",
      shadowColor: "shadow-slate-500/25",
      bgPattern: "bg-gradient-to-br from-gray-100 to-white",
    },
    {
      value: "artistic",
      label: "Artistic & Playful",
      icon: FiHeart,
      description: "Creative design with vibrant colors and animations",
      preview: "Bold colors, creative layouts, engaging visuals",
      color: "from-pink-500 to-rose-500",
      shadowColor: "shadow-pink-500/25",
      bgPattern: "bg-gradient-to-br from-pink-100 to-rose-100",
    },
    {
      value: "professional",
      label: "Professional & Corporate",
      icon: FiTrendingUp,
      description: "Business-focused design with trust elements",
      preview: "Corporate colors, structured layout, professional feel",
      color: "from-blue-600 to-indigo-600",
      shadowColor: "shadow-blue-500/25",
      bgPattern: "bg-gradient-to-br from-blue-100 to-indigo-100",
    },
    {
      value: "modern",
      label: "Modern & Trendy",
      icon: FiZap,
      description: "Contemporary design with latest trends",
      preview: "Dark themes, glassmorphism, modern typography",
      color: "from-purple-600 to-violet-600",
      shadowColor: "shadow-purple-500/25",
      bgPattern: "bg-gradient-to-br from-purple-100 to-violet-100",
    },
    {
      value: "warm",
      label: "Warm & Welcoming",
      icon: FiSun,
      description: "Friendly design with warm colors and soft edges",
      preview: "Warm tones, rounded corners, inviting atmosphere",
      color: "from-orange-500 to-amber-500",
      shadowColor: "shadow-orange-500/25",
      bgPattern: "bg-gradient-to-br from-orange-100 to-amber-100",
    },
    {
      value: "elegant",
      label: "Elegant & Sophisticated",
      icon: FiMoon,
      description: "Luxury design with premium aesthetics",
      preview: "Premium colors, elegant typography, refined details",
      color: "from-emerald-600 to-teal-600",
      shadowColor: "shadow-emerald-500/25",
      bgPattern: "bg-gradient-to-br from-emerald-100 to-teal-100",
    },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2">
          Choose Your Design Style
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Select the visual style that best represents your brand
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {styles.map((style) => {
          const Icon = style.icon;
          const isSelected = formData.designStyle === style.value;
          const isHovered = hoveredStyle === style.value;

          return (
            <button
              key={style.value}
              onClick={() => updateFormData("designStyle", style.value)}
              className={`group relative p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-left ${
                isSelected
                  ? `bg-gradient-to-br ${style.color} border-2 border-white/20 shadow-xl ${style.shadowColor}`
                  : "bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
              onMouseEnter={() => setHoveredStyle(style.value)}
              onMouseLeave={() => setHoveredStyle(null)}
            >
              {/* Preview section */}
              <div
                className={`w-full h-16 sm:h-20 rounded-lg mb-4 relative overflow-hidden transition-all duration-300 ${
                  isSelected
                    ? "bg-white/20 shadow-lg"
                    : isHovered
                    ? "bg-gray-600/30 shadow-md"
                    : "bg-gray-700/50"
                }`}
              >
                {/* Pattern overlay */}
                <div
                  className={`absolute inset-0 opacity-20 ${
                    isSelected
                      ? style.bgPattern
                      : "bg-gradient-to-br from-gray-600 to-gray-700"
                  }`}
                />

                {/* Preview elements */}
                <div className="absolute inset-2 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-white/30 shadow-lg"
                        : isHovered
                        ? "bg-gray-500/50 scale-110"
                        : "bg-gray-600/50"
                    }`}
                  >
                    <Icon
                      className={`text-sm sm:text-base transition-all duration-300 ${
                        isSelected
                          ? "text-white"
                          : isHovered
                          ? "text-white"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </div>

                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3
                  className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                    isSelected
                      ? "text-white"
                      : isHovered
                      ? "text-white"
                      : "text-gray-200"
                  }`}
                >
                  {style.label}
                </h3>
                <p
                  className={`text-xs sm:text-sm transition-colors duration-300 leading-relaxed ${
                    isSelected
                      ? "text-white/80"
                      : isHovered
                      ? "text-gray-300"
                      : "text-gray-400"
                  }`}
                >
                  {style.description}
                </p>
                <p
                  className={`text-xs transition-colors duration-300 leading-relaxed ${
                    isSelected
                      ? "text-white/60"
                      : isHovered
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {style.preview}
                </p>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-br ${style.color} opacity-10`
                    : isHovered
                    ? "bg-gradient-to-br from-gray-600/10 to-gray-500/10"
                    : ""
                }`}
              />

              {/* Animated border */}
              {isSelected && (
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${style.color} opacity-20 animate-pulse`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected style details */}
      {formData.designStyle && (
        <div className="mt-8 p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-500/20 rounded-full">
              {React.createElement(
                styles.find((s) => s.value === formData.designStyle)?.icon ||
                  FiGrid,
                {
                  className: "text-indigo-400 text-sm",
                }
              )}
            </div>
            <h3 className="text-lg font-semibold text-white">
              {styles.find((s) => s.value === formData.designStyle)?.label}{" "}
              Style Selected
            </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your website will feature{" "}
            <span className="text-white font-medium">
              {styles
                .find((s) => s.value === formData.designStyle)
                ?.preview.toLowerCase()}
            </span>
            . This style is perfect for creating the right impression with your
            target audience.
          </p>
        </div>
      )}
    </div>
  );
};

export default DesignStyleStep;
