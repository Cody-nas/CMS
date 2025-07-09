import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";
import WebsiteTypeStep from "./steps/WebsiteTypeStep";
import BusinessDescriptionStep from "./steps/BusinessDescriptionStep";
import VisitorsActionStep from "./steps/VisitorsActionStep";
import DesignStyleStep from "./steps/DesignStyleStep";

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

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("Onboarding Complete!");
    }
  };

  const prevStep = () => currentStep > 0 && setCurrentStep((prev) => prev - 1);

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-800 p-6 flex flex-col">
      {/* Progress */}
      <div className="w-full bg-gray-900 bg-opacity-30 h-2 mb-6 rounded">
        <div
          className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 h-2 rounded transition-all duration-500"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-sm font-medium mb-2 tracking-widest uppercase opacity-80">
          Step {currentStep + 1}
        </h2>
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          {steps[currentStep].title}
        </h1>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium border border-indigo-300 text-white disabled:opacity-30"
          >
            <FiArrowLeft /> Previous
          </button>
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500 text-white text-sm font-medium shadow hover:bg-indigo-600"
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}{" "}
            {currentStep === steps.length - 1 ? <FiCheck /> : <FiArrowRight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
