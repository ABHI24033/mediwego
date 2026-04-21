import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex items-center gap-3 bg-gray-900 text-white px-4 py-3 rounded-2xl shadow-2xl">
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="hidden sm:block">
          <p className="text-sm font-medium">Ready to streamline your practice?</p>
          <p className="text-xs text-gray-400">Book a free demo today</p>
        </div>
        
        <a
          href="/book-demo"
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap"
        >
          <Calendar className="w-4 h-4" />
          Book Demo
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
