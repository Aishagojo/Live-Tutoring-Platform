
import React from "react";
import tutorImage from './assets/tutor.png';
import secondaryImage from './assets/teacher.jpg';
import featureImage from './assets/schedule.jpg'; // Add a third image

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-screen flex items-center w-full">
      <div className="container mx-auto px-6 md:flex items-center justify-between w-full">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Discover Personalized Learning
          </h1>
          <p className="text-lg mb-6">
            Learn at your own pace with expert tutors and flexible plans.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#features"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
            >
              Learn More
            </a>
            <a
              href="#register"
              className="bg-blue-800 px-6 py-3 rounded text-white hover:bg-blue-900"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <img
            src={tutorImage}
            alt="Tutor"
            className="w-8/12 md:w-6/12 h-auto rounded-lg shadow-lg ml-0 md:ml-60"
          />
          <div className="absolute top-1/4 left-0 md:translate-x-1/4 flex flex-col space-y-4 md:space-x-1 md:mr-44">
            <img
              src={secondaryImage}
              alt="Learning"
              className="w-8/12 md:w-5/12 h-auto rounded-lg shadow-lg"
            />
            <img
              src={featureImage}
              alt="Feature"
              className="w-8/12 md:w-5/12 h-auto rounded-lg shadow-lg mt-4 md:mt-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
