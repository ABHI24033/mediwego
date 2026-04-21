import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import { 
  Shield, 
  Smartphone, 
  Database, 
  UserCheck, 
  Globe, 
  Lock, 
  IdCard, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const ABHA = () => {
  const benefits = [
    {
      icon: Database,
      title: 'Health Record Digitisation',
      description: 'Link all your health records to one ID for easy access and management.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: UserCheck,
      title: 'Control Over Your Data',
      description: 'You control who accesses your health data, with the ability to manage and revoke consent.',
      color: 'bg-teal-50 text-teal-600',
    },
    {
      icon: Globe,
      title: 'Portability',
      description: 'Access your health records from anywhere in the country, ideal for travellers and relocators.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Lock,
      title: 'Secure and Safe',
      description: 'Robust encryption ensures the security of your medical information.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: IdCard,
      title: 'Unique & Trustable Identity',
      description: 'Establish a unique identity across different healthcare providers within the ecosystem.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Shield,
      title: 'Unified Benefits',
      description: 'Link all healthcare benefits from public health programmes to insurance schemes to your ABHA number.',
      color: 'bg-red-50 text-red-600',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Official Website',
      description: 'Go to the official ABHA website and click on \'Create ABHA number\'.',
    },
    {
      number: '02',
      title: 'Select Identity',
      description: 'Choose to use either your Aadhaar card or driver\'s license, and then click \'Next\'.',
    },
    {
      number: '03',
      title: 'Enter Details',
      description: 'Enter your Aadhaar or license number. Make sure to read the declaration carefully.',
    },
    {
      number: '04',
      title: 'OTP Verification',
      description: 'Agree to the declaration and enter the one-time passcode sent to your registered mobile.',
    },
    {
      number: '05',
      title: 'Complete Registration',
      description: 'Click \'Submit\'. This will successfully create your ABHA identity card.',
    },
  ];

  const faqs = [
    {
      question: 'What is an ABHA Card?',
      answer: 'The ABHA ID is a digital health card that allows seamless access to medical services across India. It securely stores and shares your health records with healthcare providers, ensuring continuity of care.'
    },
    {
      question: 'Is ABHA mandatory?',
      answer: 'ABHA may soon become essential for accessing various healthcare services. Major hospitals like AIIMS are already implementing it to streamline patient registration and record management.'
    },
    {
      question: 'How do I download my ABHA card?',
      answer: 'You can download your ABHA card from the official ABHA Portal (healthid.ndhm.gov.in) after completing the registration process.'
    },
    {
      question: 'What are the benefits of ABHA ID?',
      answer: 'Benefits include easy access to health services, streamlined hospital admissions, digital record management, and inclusion in various government healthcare schemes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
          <div className="relative section-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md shadow-blue-100 border border-blue-50">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-medium text-blue-900 leading-none">Ayushman Bharat Digital Mission</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Digital <span className="gradient-text">Health Identity</span> with ABHA
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Create your ABHA card today and join India's growing digital health ecosystem. 
                  Access medical records anywhere, anytime with complete security and consent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://abha.abdm.gov.in/abha/v3/register" target="_blank" rel="noopener noreferrer" className="btn-primary py-4 px-8">
                    Create Your ABHA ID
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="#how-to-create" className="btn-secondary py-4 px-8">
                    View Steps
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="glass-card p-4 flex items-center justify-center bg-gradient-to-br from-blue-600 to-teal-500 text-white overflow-hidden relative group">
                  {/* <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" /> */}
                  <div className="text-center">
                    <img src="/abha_sample.jpg" alt="ABHA Card Sample" className="w-[520px] mx-auto rounded-lg shadow-lg" />
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-white relative">
          <div className="section-padding max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Benefits
              </span>
              <h2 className="section-title mb-4">
                Why Do You Need an <span className="gradient-text">ABHA Card?</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Discover the advantages of having a unique digital health identity for a seamless healthcare experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="feature-card group">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Create - Step by Step */}
        <section id="how-to-create" className="py-24 bg-gray-50">
          <div className="section-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4">
                  Process
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Simple Steps to <span className="gradient-text">Create Your ABHA</span> Number
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Creating your ABHA identity is quick and easy. Follow these simple steps on the official National Health Authority portal.
                </p>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-6 items-start group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-blue-600 font-bold text-lg group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a href="https://abha.abdm.gov.in/abha/v3/register" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4">
                    Start Registration Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card overflow-hidden">
                  <img src="./abha_process.png" alt="Digital Healthcare" className="w-full h-[500px] rounded-xl shadow-2xl" />
                </div>
                {/* <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs animate-float">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="font-bold text-gray-900">Secure & Private</p>
                  </div>
                  <p className="text-sm text-gray-600">Your health data is only shared with your explicit consent.</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-white">
          <div className="section-padding max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
              <p className="text-gray-600">Everything you need to know about the ABHA Card and its usage.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-gray-100 rounded-2xl bg-white transition-all duration-200 open:shadow-xl open:shadow-blue-600/5 open:border-blue-100">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Digitize Your Health Records?
                </h2>
                <p className="text-blue-50 text-lg mb-8 opacity-90">
                  Join millions of Indians who are already part of the Ayushman Bharat Digital Mission. 
                  Take the first step towards a smarter, digital healthcare experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://abha.abdm.gov.in/abha/v3/register" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 text-center">
                    Register on ABHA Portal
                  </a>
                  <a href="#how-to-create" className="px-8 py-4 bg-blue-800/30 text-white font-bold rounded-xl border border-white/20 hover:bg-blue-800/40 transition-all duration-200 text-center">
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <IdCard className="w-full h-full transform translate-x-1/4 -rotate-12" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ABHA;
