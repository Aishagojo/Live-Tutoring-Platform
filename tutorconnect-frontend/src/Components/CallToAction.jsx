
import React from 'react';

const CallToActionSection = () => {
  return (
    <section id="register" className="bg-blue-600 text-white py-16 text-center w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join us today and unlock your potential with TutorConnect.
        </p>
        <a
          href="/get-started"
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
