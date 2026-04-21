import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GDPRPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Privacy Policy</h1>

          <p className="text-gray-600 mb-6">
            Last updated: April 10, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              MediWeGo ("we," "our," or "us") is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p className="text-gray-700 mb-4">
              This policy applies to all users of our website and services, including visitors from the European Economic Area (EEA).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Controller</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Company:</strong> Zeqon Technologies</p>
              <p className="text-gray-700"><strong>Address:</strong> #5, Neealdri Road, Electronic City Phase1, Bangalore, Karnataka, 560100</p>
              <p className="text-gray-700"><strong>Email:</strong> support@mediwego.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91 9067067617</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 mb-2">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Professional information (clinic name, specialization)</li>
                  <li>Demographic information (location, state, city)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                <p className="text-gray-700 mb-2">We automatically collect certain technical information:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-700 mb-4">We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Consent:</strong> When you explicitly agree to our data processing activities</li>
              <li><strong>Contract:</strong> To perform our contractual obligations to you</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and communicate with you</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process demo booking requests</li>
              <li>Send administrative information and updates</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze usage patterns to improve our website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Service providers who assist us in operating our website</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners for legitimate business purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only as long as necessary for the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
            <p className="text-gray-700 mb-4">
              Demo lead information is typically retained for 2 years after the last interaction, unless you request deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-700 mb-4">As a data subject in the EEA, you have the following rights:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Right to Access</h4>
                <p className="text-blue-800 text-sm">Request a copy of your personal data</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Right to Rectification</h4>
                <p className="text-blue-800 text-sm">Correct inaccurate or incomplete data</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Right to Erasure</h4>
                <p className="text-blue-800 text-sm">Request deletion of your data</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Right to Restriction</h4>
                <p className="text-blue-800 text-sm">Limit processing of your data</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Right to Portability</h4>
                <p className="text-blue-800 text-sm">Receive your data in a structured format</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Right to Object</h4>
                <p className="text-blue-800 text-sm">Object to processing based on legitimate interests</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-700 mb-4">
              These measures include encryption, secure servers, and regular security assessments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your data may be transferred to and processed in countries other than your own. We ensure that such transfers comply with GDPR requirements through appropriate safeguards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your GDPR rights, please contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> support@mediwego.com</p>
              <p className="text-gray-700"><strong>Address:</strong> #5, Neealdri Road, Electronic City Phase1, Bangalore, Karnataka, 560100</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91 9067067617</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPRPolicy;