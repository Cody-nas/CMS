import React, { useState } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiGlobe,
  FiUser,
  FiShoppingBag,
  FiCoffee,
  FiGrid,
  FiPhone,
  FiMail,
  FiMapPin,
  FiExternalLink,
  FiStar,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";

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
      id: "website-type",
      step: "ONE",
      title: "What kind of website do you want to create?",
      component: WebsiteTypeStep,
    },
    {
      id: "business-description",
      step: "TWO",
      title: "Describe what you do and how you position yourself",
      component: BusinessDescriptionStep,
    },
    {
      id: "visitors-action",
      step: "THREE",
      title: "What's the main action you want visitors to take?",
      component: VisitorsActionStep,
    },
    {
      id: "design-style",
      step: "FOUR",
      title: "Choose your design style preference",
      component: DesignStyleStep,
    },
  ];

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Onboarding complete! Creating your website...");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex flex-col relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-300 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Animated Progress Bar */}
      <div className="w-full bg-black bg-opacity-20 h-2 relative">
        <div
          className="bg-gradient-to-r from-white to-yellow-200 h-2 transition-all duration-1000 ease-out relative"
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`,
          }}
        >
          <div className="absolute inset-0 bg-white opacity-60 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col justify-center px-4 py-6 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-25 rounded-full mb-4 backdrop-blur-sm border border-white border-opacity-30">
              <span className="text-white text-lg font-bold">
                {currentStep + 1}
              </span>
            </div>
            <div className="text-purple-100 text-xs font-semibold mb-2 tracking-[0.2em] uppercase">
              Step {steps[currentStep].step}
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-light leading-tight max-w-3xl mx-auto">
              {steps[currentStep].title}
            </h1>
          </div>

          {/* Step Content */}
          <div className="bg-white bg-opacity-15 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white border-opacity-30 mb-8">
            <CurrentStepComponent
              formData={formData}
              updateFormData={updateFormData}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentStep === 0
                  ? "bg-transparent border border-purple-300 text-purple-200 cursor-not-allowed opacity-50"
                  : "bg-white bg-opacity-20 border border-white text-white hover:bg-white hover:text-purple-600 backdrop-blur-sm"
              }`}
            >
              <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm">Previous</span>
            </button>

            <button
              onClick={nextStep}
              className="group flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-sm">
                {currentStep === steps.length - 1
                  ? "Create Website"
                  : "Continue"}
              </span>
              {currentStep === steps.length - 1 ? (
                <FiCheck className="w-4 h-4 transition-transform group-hover:scale-110" />
              ) : (
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function WebsiteTypeStep({ formData, updateFormData }) {
  const options = [
    {
      value: "business",
      label: "BUSINESS",
      icon: FiTrendingUp,
      description: "Professional business website with company information",
    },
    {
      value: "freelancer",
      label: "FREELANCER",
      icon: FiUser,
      description: "Personal portfolio showcasing your skills",
    },
    {
      value: "online-store",
      label: "ONLINE STORE",
      icon: FiShoppingBag,
      description: "E-commerce website to sell products",
    },
    {
      value: "restaurant-food",
      label: "RESTAURANT",
      icon: FiCoffee,
      description: "Restaurant website with menu and location",
    },
    {
      value: "other",
      label: "OTHER",
      icon: FiGrid,
      description: "Something else? We can help you build it",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {options.map((option) => {
        const IconComponent = option.icon;
        return (
          <label
            key={option.value}
            className={`flex flex-col items-center p-4 rounded-xl cursor-pointer group transition-all duration-300 ${
              formData.websiteType === option.value
                ? "bg-white bg-opacity-25 border-2 border-white shadow-lg transform scale-105"
                : "hover:bg-white hover:bg-opacity-15 border-2 border-transparent hover:scale-102"
            }`}
          >
            <input
              type="radio"
              name="websiteType"
              value={option.value}
              checked={formData.websiteType === option.value}
              onChange={(e) => updateFormData("websiteType", e.target.value)}
              className="hidden"
            />
            <div
              className={`p-3 rounded-lg mb-3 transition-all duration-300 ${
                formData.websiteType === option.value
                  ? "bg-white bg-opacity-30"
                  : "bg-white bg-opacity-20 group-hover:bg-opacity-30"
              }`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-sm font-medium mb-1 text-center">
              {option.label}
            </span>
            <span className="text-purple-100 text-xs opacity-80 text-center leading-tight">
              {option.description}
            </span>
            {formData.websiteType === option.value && (
              <div className="mt-2">
                <FiCheck className="w-4 h-4 text-white" />
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
}

function BusinessDescriptionStep({ formData, updateFormData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-purple-100 text-xs font-semibold mb-2 tracking-wider flex items-center">
            <FiStar className="w-3 h-3 mr-2" />
            YOUR UNIQUE SELLING PROPOSITION
          </label>
          <input
            type="text"
            placeholder="Affordable custom homes on your land"
            value={formData.uniqueProposition}
            onChange={(e) =>
              updateFormData("uniqueProposition", e.target.value)
            }
            className="w-full p-3 bg-white bg-opacity-15 backdrop-blur-sm border border-white border-opacity-40 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:border-white focus:bg-opacity-25 text-sm transition-all duration-300"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-purple-100 text-xs font-semibold tracking-wider flex items-center">
              <FiGlobe className="w-3 h-3 mr-2" />
              GENERAL INTRODUCTION
            </label>
            <span
              className={`text-xs font-medium ${
                formData.introduction.length > 180
                  ? "text-red-300"
                  : "text-purple-200"
              }`}
            >
              {formData.introduction.length}/200
            </span>
          </div>
          <textarea
            placeholder="We own and operate our own lumber yard, so we get the best materials at the best price..."
            value={formData.introduction}
            onChange={(e) => updateFormData("introduction", e.target.value)}
            maxLength={200}
            rows={3}
            className="w-full p-3 bg-white bg-opacity-15 backdrop-blur-sm border border-white border-opacity-40 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:border-white focus:bg-opacity-25 resize-none text-sm transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-green-500 bg-opacity-30 rounded-lg backdrop-blur-sm border border-white border-opacity-30">
          <h3 className="text-white text-xs font-semibold mb-2 tracking-wider flex items-center">
            <FiCheck className="w-3 h-3 mr-2" />
            DO
          </h3>
          <p className="text-green-100 text-xs leading-relaxed">
            Describe your business with specifics & details. Be clear about what
            makes you unique.
          </p>
        </div>
        <div className="p-4 bg-red-500 bg-opacity-25 rounded-lg backdrop-blur-sm border border-white border-opacity-30">
          <h3 className="text-white text-xs font-semibold mb-2 tracking-wider flex items-center">
            <span className="w-3 h-3 mr-2 flex items-center justify-center text-xs">
              ✕
            </span>
            DON'T
          </h3>
          <p className="text-red-100 text-xs leading-relaxed">
            Use vague metaphors and generic language that could apply to anyone.
          </p>
        </div>
      </div>
    </div>
  );
}

function VisitorsActionStep({ formData, updateFormData }) {
  const options = [
    {
      value: "call",
      label: "CALL YOU",
      icon: FiPhone,
      description: "Display your phone number prominently",
    },
    {
      value: "email",
      label: "CONTACT VIA EMAIL",
      icon: FiMail,
      description: "Include a contact form or email",
    },
    {
      value: "visit-company",
      label: "VISIT YOUR COMPANY",
      icon: FiMapPin,
      description: "Show your location and directions",
    },
    {
      value: "visit-page",
      label: "VISIT A SPECIFIC PAGE",
      icon: FiExternalLink,
      description: "Direct visitors to a particular section",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option) => {
        const IconComponent = option.icon;
        return (
          <label
            key={option.value}
            className={`flex items-center space-x-3 p-4 rounded-xl cursor-pointer group transition-all duration-300 ${
              formData.visitorsAction === option.value
                ? "bg-white bg-opacity-25 border-2 border-white shadow-lg"
                : "hover:bg-white hover:bg-opacity-15 border-2 border-transparent"
            }`}
          >
            <div className="relative">
              <input
                type="radio"
                name="visitorsAction"
                value={option.value}
                checked={formData.visitorsAction === option.value}
                onChange={(e) =>
                  updateFormData("visitorsAction", e.target.value)
                }
                className="absolute opacity-0"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  formData.visitorsAction === option.value
                    ? "border-white bg-white"
                    : "border-white border-opacity-50 group-hover:border-opacity-100"
                }`}
              >
                {formData.visitorsAction === option.value && (
                  <FiCheck className="w-3 h-3 text-purple-600 absolute top-0.5 left-0.5" />
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3 flex-1">
              <div
                className={`p-2 rounded-lg transition-all duration-300 ${
                  formData.visitorsAction === option.value
                    ? "bg-white bg-opacity-30"
                    : "bg-white bg-opacity-20 group-hover:bg-opacity-30"
                }`}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-white text-sm font-medium group-hover:text-purple-100 transition-colors block">
                  {option.label}
                </span>
                <span className="text-purple-100 text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  {option.description}
                </span>
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
}

function DesignStyleStep({ formData, updateFormData }) {
  return (
    <div className="space-y-6">
      {/* Compact Template Preview */}
      <div className="bg-white rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-900 font-bold text-lg">Katano</div>
          <nav className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Store
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Fashion
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.
              Donec viverra eleifend lacus.
            </p>
            <div className="flex space-x-3">
              <FiHeart className="w-5 h-5 text-gray-400" />
              <FiStar className="w-5 h-5 text-gray-400" />
              <FiTrendingUp className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl p-6 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <FiStar className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-gray-700 text-xs font-medium">
                  Beautiful Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => updateFormData("designStyle", "minimal")}
          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
            formData.designStyle === "minimal"
              ? "border-white bg-white bg-opacity-25 shadow-lg transform scale-105"
              : "border-white border-opacity-40 hover:border-opacity-70 hover:bg-white hover:bg-opacity-15"
          }`}
        >
          <div className="text-center">
            <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiGrid className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1 text-sm">
              Minimal & Clean
            </h3>
            <p className="text-purple-100 text-xs">
              Professional and informative design
            </p>
          </div>
        </button>

        <button
          onClick={() => updateFormData("designStyle", "artistic")}
          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
            formData.designStyle === "artistic"
              ? "border-white bg-white bg-opacity-25 shadow-lg transform scale-105"
              : "border-white border-opacity-40 hover:border-opacity-70 hover:bg-white hover:bg-opacity-15"
          }`}
        >
          <div className="text-center">
            <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiHeart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1 text-sm">
              Artistic & Playful
            </h3>
            <p className="text-purple-100 text-xs">
              Creative and engaging design
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default OnboardingFlow;
