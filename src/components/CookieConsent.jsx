import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Settings, Check, Shield, BarChart3, Megaphone } from 'lucide-react';

// Cookie utility functions
const setCookie = (name, value, days = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
};

const CONSENT_COOKIE = 'mediwego_consent';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Check for existing consent on mount
  useEffect(() => {
    const existingConsent = getCookie(CONSENT_COOKIE);
    if (!existingConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(existingConsent);
        setPreferences(parsed);
      } catch (e) {
        // Invalid cookie, show banner
        setIsVisible(true);
      }
    }
  }, []);

  const saveConsent = (prefs) => {
    setCookie(CONSENT_COOKIE, JSON.stringify(prefs), 365);
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
    setPreferences(allAccepted);
    setIsVisible(false);
    setShowManageModal(false);
  };

  const rejectAllCookies = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyNecessary);
    setPreferences(onlyNecessary);
    setIsVisible(false);
    setShowManageModal(false);
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowManageModal(false);
  };

  const updatePreference = (category, value) => {
    if (category === 'necessary') return;
    setPreferences((prev) => ({ ...prev, [category]: value }));
  };

  const openManageModal = () => {
    setShowManageModal(true);
  };

  const closeManageModal = () => {
    setShowManageModal(false);
  };

  // Listen for global event to open cookie settings
  useEffect(() => {
    const handleOpenSettings = () => setShowManageModal(true);
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  // Toggle Switch Component
  const ToggleSwitch = ({ enabled, onChange, disabled = false }) => (
    <button
      type="button"
      onClick={() => !disabled && onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
      disabled={disabled}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  // Cookie Category Card
  const CategoryCard = ({ icon: Icon, title, description, enabled, onChange, disabled, required }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
        required ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
      }`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          {required && (
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Required</span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <ToggleSwitch enabled={enabled} onChange={onChange} disabled={disabled} />
      </div>
    </div>
  );

  // Manage Preferences Modal
  if (showManageModal) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Cookie Preferences</h3>
                <p className="text-sm text-gray-500">Customize your cookie settings</p>
              </div>
            </div>
            <button onClick={closeManageModal} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
            <CategoryCard
              icon={Shield}
              title="Necessary"
              description="Essential cookies required for the website to function properly. Cannot be disabled."
              enabled={true}
              onChange={() => {}}
              disabled={true}
              required={true}
            />
            <CategoryCard
              icon={BarChart3}
              title="Analytics"
              description="Help us understand how visitors interact with our website."
              enabled={preferences.analytics}
              onChange={(value) => updatePreference('analytics', value)}
            />
            <CategoryCard
              icon={Megaphone}
              title="Marketing"
              description="Used to deliver personalized advertisements and track their performance."
              enabled={preferences.marketing}
              onChange={(value) => updatePreference('marketing', value)}
            />
          </div>

          <div className="flex items-center justify-between gap-3 p-6 border-t border-gray-100 bg-gray-50">
            <button
              onClick={saveCustomPreferences}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
            >
              <Check className="w-4 h-4" />
              Save Preferences
            </button>
            <button
              onClick={acceptAllCookies}
              className="flex-1 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 flex-1">
              <div className="flex-shrink-0">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We use cookies
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>

                <div className="flex flex-wrap gap-2 text-sm">
                  <Link
                    to="/cookie-policy"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Cookie Policy
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link
                    to="/privacy-policy"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={openManageModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Customize
              </button>
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Reject
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Expose function to open cookie settings from anywhere
export const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
};

export default CookieConsent;