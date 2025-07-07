import React from "react";
import {
  FaArrowRight,
  FaBolt,
  FaUsers,
  FaLink,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      category: "Automate Tasks",
      title: "Save Hours with AI-Powered Automation",
      description:
        "Reduce manual work with smart automation that streamlines repetitive tasks, freeing up time for what matters most.",
      cta: "Get Started",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      icon: <FaBolt className="w-6 h-6 text-orange-600" />,
      decorativeShape: (
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl transform rotate-12 opacity-60" />
      ),
    },
    {
      category: "Real-Time Collaboration",
      title: "Work Seamlessly with Your Team",
      description:
        "Bring your team together with live collaboration, instant feedback, and version control—no more messy email threads.",
      cta: "Try It Now",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      icon: <FaUsers className="w-6 h-6 text-blue-600" />,
      decorativeShape: (
        <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-70" />
      ),
    },
    {
      category: "Powerful Integrations",
      title: "Connect with Your Favorite Tools",
      description:
        "Integrate with Slack, Notion, Zapier, and more to keep your workflow efficient and connected across all platforms.",
      cta: "Explore Integrations",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      icon: <FaLink className="w-6 h-6 text-purple-600" />,
      decorativeShape: (
        <div className="absolute bottom-4 right-6 w-14 h-14 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg transform -rotate-12 opacity-60" />
      ),
    },
    {
      category: "Advanced Analytics",
      title: "Make Data-Driven Decisions",
      description:
        "Gain insights with real-time analytics and reports, helping you optimize performance and drive better results.",
      cta: "View Insights",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      icon: <FaChartBar className="w-6 h-6 text-green-600" />,
      decorativeShape: (
        <div className="absolute top-6 right-4 w-20 h-8 bg-gradient-to-br from-green-200 to-green-300 rounded-full transform rotate-45 opacity-50" />
      ),
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Supercharge Your Workflow
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful features designed to transform how you work and
            collaborate
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 ${feature.bgColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group`}
            >
              {/* Decorative Shape */}
              {feature.decorativeShape}

              {/* Content */}
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                  {feature.icon}
                  <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                    {feature.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all duration-200">
                  <span className="border-b-2 border-gray-900 pb-1">
                    {feature.cta}
                  </span>
                  <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 group">
            <FaRocket className="w-5 h-5" />
            <span>Start Your Free Trial</span>
            <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Features;
