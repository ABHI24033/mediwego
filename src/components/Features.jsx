import React from 'react';
import { Calendar, FileText, Users, CreditCard, BarChart3, Shield, Smartphone, Clock } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Appointment Management',
    description: 'Schedule and manage appointments with ease. Send automated reminders to patients and reduce no-shows.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    description: 'Create, store, and share digital prescriptions securely. Access patient history instantly.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Users,
    title: 'Patient Records',
    description: 'Comprehensive patient management with medical history, allergies, and treatment records.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    description: 'Streamline invoicing and accept multiple payment methods. Track revenue and outstanding payments.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Gain insights with detailed reports on appointments, revenue, and patient demographics.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Bank-grade security with end-to-end encryption. HIPAA compliant data storage.',
    color: 'bg-red-50 text-red-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="section-title mb-4">
              Everything you need to <span className="gradient-text">run your practice</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A complete suite of tools designed to streamline your healthcare operations and enhance patient care.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
