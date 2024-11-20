
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a session?",
      answer: "You can book a session by browsing available tutors and selecting a convenient time slot on our booking page.",
    },
    {
      question: "What tools do you use for live sessions?",
      answer: "We use video conferencing tools like Zoom and Google Meet, along with interactive tools such as shared whiteboards.",
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support via email at support@tutorconnect.com or call us at +254740682018.",
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white text-black py-16 w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                className="w-full text-left text-2xl font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-lg text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
