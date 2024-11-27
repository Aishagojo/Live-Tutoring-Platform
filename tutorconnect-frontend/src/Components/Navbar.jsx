
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Adjust if necessary

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <img src={logo} alt="TutorConnect Logo" className="h-8 mr-3" />
          <div className="text-xl font-bold text-blue-600">SmartTutor</div>
        </div>
        <ul className="flex space-x-6 mx-auto">
          <li>
            <Link to="/" className="hover:text-gray-700 text-black">Home</Link>
          </li>
          <li>
            <Link to="/tutor-profiles" className="hover:text-gray-700 text-black">Tutor Profiles</Link>
          </li>
          <li>
            <Link to="/booking-system" className="hover:text-gray-700 text-black">Booking System</Link>
          </li>
          <li>
            <Link to="/live-sessions" className="hover:text-gray-700 text-black">Live Sessions</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-700 text-black">Dashboard</Link>
          </li>
        </ul>
        <div>
          <Link
            to="/register"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
