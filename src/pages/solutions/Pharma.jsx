import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  ArrowLeft, 
  Package, 
  Truck, 
  FileText, 
  Network, 
  BarChart3, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Search,
  ShoppingCart
} from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track stock levels, expiry dates, and batch numbers in real-time. Automated reorder alerts ensure you never run out of critical medicines.'
  },
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    description: 'Receive prescriptions directly from doctors through our integrated platform. Reduce errors and improve dispensing accuracy.'
  },
  {
    icon: Truck,
    title: 'Order Management',
    description: 'Streamlined order processing from receipt to delivery. Track order status and manage deliveries efficiently.'
  },
  {
    icon: Network,
    title: 'Provider Network',
    description: 'Connect with 1000+ doctors and clinics. Expand your customer base and increase prescription volume.'
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics',
    description: 'Comprehensive reports on sales trends, popular medicines, and revenue. Make data-driven decisions for your business.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Manage your pharmacy on the go. Receive notifications for new orders and low stock alerts on your mobile device.'
  }
];

const benefits = [
  'Reduce inventory waste by 25%',
  'Increase prescription orders by 40%',
  'Faster order processing and delivery',
  'Real-time stock visibility',
  'Better supplier relationships'
];

const steps = [
  { icon: Search, title: 'Receive Prescription', desc: 'Get digital prescriptions from connected doctors' },
  { icon: Package, title: 'Check Inventory', desc: 'Verify medicine availability instantly' },
  { icon: ShoppingCart, title: 'Dispense & Bill', desc: 'Quick dispensing with auto-generated invoices' },
  { icon: Truck, title: 'Deliver', desc: 'Track delivery status until it reaches patient' }
];

const Pharma = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Pill className="w-5 h-5" />
                <span className="font-medium">For Pharma</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Digital Pharmacy Management Platform
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Connect with healthcare providers, manage inventory efficiently, 
                and grow your pharmacy business with our comprehensive solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.mediwego.com/App/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors"
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
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop" 
                alt="Pharmacy"
                className="rounded-3xl shadow-2xl shadow-purple-900/30"
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
              <p className="text-4xl font-bold text-purple-600">500+</p>
              <p className="text-gray-600 mt-1">Pharmacies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">50K+</p>
              <p className="text-gray-600 mt-1">Monthly Orders</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">25%</p>
              <p className="text-gray-600 mt-1">Waste Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">40%</p>
              <p className="text-gray-600 mt-1">Order Increase</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process from prescription to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold mb-3">
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
              Pharmacy Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a modern, efficient pharmacy business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-purple-600" />
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
                Why Pharmacies Choose MediWeGo
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Trusted by pharmacies across India for efficient operations and business growth
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <blockquote className="text-xl italic mb-4">
                "Since joining MediWeGo, our prescription orders increased by 40%. The platform connects us with doctors we never had access to before."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">RK</span>
                </div>
                <div>
                  <p className="font-semibold">Ravi Kumar</p>
                  <p className="text-gray-400">City Pharmacy, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Pharmacy Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 500+ pharmacies already connected with healthcare providers on MediWeGo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.mediwego.com/App/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors"
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

export default Pharma;
