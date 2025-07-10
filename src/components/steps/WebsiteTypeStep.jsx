import React from "react";
import {
  FiTrendingUp,
  FiUser,
  FiShoppingBag,
  FiCoffee,
  FiGrid,
  FiCheck,
} from "react-icons/fi";

const WebsiteTypeStep = ({ formData = {}, updateFormData = () => {} }) => {
  const options = [
    {
      value: "business",
      label: "Business",
      icon: FiTrendingUp,
      description: "Corporate & companies",
    },
    {
      value: "freelancer",
      label: "Freelancer",
      icon: FiUser,
      description: "Personal & portfolio",
    },
    {
      value: "store",
      label: "Online Store",
      icon: FiShoppingBag,
      description: "E-commerce & retail",
    },
    {
      value: "restaurant",
      label: "Restaurant",
      icon: FiCoffee,
      description: "Food & dining",
    },
    {
      value: "other",
      label: "Other",
      icon: FiGrid,
      description: "Something unique",
    },
  ];

  return (
    <div className="p-3 sm:p-4 max-w-4xl mx-auto">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2">
          Choose Your Website Type
        </h2>
        <p className="text-gray-400 text-sm sm:text-base px-4">
          Select the option that best describes your project
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = formData.websiteType === opt.value;

          return (
            <label
              key={opt.value}
              className={`group relative p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                isSelected
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-2 border-indigo-400 shadow-lg sm:shadow-xl shadow-indigo-500/25"
                  : "bg-gray-800/50 border-2 border-gray-700 hover:border-indigo-400 hover:bg-gray-700/50 backdrop-blur-sm"
              }`}
            >
              <input
                type="radio"
                name="websiteType"
                value={opt.value}
                checked={isSelected}
                onChange={(e) => updateFormData("websiteType", e.target.value)}
                className="sr-only"
              />

              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div
                  className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
                    isSelected
                      ? "bg-white/20 shadow-lg"
                      : "bg-gray-700/50 group-hover:bg-indigo-500/20"
                  }`}
                >
                  <Icon
                    className={`text-xl sm:text-2xl transition-all duration-300 ${
                      isSelected
                        ? "text-white"
                        : "text-gray-300 group-hover:text-indigo-400"
                    }`}
                  />
                </div>

                <div className="space-y-1">
                  <h3
                    className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                      isSelected
                        ? "text-white"
                        : "text-gray-200 group-hover:text-white"
                    }`}
                  >
                    {opt.label}
                  </h3>
                  <p
                    className={`text-xs transition-colors duration-300 leading-relaxed ${
                      isSelected
                        ? "text-white/80"
                        : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    {opt.description}
                  </p>
                </div>
              </div>

              {isSelected && (
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5 animate-pulse">
                  <FiCheck className="text-white text-xs sm:text-sm" />
                </div>
              )}

              {/* Subtle glow effect */}
              <div
                className={`absolute inset-0 rounded-lg sm:rounded-xl transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                    : "group-hover:bg-gradient-to-br group-hover:from-indigo-500/5 group-hover:to-purple-500/5"
                }`}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default WebsiteTypeStep;
