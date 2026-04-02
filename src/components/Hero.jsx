import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    'Free 14-day trial',
    'No credit card required',
    '24/7 Support',
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl" />

      <div className="relative section-padding py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up px-4 sm:px-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md shadow-gray-200/50 border border-gray-100">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  Trusted by 1000+ Healthcare Providers
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Digitize Your Clinic with{' '}
                <span className="gradient-text">Smart Healthcare</span> Software
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                Manage appointments, prescriptions, and billing in one platform. 
                Streamline your practice and focus on what matters most — your patients.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#demo" className="btn-primary text-lg px-8 py-4">
                  Book Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#trial" className="btn-secondary text-lg px-8 py-4">
                  Start Free Trial
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative lg:h-[600px] animate-fade-in">
              {/* Main Dashboard Image */}
              <div className="relative z-10 glass-card p-4 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                  alt="MediWeGo Dashboard"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                
                {/* Overlay Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-600">Patient Satisfaction</p>
                    </div>
                  </div>
                </div>

                {/* Overlay Appointments Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">See it in action</p>
                      <p className="text-xs text-gray-600">2 min video</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-20 w-40 h-40 bg-gradient-to-br from-primary-400 to-teal-400 rounded-full blur-2xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-primary-400 rounded-full blur-2xl opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Logos */}
      <div className="relative section-padding pb-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by leading healthcare providers across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Manipal Hospitals', 'Narayana Health'].map((hospital) => (
              <div key={hospital} className="text-lg font-semibold text-gray-400">
                {hospital}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
