import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircle, 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Bell, 
  Video, 
  CreditCard, 
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Heart,
  Pill
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Easy Appointment Booking',
    description: 'Book appointments with your preferred doctors in seconds. View real-time availability and get instant confirmation with SMS and email notifications.'
  },
  {
    icon: FileText,
    title: 'Digital Health Records',
    description: 'Access your complete medical history, prescriptions, lab reports, and discharge summaries anytime, anywhere. No more paper files to lose.'
  },
  {
    icon: Bell,
    title: 'Medicine Reminders',
    description: 'Never miss a dose with smart medicine reminders. Set custom schedules and get notified when it is time to take your medications.'
  },
  {
    icon: Video,
    title: 'Teleconsultation',
    description: 'Consult with doctors from the comfort of your home. Video calls, chat support, and follow-ups all in one secure platform.'
  },
  {
    icon: CreditCard,
    title: 'Online Payments',
    description: 'Pay for consultations, medicines, and lab tests securely online. Multiple payment options including UPI, cards, and wallets.'
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Your health data is encrypted and secure. You control who can access your records. HIPAA-compliant security standards.'
  }
];

const benefits = [
  'Book appointments 24/7 without calling',
  'Get prescriptions on your phone',
  'Never forget to take medicines',
  'Consult doctors from home',
  'Access health records anytime'
];

const steps = [
  { icon: UserCircle, title: 'Create Account', desc: 'Sign up with your mobile number' },
  { icon: Search, title: 'Find Doctor', desc: 'Search by specialty or location' },
  { icon: Calendar, title: 'Book Slot', desc: 'Choose convenient date & time' },
  { icon: Video, title: 'Consult', desc: 'Visit clinic or video consult' }
];

// Helper component for the search step
import { Search } from 'lucide-react';

const Patients = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <UserCircle className="w-5 h-5" />
                <span className="font-medium">For Patients</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Your Health, In Your Hands
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Book appointments, access prescriptions, manage your health records, 
                and consult doctors - all from your smartphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.mediwego.com/App/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors"
                >
                  Sign Up Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link 
                  to="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop" 
                alt="Patient using MediWeGo"
                className="rounded-3xl shadow-2xl shadow-green-900/30"
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
              <p className="text-4xl font-bold text-green-600">100K+</p>
              <p className="text-gray-600 mt-1">Active Patients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">1M+</p>
              <p className="text-gray-600 mt-1">Appointments</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">4.8</p>
              <p className="text-gray-600 mt-1">App Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">1000+</p>
              <p className="text-gray-600 mt-1">Connected Doctors</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your healthcare journey in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
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
              Everything You Need for Your Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features to help you manage your healthcare journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Health Management Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Manage Your Family Health
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Add family members to your account and manage their healthcare needs from a single dashboard. 
                Perfect for parents, children, and elderly care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Family Profiles</h4>
                    <p className="text-gray-600">Create and manage health profiles for your entire family</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Pill className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medicine Tracker</h4>
                    <p className="text-gray-600">Track medications for multiple family members</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Shared Records</h4>
                    <p className="text-gray-600">Access and share medical records securely</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">John Doe (You)</p>
                    <p className="text-sm text-gray-500">3 appointments</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-pink-600">SD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Doe (Wife)</p>
                    <p className="text-sm text-gray-500">1 appointment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-600">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jimmy Doe (Son)</p>
                    <p className="text-sm text-gray-500">2 appointments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Patients Love MediWeGo
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Join 100,000+ patients who have simplified their healthcare journey
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <blockquote className="text-xl italic mb-4">
                "MediWeGo has made managing my diabetes so much easier. I can book appointments, get prescriptions, and set medicine reminders all in one place."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">AP</span>
                </div>
                <div>
                  <p className="font-semibold">Anita Patel</p>
                  <p className="text-gray-400">Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Take Control of Your Health Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of patients who have simplified their healthcare journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.mediwego.com/App/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors"
            >
              Sign Up Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
