import React from 'react';
import { Clock, TrendingUp, Heart, Cloud, Zap, Lock } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Reduce administrative work by 70%. Automate appointments, reminders, and follow-ups.',
    stat: '70%',
    statLabel: 'Time Saved',
    color: 'bg-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Increase Revenue',
    description: 'Streamline billing, reduce no-shows, and optimize your practice operations.',
    stat: '40%',
    statLabel: 'Revenue Growth',
    color: 'bg-green-500',
  },
  {
    icon: Heart,
    title: 'Better Patient Experience',
    description: 'Provide seamless digital experiences that patients expect from modern healthcare.',
    stat: '98%',
    statLabel: 'Satisfaction Rate',
    color: 'bg-teal-500',
  },
  {
    icon: Cloud,
    title: 'Access Anywhere',
    description: 'Cloud-based platform accessible from any device, anytime, anywhere.',
    stat: '24/7',
    statLabel: 'Availability',
    color: 'bg-purple-500',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get started in minutes. No complex installations or lengthy onboarding.',
    stat: '< 5 min',
    statLabel: 'Setup Time',
    color: 'bg-amber-500',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade security with HIPAA compliance and end-to-end encryption.',
    stat: '100%',
    statLabel: 'Secure',
    color: 'bg-red-500',
  },
];

const Benefits = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Why Choose MediWeGo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Benefits that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">transform</span> your practice
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of healthcare providers who have revolutionized their operations with MediWeGo.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{benefit.stat}</p>
                      <p className="text-xs text-gray-400">{benefit.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Ready to transform your healthcare practice?
            </p>
            <a
              href="https://apps.mediwego.com/App/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
