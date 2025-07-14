import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Building,
  ShoppingCart,
  User,
  FileText,
  Zap,
  Heart,
} from "lucide-react";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    websiteType: "",
    uniqueProposition: "",
    introduction: "",
    visitorsAction: "",
    designStyle: "",
  });

  const websiteTypes = [
    {
      name: "Business Website",
      icon: Building,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "E-commerce Store",
      icon: ShoppingCart,
      color: "from-emerald-500 to-emerald-600",
    },
    { name: "Portfolio", icon: User, color: "from-purple-500 to-purple-600" },
    { name: "Blog", icon: FileText, color: "from-amber-500 to-amber-600" },
    { name: "Landing Page", icon: Zap, color: "from-red-500 to-red-600" },
    { name: "Other", icon: Heart, color: "from-pink-500 to-pink-600" },
  ];

  const actions = [
    {
      name: "Contact me for services",
      icon: "📞",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Purchase products",
      icon: "🛒",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Subscribe to newsletter",
      icon: "📧",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Download resources",
      icon: "📥",
      color: "from-amber-500 to-amber-600",
    },
    {
      name: "Book a consultation",
      icon: "📅",
      color: "from-red-500 to-red-600",
    },
    {
      name: "View my portfolio",
      icon: "🎨",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const designStyles = [
    {
      name: "Modern & Minimalist",
      desc: "Clean, simple design",
      gradient: "from-slate-500 to-slate-600",
      bg: "bg-gradient-to-br from-slate-50 to-slate-100",
    },
    {
      name: "Creative & Artistic",
      desc: "Bold colors & layouts",
      gradient: "from-violet-500 to-violet-600",
      bg: "bg-gradient-to-br from-violet-50 to-violet-100",
    },
    {
      name: "Corporate & Professional",
      desc: "Business aesthetic",
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      name: "Playful & Fun",
      desc: "Vibrant & engaging",
      gradient: "from-orange-500 to-orange-600",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
  ];

  const WebsiteTypeStep = ({ formData, updateFormData }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {websiteTypes.map((type) => {
        const IconComponent = type.icon;
        const isSelected = formData.websiteType === type.name;
        return (
          <button
            key={type.name}
            onClick={() => updateFormData("websiteType", type.name)}
            className={`group relative p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
              isSelected
                ? "border-transparent bg-gradient-to-r " +
                  type.color +
                  " text-white shadow-lg"
                : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  isSelected ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                <IconComponent
                  className={`w-5 h-5 ${
                    isSelected ? "text-white" : "text-gray-600"
                  }`}
                />
              </div>
              <span
                className={`font-medium text-sm ${
                  isSelected ? "text-white" : "text-gray-900"
                }`}
              >
                {type.name}
              </span>
            </div>
            {isSelected && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );

  const BusinessDescriptionStep = ({ formData, updateFormData }) => (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <label className="text-base font-semibold text-gray-800">
            What makes you unique?
          </label>
        </div>
        <textarea
          value={formData.uniqueProposition}
          onChange={(e) => updateFormData("uniqueProposition", e.target.value)}
          placeholder="Tell us what sets you apart..."
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none text-gray-800 placeholder-gray-400 bg-gradient-to-br from-white to-gray-50 text-sm"
          rows={3}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-purple-500" />
          <label className="text-base font-semibold text-gray-800">
            Brief introduction
          </label>
        </div>
        <textarea
          value={formData.introduction}
          onChange={(e) => updateFormData("introduction", e.target.value)}
          placeholder="Write a brief introduction about yourself..."
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 resize-none text-gray-800 placeholder-gray-400 bg-gradient-to-br from-white to-gray-50 text-sm"
          rows={3}
        />
      </div>
    </div>
  );

  const VisitorsActionStep = ({ formData, updateFormData }) => (
    <div className="grid grid-cols-1 gap-3">
      {actions.map((action) => {
        const isSelected = formData.visitorsAction === action.name;
        return (
          <button
            key={action.name}
            onClick={() => updateFormData("visitorsAction", action.name)}
            className={`group relative p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md text-left ${
              isSelected
                ? "border-transparent bg-gradient-to-r " +
                  action.color +
                  " text-white shadow-lg"
                : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`text-lg p-2 rounded-lg ${
                  isSelected ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                {action.icon}
              </div>
              <span
                className={`font-medium text-sm ${
                  isSelected ? "text-white" : "text-gray-900"
                }`}
              >
                {action.name}
              </span>
            </div>
            {isSelected && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );

  const DesignStyleStep = ({ formData, updateFormData }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {designStyles.map((style) => {
        const isSelected = formData.designStyle === style.name;
        return (
          <button
            key={style.name}
            onClick={() => updateFormData("designStyle", style.name)}
            className={`group relative p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md text-left ${
              isSelected
                ? "border-transparent bg-gradient-to-r " +
                  style.gradient +
                  " text-white shadow-lg"
                : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
            }`}
          >
            <div className="space-y-3">
              <div
                className={`w-full h-12 rounded-lg ${
                  isSelected ? "bg-white/20" : style.bg
                }`}
              ></div>
              <div className="space-y-1">
                <div
                  className={`font-semibold text-sm ${
                    isSelected ? "text-white" : "text-gray-900"
                  }`}
                >
                  {style.name}
                </div>
                <div
                  className={`text-xs ${
                    isSelected ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {style.desc}
                </div>
              </div>
            </div>
            {isSelected && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );

  const steps = [
    {
      title: "What kind of website do you want?",
      subtitle: "Choose your website type",
      component: WebsiteTypeStep,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Tell us about yourself",
      subtitle: "What makes you special?",
      component: BusinessDescriptionStep,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "What's your main goal?",
      subtitle: "What should visitors do?",
      component: VisitorsActionStep,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Choose your style",
      subtitle: "Pick your design preference",
      component: DesignStyleStep,
      color: "from-amber-500 to-orange-600",
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
      console.log("Onboarding Complete!", formData);
      alert("🎉 Onboarding Complete! Check console for form data.");
    }
  };

  const prevStep = () => currentStep > 0 && setCurrentStep((prev) => prev - 1);

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-3 sm:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Website Builder</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Let's create something amazing
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Build your perfect website in 4 simple steps
          </p>
        </div>

        {/* Mobile-Optimized Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="relative">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      index < currentStep
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                        : index === currentStep
                        ? "bg-gradient-to-r " +
                          step.color +
                          " text-white shadow-md"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  {index === currentStep && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 animate-pulse"></div>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-2 sm:mx-3">
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index < currentStep
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-gray-200"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-xs font-medium text-gray-600 mb-2">
              Step {currentStep + 1} of {steps.length}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Compact Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 mb-6 border border-white/20">
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs font-medium mb-3">
              <span>Step {currentStep + 1}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600 text-sm">
              {steps[currentStep].subtitle}
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-3"></div>
          </div>

          <div className="transition-all duration-500">
            <CurrentStepComponent
              formData={formData}
              updateFormData={updateFormData}
            />
          </div>
        </div>

        {/* Compact Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentStep === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 w-6"
                    : index < currentStep
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={!isStepComplete()}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              isStepComplete()
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-105"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="text-sm">
              {currentStep === steps.length - 1 ? "Complete" : "Next"}
            </span>
            {currentStep === steps.length - 1 ? (
              <Sparkles className="w-4 h-4" />
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
