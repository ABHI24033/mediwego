import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import ProductPreview from './components/ProductPreview';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <ProductPreview />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
