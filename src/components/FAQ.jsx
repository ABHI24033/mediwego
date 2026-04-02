import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'You can start using MediWeGo immediately with full access to all features for 14 days. No credit card is required to sign up. At the end of the trial, you can choose a plan that fits your needs or continue with our free tier.',
  },
  {
    question: 'Is my patient data secure?',
    answer: 'Absolutely. MediWeGo uses bank-grade encryption (AES-256) for all data storage and transmission. We are HIPAA compliant and ISO 27001 certified. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee.',
  },
  {
    question: 'Can I import my existing patient data?',
    answer: 'Yes! We provide easy data migration tools to import patient records from Excel, CSV, or other EMR systems. Our support team can also assist with bulk data migration for enterprise customers.',
  },
  {
    question: 'Do I need any technical expertise to use MediWeGo?',
    answer: 'Not at all. MediWeGo is designed to be intuitive and user-friendly. Most healthcare providers are up and running within minutes. We also offer free onboarding support and comprehensive video tutorials.',
  },
  {
    question: 'Can I access MediWeGo on mobile devices?',
    answer: 'Yes, MediWeGo works seamlessly on all devices - desktop, tablet, and mobile. We also offer native iOS and Android apps for on-the-go access to your practice.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, UPI, net banking, and NEFT/RTGS transfers for annual plans. Enterprise customers can also pay via purchase orders.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. If you cancel, you will continue to have access to your account until the end of your current billing period. We also offer a 30-day money-back guarantee.',
  },
  {
    question: 'Do you offer support in regional languages?',
    answer: 'Yes, our support team can assist you in English, Hindi, Tamil, Telugu, Kannada, and Marathi. The MediWeGo interface is also available in multiple Indian languages.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="section-title mb-4">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about MediWeGo.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-white border-primary-200 shadow-lg shadow-primary-600/5'
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold pr-4 ${openIndex === index ? 'text-primary-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-primary-100' : 'bg-gray-200'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className={`w-5 h-5 ${openIndex === index ? 'text-primary-600' : 'text-gray-500'}`} />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Can not find the answer you are looking for? Please contact our support team.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
