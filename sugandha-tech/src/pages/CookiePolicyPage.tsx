import React from 'react';
import { ArrowLeft, Cookie, ShieldAlert } from 'lucide-react';

interface CookiePolicyPageProps {
  onBackToHome: () => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onBackToHome }) => {
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold">
          <Cookie className="w-4 h-4" />
          <span>Cookies &amp; Tracking Policies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Cookie Policy &amp; Disclaimer
        </h1>
        <p className="text-xs text-slate-500">Effective Date: July 28, 2026</p>
      </div>

      <div className="space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-amber-500" />
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you browse websites. They are used to make websites work efficiently and provide tracking information to site owners or affiliate networks.
          </p>
        </section>

        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. How We &amp; Amazon Use Cookies
          </h2>
          <p>
            When you click an Amazon link on SUGANDHA TECH, Amazon places a 24-hour cookie on your device. This cookie allows Amazon to recognize that your visit originated from our site so that we receive a referral commission if you complete a qualifying purchase within 24 hours.
          </p>
          <ul className="list-disc pl-5 text-xs space-y-1 text-slate-600 dark:text-slate-400">
            <li>Essential Session Cookies: To remember your theme preference (Light/Dark mode) and associate tag settings.</li>
            <li>Affiliate Tracking Cookies: Placed by Amazon upon clicking outbound product buttons.</li>
          </ul>
        </section>

        <section className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 space-y-3">
          <h2 className="text-xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-500" />
            3. Product &amp; Price Disclaimer
          </h2>
          <p className="text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
            Product specifications, features, and availability are subject to change by manufacturers and merchants at any time. SUGANDHA TECH does not guarantee price accuracy on third-party sites. Always verify current prices and specifications directly on Amazon prior to completing your purchase.
          </p>
        </section>
      </div>
    </div>
  );
};
