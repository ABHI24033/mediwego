import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';
import Features from './components/Features';
import Solutions from './components/Solutions';
import ProductPreview from './components/ProductPreview';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import RepoManagement from './components/RepoManagement';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import BookDemo from './pages/BookDemo';
import DoctorsClinics from './pages/solutions/DoctorsClinics';
import Hospitals from './pages/solutions/Hospitals';
import Pharma from './pages/solutions/Pharma';
import Patients from './pages/solutions/Patients';
import CookiePolicy from './pages/CookiePolicy';
import GDPRPolicy from './pages/GDPRPolicy';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import PublicOnlyRoute from './components/admin/PublicOnlyRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import Leads from './pages/admin/Leads';
import PopupBanners from './pages/admin/PopupBanners';
import AdminLogin from './pages/admin/AdminLogin';
import ABHA from './pages/ABHA';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PopupBannerModal from './components/PopupBannerModal';
import CookieConsent from './components/CookieConsent';
import { AuthProvider } from './context/AuthContext';

// Landing Page Component
const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main>
      <Hero />
      <HowToUse />
      <Features />
      <Solutions />
      <ProductPreview />
      <Benefits />
      <Testimonials />
      <Pricing />
      <RepoManagement />
      <FAQ />
      <ContactForm />
    </main>
    <Footer />
    <FloatingCTA />
  </div>
);

function AppContent() {
  const location = useLocation();
  const showPopup = !location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      {showPopup && <PopupBannerModal />}
      <CookieConsent />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/solutions/doctors-clinics" element={<DoctorsClinics />} />
          <Route path="/solutions/hospitals" element={<Hospitals />} />
          <Route path="/solutions/pharma" element={<Pharma />} />
          <Route path="/solutions/patients" element={<Patients />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr-policy" element={<GDPRPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/abha" element={<ABHA />} />
          <Route
            path="/admin/login"
            element={(
              <PublicOnlyRoute>
                <AdminLogin />
              </PublicOnlyRoute>
            )}
          />
          <Route
            path="/admin"
            element={(
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            )}
          >
            <Route index element={<AdminDashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="popup-banners" element={<PopupBanners />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </AuthProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
