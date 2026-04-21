import React from 'react';
import { UserPlus, LogIn, Building2, UserCog, Users, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account in seconds. No credit card required to get started.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    icon: LogIn,
    title: 'Login',
    description: 'Access your dashboard securely from any device, anywhere.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    id: 3,
    icon: Building2,
    title: 'Add Department',
    description: 'Set up your clinic departments like Cardiology, Orthopedics, etc.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 4,
    icon: UserCog,
    title: 'Add Doctor',
    description: 'Register your doctors with their specialties and schedules.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    id: 5,
    icon: Users,
    title: 'Add & Manage Patients',
    description: 'Start adding patients, book appointments, and manage records.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Getting Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How to <span className="gradient-text">Use MediWeGo</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with these simple steps. No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-gray-900">{step.id}</span>
                  </div>

                  {/* Icon Container */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-blue-500/20 group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - except for last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-8 -right-3 w-6 h-6 items-center justify-center text-gray-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex items-center justify-center mt-4 text-gray-300">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700 font-medium">
              Ready to streamline your practice?
            </span>
            <a
              href="https://apps.mediwego.com/App/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
