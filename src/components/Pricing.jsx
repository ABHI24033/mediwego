import React, { useState } from 'react';
import { Check, Sparkles, Zap, Crown, ChevronDown, ChevronUp } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for individual practitioners',
    price: 999,
    period: '/month',
    icon: Zap,
    color: 'bg-blue-500',
    features: [
      'Up to 500 patients',
      'Appointment scheduling',
      'Digital prescriptions',
      'Basic reporting',
      'Email support',
      'Mobile app access',
    ],
    notIncluded: [
      'Advanced analytics',
      'Multi-clinic support',
      'API access',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Best for growing clinics',
    price: 2499,
    period: '/month',
    icon: Sparkles,
    color: 'bg-primary-600',
    features: [
      'Unlimited patients',
      'All Basic features',
      'Advanced analytics',
      'SMS reminders',
      'Custom branding',
      'Priority email & chat support',
      'Staff management (up to 10)',
    ],
    notIncluded: [
      'Multi-clinic support',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For hospitals & chains',
    price: 'Custom',
    period: '',
    icon: Crown,
    color: 'bg-teal-500',
    features: [
      'Everything in Pro',
      'Unlimited clinics',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment option',
      '24/7 phone support',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="section-title mb-4">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Choose the plan that fits your practice. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Billing Toggle */}
          {/* <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-gray-200 transition-colors"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                  isYearly ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1.5 text-xs text-green-600 font-semibold">Save 20%</span>
            </span>
          </div> */}

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const price = isYearly && typeof plan.price === 'number'
                ? Math.round(plan.price * 0.8)
                : plan.price;

              return (
                <div
                  key={plan.id}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular
                      ? 'bg-white shadow-xl shadow-primary-600/10 border-2 border-primary-600 scale-105 z-10'
                      : 'bg-white border border-gray-200 shadow-lg shadow-gray-200/50'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl ${plan.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      {typeof price === 'number' && <span className="text-2xl text-gray-600">₹</span>}
                      <span className="text-4xl font-bold text-gray-900">{price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    {typeof price === 'number' && isYearly && (
                      <p className="text-sm text-green-600 mt-1">Billed annually (Save 20%)</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={plan.cta === 'Contact Sales' ? '#contact' : 'https://apps.mediwego.com/App/register'}
                    target={plan.cta === 'Contact Sales' ? '_self' : '_blank'}
                    rel={plan.cta === 'Contact Sales' ? '' : 'noopener noreferrer'}
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Features List */}
                  <div className="mt-8 space-y-4">
                    <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Features included
                    </p>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.length > 0 && (
                      <>
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Not included
                          </p>
                          {plan.notIncluded.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 opacity-50">
                              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gray-400 text-xs">—</span>
                              </div>
                              <span className="text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enterprise Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need a custom solution?{' '}
              <a href="#contact" className="text-primary-600 font-semibold hover:underline">
                Contact our sales team
              </a>{' '}
              for a tailored plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
