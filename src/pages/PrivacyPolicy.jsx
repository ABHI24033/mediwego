import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const lastUpdated = "April 20, 2026";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 animate-fade-in">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At MediWeGo ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website mediwego.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This policy applies to information we collect on this Website, in email, text, and other electronic messages between you and this Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect several types of information from and about users of our Website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Personal Identity Information:</strong> Name, email address, telephone number, and clinic/hospital details.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and data about how you interact with our website.</li>
                <li><strong>Professional Information:</strong> Practice specialization, number of practitioners, and location details provided during demo bookings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us (such as scheduling a demo).</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer.</li>
                <li>To improve our Website and customer service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. We use industry-standard encryption technologies when transferring and receiving consumer data exchanged with our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>The right to access the information we have on you.</li>
                <li>The right to rectify any inaccurate or incomplete information.</li>
                <li>The right to request the deletion of your personal data.</li>
                <li>The right to object to our processing of your personal data.</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@mediwego.com</p>
                <p><strong>Address:</strong> #5, Neealdri Road, Electronic City Phase1, Bangalore, Karnataka, 560100</p>
                <p><strong>Phone:</strong> +91 9067067617</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
