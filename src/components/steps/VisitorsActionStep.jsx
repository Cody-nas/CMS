import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";

const VisitorsActionStep = ({ formData = {}, updateFormData = () => {} }) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const options = [
    {
      value: "call",
      label: "Call You",
      icon: FiPhone,
      description: "Let visitors call you directly",
      color: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/25",
    },
    {
      value: "email",
      label: "Email You",
      icon: FiMail,
      description: "Get inquiries via email",
      color: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
    },
    {
      value: "visit",
      label: "Visit You",
      icon: FiMapPin,
      description: "Show your location & hours",
      color: "from-purple-500 to-violet-500",
      shadowColor: "shadow-purple-500/25",
    },
    {
      value: "link",
      label: "Visit Page",
      icon: FiExternalLink,
      description: "Direct to external website",
      color: "from-orange-500 to-red-500",
      shadowColor: "shadow-orange-500/25",
    },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2">
          What should visitors do?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Choose the primary action you want visitors to take
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = formData.visitorsAction === opt.value;
          const isHovered = hoveredOption === opt.value;

          return (
            <label
              key={opt.value}
              className={`group relative flex items-center gap-4 p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                isSelected
                  ? `bg-gradient-to-r ${opt.color} border-2 border-white/20 shadow-xl ${opt.shadowColor}`
                  : "bg-gray-800/50 border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
              onMouseEnter={() => setHoveredOption(opt.value)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <input
                type="radio"
                value={opt.value}
                checked={isSelected}
                onChange={(e) =>
                  updateFormData("visitorsAction", e.target.value)
                }
                className="sr-only"
              />

              {/* Icon container */}
              <div
                className={`p-3 rounded-full transition-all duration-300 ${
                  isSelected
                    ? "bg-white/20 shadow-lg"
                    : isHovered
                    ? "bg-gray-600/50 scale-110"
                    : "bg-gray-700/50"
                }`}
              >
                <Icon
                  className={`text-xl sm:text-2xl transition-all duration-300 ${
                    isSelected
                      ? "text-white"
                      : isHovered
                      ? "text-white"
                      : "text-gray-300"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                    isSelected
                      ? "text-white"
                      : isHovered
                      ? "text-white"
                      : "text-gray-200"
                  }`}
                >
                  {opt.label}
                </h3>
                <p
                  className={`text-xs sm:text-sm transition-colors duration-300 mt-1 ${
                    isSelected
                      ? "text-white/80"
                      : isHovered
                      ? "text-gray-300"
                      : "text-gray-400"
                  }`}
                >
                  {opt.description}
                </p>
              </div>

              {/* Check icon */}
              {isSelected && (
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse">
                  <FiCheck className="text-white text-lg" />
                </div>
              )}

              {/* Selection indicator */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-r ${opt.color} opacity-10`
                    : isHovered
                    ? "bg-gradient-to-r from-gray-600/10 to-gray-500/10"
                    : ""
                }`}
              />

              {/* Animated border */}
              {isSelected && (
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${opt.color} opacity-20 animate-pulse`}
                />
              )}
            </label>
          );
        })}
      </div>

      {/* Selected option details */}
      {formData.visitorsAction && (
        <div className="mt-8 p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-500/20 rounded-full">
              <FiCheck className="text-indigo-400 text-sm" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Primary Action Selected
            </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {formData.visitorsAction === "call" &&
              "Visitors will see your phone number with a prominent call button. Perfect for service businesses and urgent inquiries."}
            {formData.visitorsAction === "email" &&
              "Visitors can contact you through email. Great for detailed inquiries and professional communication."}
            {formData.visitorsAction === "visit" &&
              "Visitors will see your address, hours, and directions. Ideal for physical locations and local businesses."}
            {formData.visitorsAction === "link" &&
              "Visitors will be directed to your main website or booking page. Perfect for online services and e-commerce."}
          </p>
        </div>
      )}
    </div>
  );
};

export default VisitorsActionStep;
