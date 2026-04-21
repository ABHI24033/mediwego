import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowLeft, 
  Users, 
  Activity, 
  Database, 
  BarChart3, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  BedDouble,
  FlaskConical
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-Department Management',
    description: 'Manage all hospital departments from a single dashboard. Assign roles and permissions to department heads and staff members.'
  },
  {
    icon: Database,
    title: 'EMR Integration',
    description: 'Seamless integration with existing EMR systems. Centralized patient data accessible across all departments in real-time.'
  },
  {
    icon: Activity,
    title: 'Patient Flow Management',
    description: 'Track patient journey from admission to discharge. Monitor bed occupancy, OT schedules, and ICU availability.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive dashboards with KPIs for occupancy rates, revenue, patient satisfaction, and departmental performance.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Role-based access control, audit logs, and compliance with healthcare data protection regulations including HIPAA and NDHM.'
  },
  {
    icon: Clock,
    title: '24/7 Operations Support',
    description: 'Round-the-clock system reliability with dedicated enterprise support and SLA guarantees.'
  }
];

const modules = [
  { icon: Stethoscope, name: 'OPD Management', desc: 'Outpatient department scheduling and records' },
  { icon: BedDouble, name: 'IPD Management', desc: 'Inpatient admission, discharge, and billing' },
  { icon: FlaskConical, name: 'Lab Integration', desc: 'Lab test orders and results management' },
  { icon: Activity, name: 'Radiology', desc: 'Imaging orders and PACS integration' },
  { icon: Users, name: 'Pharmacy', desc: 'Inventory and prescription management' },
  { icon: Shield, name: 'Insurance', desc: 'TPA and insurance claim processing' }
];

const benefits = [
  'Reduce operational costs by 30%',
  'Improve bed turnover ratio',
  'Minimize billing errors and revenue leakage',
  'Enhance patient satisfaction scores',
  'Streamline inter-department coordination'
];

const Hospitals = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">For Hospitals</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Enterprise-Grade Hospital Management System
              </h1>
              <p className="text-xl text-teal-100 mb-8">
                Comprehensive solution for multi-specialty hospitals. 
                Streamline operations, enhance patient care, and maximize revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.mediwego.com/App/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-colors"
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
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop" 
                alt="Hospital"
                className="rounded-3xl shadow-2xl shadow-teal-900/30"
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
              <p className="text-4xl font-bold text-teal-600">50+</p>
              <p className="text-gray-600 mt-1">Hospitals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">10K+</p>
              <p className="text-gray-600 mt-1">Daily Patients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">30%</p>
              <p className="text-gray-600 mt-1">Cost Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-600">99.9%</p>
              <p className="text-gray-600 mt-1">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Integrated Hospital Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of modules covering every aspect of hospital operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm">{module.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale with advanced capabilities for large healthcare institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-teal-600" />
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
                Why Hospitals Choose MediWeGo
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Trusted by leading hospitals across India for mission-critical operations
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <blockquote className="text-xl italic mb-4">
                "MediWeGo transformed our hospital operations. The integrated system improved efficiency across all departments."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">AM</span>
                </div>
                <div>
                  <p className="font-semibold">Admin Manager</p>
                  <p className="text-gray-400">City Hospital, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Hospital?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join leading hospitals already using MediWeGo for better patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.mediwego.com/App/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-colors"
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

export default Hospitals;
