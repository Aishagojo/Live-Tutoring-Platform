
import React from 'react';
import testimonialImage from './assets/student.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Amazing platform! I learned faster than ever.",
      name: "Alex Johnson",
    },
    {
      quote: "The tutors are very knowledgeable and helpful.",
      name: "Samantha Lee",
    },
    {
      quote: "I love the flexibility and the personalized plans.",
      name: "Michael Brown",
    },
    {
      quote: "Great experience, highly recommend!",
      name: "Emily Davis",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-16 w-full">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-black-600">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition max-w-xs mx-auto"
            >
              <img
                src={testimonialImage}
                alt="User"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-lg italic text-gray-600">
                "{testimonial.quote}"
              </p>
              <p className="mt-4 text-blue-600 font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
