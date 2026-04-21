import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Stethoscope } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        // Detect active section based on scroll (only on home page)
        const sections = ['home', 'features', 'solutions', 'pricing', 'repo-management', 'about', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        // Set active section based on path
        const path = location.pathname.substring(1); // remove leading slash
        if (path.startsWith('solutions/')) {
          setActiveSection('solutions');
        } else {
          setActiveSection(path || 'home');
        }
      }
    };

    // Call once to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Features', href: '/#features', id: 'features' },
    { name: 'Solutions', href: '/#solutions', id: 'solutions' },
    { name: 'ABHA', href: '/abha', id: 'abha' },
    { name: 'Pricing', href: '/#pricing', id: 'pricing' },
    { name: 'Services', href: '/#repo-management', id: 'repo-management' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-200/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center my-2 gap-2">
            <img src="./logo.png" alt="MediWeGo" className="w-60 h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href.startsWith('/#') || link.href === '/' ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
                  )}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
                  )}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://apps.mediwego.com/App"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </a>
            <Link
              to="/book-demo"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-2'
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 transition-all duration-300 -translate-y-1/2 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1/2' : 'translate-y-1'
                  }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link, index) => (
            link.href.startsWith('/#') || link.href === '/' ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${activeSection === link.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${activeSection === link.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
            <a
              href="https://apps.mediwego.com/App"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 text-center text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              Log in
            </a>
            <Link
              to="/book-demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-3 text-center text-white font-semibold bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-lg"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
