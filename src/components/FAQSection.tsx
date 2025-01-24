import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How long do reusable cups typically last?",
      answer: "Quality reusable cups can last for years with proper care. Stainless steel cups can last 10+ years, while ceramic mugs typically last 5-10 years."
    },
    {
      question: "Are reusable cups really more eco-friendly?",
      answer: "Yes! A reusable cup becomes more eco-friendly than disposables after just 20-30 uses, considering manufacturing and washing impacts."
    },
    {
      question: "How should I clean my reusable cup?",
      answer: "Most reusable cups are dishwasher safe. For hand washing, use warm soapy water and a bottle brush. Regular cleaning prevents stains and odors."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 flex items-center">
        <HelpCircle className="w-6 h-6 mr-2 text-green-600" />
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold mb-2">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;