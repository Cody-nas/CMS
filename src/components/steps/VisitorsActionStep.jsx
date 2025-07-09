import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";

const VisitorsActionStep = ({ formData, updateFormData }) => {
  const options = [
    { value: "call", label: "Call You", icon: FiPhone },
    { value: "email", label: "Email You", icon: FiMail },
    { value: "visit", label: "Visit You", icon: FiMapPin },
    { value: "link", label: "Visit Page", icon: FiExternalLink },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((opt) => {
        const Icon = opt.icon;
        return (
          <label
            key={opt.value}
            className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition ${
              formData.visitorsAction === opt.value
                ? "bg-indigo-500 bg-opacity-30 border-indigo-300"
                : "border-transparent hover:border-indigo-200"
            }`}
          >
            <input
              type="radio"
              value={opt.value}
              checked={formData.visitorsAction === opt.value}
              onChange={(e) => updateFormData("visitorsAction", e.target.value)}
              className="hidden"
            />
            <Icon className="text-white text-xl" />
            <span className="text-white">{opt.label}</span>
            {formData.visitorsAction === opt.value && (
              <FiCheck className="text-white ml-auto" />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default VisitorsActionStep;
