import React from 'react';
import { ShieldCheck, ArrowLeft, FileText } from 'lucide-react';

interface TermsPageProps {
  onBackToHome: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBackToHome }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8 px-4 sm:px-6">
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/30 text-slate-700 dark:text-slate-300 text-xs font-bold">
          <FileText className="w-4 h-4" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-slate-500">Effective Date: July 28, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using SUGANDHA TECH, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, SUGANDHA TECH and its licensors own the intellectual property rights for all original reviews, graphics, logos, and custom code on this website. All trademarked product names (e.g., Logitech, Sony, Anker, Amazon) remain the property of their respective owners.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Third-Party Links &amp; Affiliate Disclosure</h2>
          <p>
            Our website contains outbound links to third-party merchant sites (including Amazon.com). We are a participant in the Amazon Services LLC Associates Program. We do not control merchant fulfillment, pricing, warranties, or shipping.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Limitation of Liability</h2>
          <p>
            SUGANDHA TECH provides hardware reviews and comparisons on an "as is" and "as available" basis. In no event shall SUGANDHA TECH be liable for any indirect or consequential damages arising out of your use of recommended products.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with applicable laws without regard to conflict of law provisions.
          </p>
        </section>
      </div>
    </div>
  );
};
