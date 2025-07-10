import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

// Mock step components for demonstration
const WebsiteTypeStep = ({ formData, updateFormData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "Business Website",
        "E-commerce Store",
        "Portfolio",
        "Blog",
        "Landing Page",
        "Other",
      ].map((type) => (
        <button
          key={type}
          onClick={() => updateFormData("websiteType", type)}
          className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-blue-400 ${
            formData.websiteType === type
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  </div>
);

const BusinessDescriptionStep = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        What makes you unique?
      </label>
      <textarea
        value={formData.uniqueProposition}
        onChange={(e) => updateFormData("uniqueProposition", e.target.value)}
        placeholder="Tell us what sets you apart from the competition..."
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={4}
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Brief introduction
      </label>
      <textarea
        value={formData.introduction}
        onChange={(e) => updateFormData("introduction", e.target.value)}
        placeholder="Write a brief introduction about yourself or your business..."
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={3}
      />
    </div>
  </div>
);

const VisitorsActionStep = ({ formData, updateFormData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4">
      {[
        "Contact me for services",
        "Purchase products",
        "Subscribe to newsletter",
        "Download resources",
        "Book a consultation",
        "View my portfolio",
      ].map((action) => (
        <button
          key={action}
          onClick={() => updateFormData("visitorsAction", action)}
          className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-blue-400 text-left ${
            formData.visitorsAction === action
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          {action}
        </button>
      ))}
    </div>
  </div>
);

const DesignStyleStep = ({ formData, updateFormData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        {
          name: "Modern & Minimalist",
          desc: "Clean, simple, and professional",
        },
        { name: "Creative & Artistic", desc: "Bold colors and unique layouts" },
        {
          name: "Corporate & Professional",
          desc: "Traditional business aesthetic",
        },
        { name: "Playful & Fun", desc: "Vibrant and engaging design" },
      ].map((style) => (
        <button
          key={style.name}
          onClick={() => updateFormData("designStyle", style.name)}
          className={`p-4 rounded-lg border-2 transition-all duration-200 hover:border-blue-400 text-left ${
            formData.designStyle === style.name
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          <div className="font-medium">{style.name}</div>
          <div className="text-sm text-gray-600 mt-1">{style.desc}</div>
        </button>
      ))}
    </div>
  </div>
);

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    websiteType: "",
    uniqueProposition: "",
    introduction: "",
    visitorsAction: "",
    designStyle: "",
  });

  const steps = [
    {
      title: "What kind of website do you want to create?",
      component: WebsiteTypeStep,
    },
    {
      title: "Describe what you do and how you position yourself",
      component: BusinessDescriptionStep,
    },
    {
      title: "What's the main action you want visitors to take?",
      component: VisitorsActionStep,
    },
    {
      title: "Choose your design style preference",
      component: DesignStyleStep,
    },
  ];

  const updateFormData = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return formData.websiteType !== "";
      case 1:
        return (
          formData.uniqueProposition !== "" && formData.introduction !== ""
        );
      case 2:
        return formData.visitorsAction !== "";
      case 3:
        return formData.designStyle !== "";
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Handle completion
      console.log("Onboarding Complete!", formData);
      alert("Onboarding Complete! Check console for form data.");
    }
  };

  const prevStep = () => currentStep > 0 && setCurrentStep((prev) => prev - 1);

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    index < currentStep
                      ? "bg-green-500 text-white"
                      : index === currentStep
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-full h-1 mx-2 rounded transition-all duration-300 ${
                      index < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                    style={{ width: "100px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-blue-600 mb-2">
              Step {currentStep + 1}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="transition-all duration-300">
            <CurrentStepComponent
              formData={formData}
              updateFormData={updateFormData}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="text-sm text-gray-500">
            {currentStep + 1} / {steps.length}
          </div>

          <button
            onClick={nextStep}
            disabled={!isStepComplete()}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isStepComplete()
                ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <span>{currentStep === steps.length - 1 ? "Finish" : "Next"}</span>
            {currentStep === steps.length - 1 ? (
              <Check className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
