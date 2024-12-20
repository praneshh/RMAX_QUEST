import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is RMax?',
    answer: 'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.',
  },
  {
    question: 'How does it work?',
    answer: 'RMax provides an all-in-one platform for managing your service business, from scheduling to payments.',
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer flexible pricing plans starting from $17/month with a 30-day free trial.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600 text-center mb-4">
        Find answers to common questions about our services and features.
      </p>
      <p className="text-gray-600 text-center mb-8">
        For more details, contact our support team.
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Ask Q! e.g Tell me about key Features."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          Haven't got your answer?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Contact our support now
          </a>
        </p>
      </div>
    </section>
  );
}