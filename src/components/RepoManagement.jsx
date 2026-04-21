import React from 'react';
import { Check, Star, Globe, Award, TrendingUp, Share2 } from 'lucide-react';

const services = [
  {
    id: 4,
    icon: Globe,
    title: 'Launch Your Website',
    description: 'Get your website up and running in minutes. Perfect for individuals and small teams starting their online journey.',
    price: '₹9,999',
    period: '/one-time',
    features: [
      'All analytics features',
      'Up to 250,000 tracked visits',
      'Normal support',
      'Up to 3 team members',
    ],
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-violet-50',
    popular: false,
  },
  {
    id: 5,
    icon: Award,
    title: 'ISO Certification',
    description: 'Get your business ISO certified with expert guidance and documentation support. Build trust and compliance globally.',
    price: '₹5,500',
    period: '/one-time',
    features: [
      'Consultation for ISO',
      'Documentation & audit',
      'ISO certificate',
      'Email & phone support',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    popular: true,
  },
  {
    id: 6,
    icon: Share2,
    title: 'Social Media Package',
    description: 'Boost your online presence with professionally managed social media content, scheduling, and performance.',
    price: '₹1,500',
    period: '/one-time',
    features: [
      'Content creation',
      'Scheduled posting',
      'Basic & performance analytics',
      'Email support',
    ],
    color: 'from-green-500 to-lime-500',
    bgColor: 'bg-green-50',
    popular: false,
  },
  {
    id: 1,
    icon: Globe,
    title: 'GMB Optimization',
    description: 'Optimize your Google My Business profile to improve local visibility, attract nearby customers, and boost search rankings.',
    price: '₹2,000',
    period: '/one-time',
    features: [
      'Business profile optimization',
      'Keyword-rich descriptions',
      'Image & post uploads',
      'Review & insights setup',
    ],
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    popular: false,
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'SEO',
    description: 'Tailored SEO strategies to boost your rankings, drive organic traffic, and improve your website authority.',
    price: '₹5,000',
    period: '/monthly',
    features: [
      'On-page SEO optimization',
      'Monthly keyword tracking',
      'Competitor analysis',
      'Technical SEO audit',
    ],
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-yellow-50',
    popular: false,
  },
  {
    id: 3,
    icon: Share2,
    title: 'PR Services',
    description: 'Get featured in top publications and media outlets to enhance your brand credibility and online visibility.',
    price: '₹7,000',
    period: '/one-time',
    features: [
      'Press release creation',
      'Distribution to media outlets',
      'Guaranteed media placements',
      'Coverage report & links',
    ],
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-emerald-50',
    popular: false,
  },
];

const RepoManagement = () => {
  return (
    <section id="repo-management" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            {/* Reputation Management */}
            Repo Management
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Boost Your <span className="gradient-text">Online Presence</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing and reputation management services tailored for healthcare providers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  service.popular
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/25'
                    : 'bg-white shadow-lg shadow-gray-200/50'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 right-6">
                    <span className="flex items-center gap-1 px-3 py-1 bg-amber-400 text-gray-900 text-xs font-bold rounded-full shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    service.popular
                      ? 'bg-white/20'
                      : `bg-gradient-to-br ${service.color} bg-opacity-10`
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      service.popular ? 'text-white' : 'text-white'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl lg:text-2xl font-bold mb-3 ${
                    service.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    service.popular ? 'text-blue-50' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className={`text-3xl lg:text-4xl font-bold ${
                      service.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.price}
                  </span>
                  <span
                    className={`text-sm ${
                      service.popular ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {service.period}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <p
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      service.popular ? 'text-blue-100' : 'text-gray-900'
                    }`}
                  >
                    What&apos;s included
                  </p>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          service.popular
                            ? 'bg-white/20'
                            : 'bg-gradient-to-br ' + service.color
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            service.popular ? 'text-white' : 'text-white'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          service.popular ? 'text-blue-50' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://apps.mediwego.com/App/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                    service.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg'
                      : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:shadow-xl hover:shadow-gray-900/25'
                  }`}
                >
                  Get started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RepoManagement;
