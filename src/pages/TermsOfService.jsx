import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 animate-fade-in">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using the MediWeGo website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on MediWeGo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                <li>Attempt to decompile or reverse engineer any software contained on MediWeGo's website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on MediWeGo's website are provided on an 'as is' basis. MediWeGo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall MediWeGo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MediWeGo's website, even if MediWeGo or a MediWeGo authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Revisions and Errata</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on MediWeGo's website could include technical, typographical, or photographic errors. MediWeGo does not warrant that any of the materials on its website are accurate, complete, or current. MediWeGo may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                Any claim relating to MediWeGo's website shall be governed by the laws of India without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@mediwego.com</p>
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

export default TermsOfService;
