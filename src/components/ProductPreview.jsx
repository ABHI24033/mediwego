import React, { useState } from 'react';
import { LayoutDashboard, Calendar, FileText, CreditCard, Check, ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

const screenshots = {
  dashboard: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=700&fit=crop',
  appointments: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=700&fit=crop',
  prescriptions: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=700&fit=crop',
  billing: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=700&fit=crop',
};

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Product Preview
            </span>
            <h2 className="section-title mb-4">
              Powerful yet <span className="gradient-text">simple to use</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Experience an intuitive interface designed for healthcare professionals. No training required.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Screenshot Display */}
          <div className="relative">
            {/* Browser Frame */}
            <div className="bg-gray-900 rounded-t-2xl p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-800 rounded-lg px-4 py-1.5 text-sm text-gray-400 text-center">
                  app.mediwego.com
                </div>
              </div>
            </div>
            
            {/* Screenshot */}
            <div className="relative rounded-b-2xl overflow-hidden shadow-2xl shadow-gray-300/50 border border-gray-200">
              <img
                src={screenshots[activeTab]}
                alt={`${activeTab} screenshot`}
                className="w-full h-auto transition-opacity duration-300"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-6 py-3 border border-gray-100 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-900">1,000+</span>
                <span className="text-gray-600"> doctors trust MediWeGo</span>
              </div>
            </div>
          </div>

          {/* Feature Points */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              'Works on all devices',
              'No installation needed',
              'Automatic updates',
              '99.9% uptime guarantee',
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
