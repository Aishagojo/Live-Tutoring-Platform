import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Flexible Scheduling",
      description: "Book sessions that suit your routine.",
      icon: "📅",
    },
    {
      title: "Interactive Tools",
      description: "Learn using collaborative whiteboards.",
      icon: "💻",
    },
    {
      title: "Expert Tutors",
      description: "Access experienced professionals anytime.",
      icon: "👩‍🏫",
    },
    {
      title: "Custom Plans",
      description: "Tailor your experience to meet goals.",
      icon: "📝",
    },
    {
      title: "AI-Based Support",
      description: "Get instant help and support with our AI chatbot.",
      icon: "🤖",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-black-600">Key Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition w-full sm:w-1/2 lg:w-1/4"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
