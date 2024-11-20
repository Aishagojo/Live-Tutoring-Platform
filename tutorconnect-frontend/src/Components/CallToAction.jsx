
import React from 'react';

const FAQSection = () => {
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
      answer: "You can contact support via email at support@tutorconnect.com or call us at +1 (234) 567-890.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-16 w-full">
      <div className="container mx-auto px-6 text-left">
        <h2 className="text-4xl font-bold mb-12 text-blue-600">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
