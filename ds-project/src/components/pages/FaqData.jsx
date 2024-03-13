import React, { useState } from 'react';
import { faqquestion } from './FaqQuestion'; // Import the FAQ data

const FaqData = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-lg mx-auto p-4 ">
      {faqquestion.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex justify-between items-center w-full py-3 px-4 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                openIndex === index ? 'rotate-50' : 'rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={openIndex === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
              />
            </svg>
          </button>
          {openIndex === index && (
            <p className="py-3 px-4 text-black">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqData;
