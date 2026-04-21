import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Users, 
  CreditCard, 
  Clock, 
  Shield, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Appointment Scheduling',
    description: 'Manage appointments effortlessly with automated reminders, online booking, and calendar sync. Reduce no-shows by 40% with SMS and WhatsApp reminders.'
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    description: 'Create, manage, and share prescriptions digitally. Print or send prescriptions via WhatsApp/email. Maintain prescription history for better patient care.'
  },
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Complete patient records with medical history, allergies, medications, and visit logs. Quick search and retrieval of patient information.'
  },
  {
    icon: CreditCard,
    title: 'Billing & Invoicing',
    description: 'Generate professional invoices, track payments, and manage outstanding balances. Integration with multiple payment gateways.'
  },
  {
    icon: Clock,
    title: 'Queue Management',
    description: 'Streamline patient flow with digital queue management. Patients get real-time updates on their wait time.'
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'HIPAA-compliant data storage with end-to-end encryption. Your patient data is secure and backed up daily.'
  }
];

const benefits = [
  'Reduce administrative work by 70%',
  'Increase patient satisfaction scores',
  'Save 3+ hours daily on paperwork',
  'Improve cash flow with faster billing',
  'Access from anywhere, any device'
];

const DoctorsClinics = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Stethoscope className="w-5 h-5" />
                <span className="font-medium">For Doctors & Clinics</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Streamline Your Practice with Digital Tools
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Join 1000+ healthcare providers who trust MediWeGo for efficient clinic management. 
                From appointments to prescriptions, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.mediwego.com/App/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link 
                  to="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Book Demo
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop" 
                alt="Doctor using MediWeGo"
                className="rounded-3xl shadow-2xl shadow-blue-900/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600 mt-1">Active Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">50K+</p>
              <p className="text-gray-600 mt-1">Daily Appointments</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">3hrs</p>
              <p className="text-gray-600 mt-1">Time Saved Daily</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">99.9%</p>
              <p className="text-gray-600 mt-1">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed specifically for doctors and clinic owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Doctors Choose MediWeGo
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Trusted by leading healthcare providers across India for seamless clinic management
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <blockquote className="text-xl italic mb-4">
                "MediWeGo has transformed how I run my clinic. I save 3 hours daily and my patients love the digital experience."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold">Dr. Rajesh Kumar</p>
                  <p className="text-gray-400">Cardiologist, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of doctors who have already modernized their clinics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.mediwego.com/App/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsClinics;
