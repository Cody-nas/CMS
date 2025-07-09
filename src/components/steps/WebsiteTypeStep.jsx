import React from "react";
import {
  FiTrendingUp,
  FiUser,
  FiShoppingBag,
  FiCoffee,
  FiGrid,
  FiCheck,
} from "react-icons/fi";

const WebsiteTypeStep = ({ formData, updateFormData }) => {
  const options = [
    { value: "business", label: "Business", icon: FiTrendingUp },
    { value: "freelancer", label: "Freelancer", icon: FiUser },
    { value: "store", label: "Online Store", icon: FiShoppingBag },
    { value: "restaurant", label: "Restaurant", icon: FiCoffee },
    { value: "other", label: "Other", icon: FiGrid },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {options.map((opt) => {
        const Icon = opt.icon;
        return (
          <label
            key={opt.value}
            className={`p-4 rounded-lg cursor-pointer border ${
              formData.websiteType === opt.value
                ? "bg-indigo-500 bg-opacity-30 border-indigo-300"
                : "border-transparent hover:border-indigo-200"
            }`}
          >
            <input
              type="radio"
              name="websiteType"
              value={opt.value}
              checked={formData.websiteType === opt.value}
              onChange={(e) => updateFormData("websiteType", e.target.value)}
              className="hidden"
            />
            <div className="flex flex-col items-center gap-2">
              <Icon className="text-white text-2xl" />
              <span className="text-white text-sm">{opt.label}</span>
              {formData.websiteType === opt.value && (
                <FiCheck className="text-white text-xs" />
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default WebsiteTypeStep;
