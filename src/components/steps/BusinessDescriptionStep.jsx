import React, { useState } from "react";
import { FiStar, FiGlobe, FiCheck, FiAlertCircle } from "react-icons/fi";

const BusinessDescriptionStep = ({
  formData = {},
  updateFormData = () => {},
}) => {
  const [focusedField, setFocusedField] = useState(null);

  const getCharacterCount = (text) => text?.length || 0;
  const getCharacterLimit = (field) =>
    field === "uniqueProposition" ? 100 : 500;

  const isFieldValid = (field, value) => {
    if (!value || value.trim() === "") return false;
    if (field === "uniqueProposition")
      return value.length >= 10 && value.length <= 100;
    if (field === "introduction")
      return value.length >= 20 && value.length <= 500;
    return true;
  };

  const getFieldStatus = (field, value) => {
    if (!value || value.trim() === "") return "empty";
    if (isFieldValid(field, value)) return "valid";
    return "invalid";
  };

  const renderFieldIcon = (field, value) => {
    const status = getFieldStatus(field, value);
    if (status === "valid") return <FiCheck className="text-green-400" />;
    if (status === "invalid") return <FiAlertCircle className="text-red-400" />;
    return null;
  };

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2">
          Tell us about your business
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Help us understand what makes your business unique
        </p>
      </div>

      <div className="space-y-6">
        {/* Unique Selling Proposition */}
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
            <div
              className={`p-2 rounded-full transition-all duration-300 ${
                focusedField === "uniqueProposition"
                  ? "bg-indigo-500/20 text-indigo-400"
                  : "bg-gray-700/50 text-gray-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-400"
              }`}
            >
              <FiStar className="text-sm" />
            </div>
            <span>What makes you unique?</span>
            {renderFieldIcon("uniqueProposition", formData.uniqueProposition)}
          </label>

          <div className="relative">
            <input
              className={`w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                focusedField === "uniqueProposition"
                  ? "border-indigo-400 bg-gray-800/70 shadow-lg shadow-indigo-500/10"
                  : getFieldStatus(
                      "uniqueProposition",
                      formData.uniqueProposition
                    ) === "valid"
                  ? "border-green-400/50 bg-gray-800/60"
                  : getFieldStatus(
                      "uniqueProposition",
                      formData.uniqueProposition
                    ) === "invalid"
                  ? "border-red-400/50 bg-gray-800/60"
                  : "border-gray-700 hover:border-gray-600 bg-gray-800/40"
              }`}
              placeholder="E.g. Best custom cakes in town with 24-hour delivery"
              value={formData.uniqueProposition || ""}
              onChange={(e) =>
                updateFormData("uniqueProposition", e.target.value)
              }
              onFocus={() => setFocusedField("uniqueProposition")}
              onBlur={() => setFocusedField(null)}
              maxLength={getCharacterLimit("uniqueProposition")}
            />

            <div className="flex justify-between items-center mt-2 text-xs">
              <span
                className={`transition-colors duration-300 ${
                  getFieldStatus(
                    "uniqueProposition",
                    formData.uniqueProposition
                  ) === "valid"
                    ? "text-green-400"
                    : getFieldStatus(
                        "uniqueProposition",
                        formData.uniqueProposition
                      ) === "invalid"
                    ? "text-red-400"
                    : "text-gray-500"
                }`}
              >
                {getFieldStatus(
                  "uniqueProposition",
                  formData.uniqueProposition
                ) === "valid" && "✓ Perfect length"}
                {getFieldStatus(
                  "uniqueProposition",
                  formData.uniqueProposition
                ) === "invalid" && "Minimum 10 characters"}
                {getFieldStatus(
                  "uniqueProposition",
                  formData.uniqueProposition
                ) === "empty" && "What sets you apart from competitors?"}
              </span>
              <span
                className={`transition-colors duration-300 ${
                  getCharacterCount(formData.uniqueProposition) > 80
                    ? "text-orange-400"
                    : "text-gray-500"
                }`}
              >
                {getCharacterCount(formData.uniqueProposition)}/
                {getCharacterLimit("uniqueProposition")}
              </span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="group">
          <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
            <div
              className={`p-2 rounded-full transition-all duration-300 ${
                focusedField === "introduction"
                  ? "bg-indigo-500/20 text-indigo-400"
                  : "bg-gray-700/50 text-gray-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-400"
              }`}
            >
              <FiGlobe className="text-sm" />
            </div>
            <span>Business introduction</span>
            {renderFieldIcon("introduction", formData.introduction)}
          </label>

          <div className="relative">
            <textarea
              rows={4}
              className={`w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none ${
                focusedField === "introduction"
                  ? "border-indigo-400 bg-gray-800/70 shadow-lg shadow-indigo-500/10"
                  : getFieldStatus("introduction", formData.introduction) ===
                    "valid"
                  ? "border-green-400/50 bg-gray-800/60"
                  : getFieldStatus("introduction", formData.introduction) ===
                    "invalid"
                  ? "border-red-400/50 bg-gray-800/60"
                  : "border-gray-700 hover:border-gray-600 bg-gray-800/40"
              }`}
              placeholder="Tell us about your business story, mission, and what you offer to customers. What problems do you solve?"
              value={formData.introduction || ""}
              onChange={(e) => updateFormData("introduction", e.target.value)}
              onFocus={() => setFocusedField("introduction")}
              onBlur={() => setFocusedField(null)}
              maxLength={getCharacterLimit("introduction")}
            />

            <div className="flex justify-between items-center mt-2 text-xs">
              <span
                className={`transition-colors duration-300 ${
                  getFieldStatus("introduction", formData.introduction) ===
                  "valid"
                    ? "text-green-400"
                    : getFieldStatus("introduction", formData.introduction) ===
                      "invalid"
                    ? "text-red-400"
                    : "text-gray-500"
                }`}
              >
                {getFieldStatus("introduction", formData.introduction) ===
                  "valid" && "✓ Great description"}
                {getFieldStatus("introduction", formData.introduction) ===
                  "invalid" && "Please write at least 20 characters"}
                {getFieldStatus("introduction", formData.introduction) ===
                  "empty" && "Share your business story and mission"}
              </span>
              <span
                className={`transition-colors duration-300 ${
                  getCharacterCount(formData.introduction) > 400
                    ? "text-orange-400"
                    : "text-gray-500"
                }`}
              >
                {getCharacterCount(formData.introduction)}/
                {getCharacterLimit("introduction")}
              </span>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Completion Progress</span>
            <span className="text-sm font-medium text-indigo-400">
              {
                [formData.uniqueProposition, formData.introduction].filter(
                  (field) =>
                    field &&
                    field.trim() !== "" &&
                    isFieldValid(
                      field === formData.uniqueProposition
                        ? "uniqueProposition"
                        : "introduction",
                      field
                    )
                ).length
              }
              /2 completed
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${
                  ([formData.uniqueProposition, formData.introduction].filter(
                    (field) =>
                      field &&
                      field.trim() !== "" &&
                      isFieldValid(
                        field === formData.uniqueProposition
                          ? "uniqueProposition"
                          : "introduction",
                        field
                      )
                  ).length /
                    2) *
                  100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDescriptionStep;
