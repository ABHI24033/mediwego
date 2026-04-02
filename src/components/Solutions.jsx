import React from 'react';
import { Stethoscope, Building2, Pill, UserCircle, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Stethoscope,
    title: 'For Doctors & Clinics',
    description: 'Streamline your practice with easy appointment scheduling, digital prescriptions, and patient management.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
    features: ['Appointment Scheduling', 'Digital Prescriptions', 'Patient Records', 'Billing Management'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Building2,
    title: 'For Hospitals',
    description: 'Enterprise-grade solution for multi-department hospitals with advanced analytics and integrations.',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop',
    features: ['Multi-department Management', 'EMR Integration', 'Staff Management', 'Advanced Analytics'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Pill,
    title: 'For Pharma',
    description: 'Connect with healthcare providers, manage inventory, and track prescriptions digitally.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
    features: ['Digital Prescriptions', 'Inventory Management', 'Order Tracking', 'Provider Network'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: UserCircle,
    title: 'For Patients',
    description: 'Easy appointment booking, access to prescriptions, and health records at your fingertips.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    features: ['Easy Booking', 'Digital Records', 'Medicine Reminders', 'Teleconsultation'],
    color: 'from-green-500 to-green-600',
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4">
              Solutions
            </span>
            <h2 className="section-title mb-4">
              Healthcare solutions for <span className="gradient-text">everyone</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Tailored solutions designed to meet the unique needs of different healthcare stakeholders.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-60`} />
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium opacity-90">Solution</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {solution.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
