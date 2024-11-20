
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">TutorConnect</h2>
          <p className="mt-2">&copy; 2024 TutorConnect. All rights reserved.</p>
        </div>
        <div className="flex flex-col space-y-2 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="mailto:info@tutorconnect.com" className="hover:text-gray-400">info@tutorconnect.com</a>
          <p> +254740682018</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
