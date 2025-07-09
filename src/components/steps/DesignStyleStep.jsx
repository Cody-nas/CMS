import React from "react";
import { FiGrid, FiHeart } from "react-icons/fi";

const DesignStyleStep = ({ formData, updateFormData }) => {
  const styles = [
    { value: "minimal", label: "Minimal & Clean", icon: FiGrid },
    { value: "artistic", label: "Artistic & Playful", icon: FiHeart },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {styles.map((style) => {
        const Icon = style.icon;
        return (
          <button
            key={style.value}
            onClick={() => updateFormData("designStyle", style.value)}
            className={`flex flex-col items-center p-5 rounded-xl border-2 transition ${
              formData.designStyle === style.value
                ? "border-indigo-300 bg-indigo-500 bg-opacity-30"
                : "border-transparent hover:border-indigo-200"
            }`}
          >
            <Icon className="text-white text-2xl mb-2" />
            <span className="text-white text-sm">{style.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DesignStyleStep;
