
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Components/Hero';
import AboutSection from './Components/About';
import FeaturesSection from './Components/Features';
import TestimonialsSection from './Components/Testimonials';
import CallToActionSection from './Components/CallToAction';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import FAQ from './Components/FAQ ';
import Register from './Components/Register'; // Import the Register component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <FeaturesSection />
              <CallToActionSection />
              <TestimonialsSection />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/register" element={<Register />} /> {/* Add the register route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
