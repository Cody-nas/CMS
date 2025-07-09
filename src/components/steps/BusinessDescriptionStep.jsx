import React from "react";
import { FiStar, FiGlobe } from "react-icons/fi";

const BusinessDescriptionStep = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-indigo-100 mb-1 flex items-center gap-2">
          <FiStar /> Unique Selling Proposition
        </label>
        <input
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-indigo-300 border border-white/20"
          placeholder="E.g. Best custom cakes in town"
          value={formData.uniqueProposition}
          onChange={(e) => updateFormData("uniqueProposition", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm text-indigo-100 mb-1 flex items-center gap-2">
          <FiGlobe /> Introduction
        </label>
        <textarea
          rows={3}
          className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-indigo-300 border border-white/20"
          placeholder="Tell us about your business..."
          value={formData.introduction}
          onChange={(e) => updateFormData("introduction", e.target.value)}
        />
      </div>
    </div>
  );
};

export default BusinessDescriptionStep;
