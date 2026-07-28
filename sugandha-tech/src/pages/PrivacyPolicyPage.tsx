import React from 'react';
import { Shield, Lock, FileText, ArrowLeft, Cookie, Info } from 'lucide-react';
import { MANDATORY_FOOTER_DISCLOSURE } from '../utils/affiliateUtils';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackToHome }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Product Catalog
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Privacy Policy &amp; Cookie Notice
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Last Updated: July 28, 2026 • Amazon Associate &amp; FTC Data Disclosures
            </p>
          </div>
        </div>
      </div>

      {/* Main Privacy Body */}
      <div className="space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        
        {/* Intro */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-500" />
            <span>1. Commitment to User Privacy</span>
          </h2>
          <p>
            At SUGANDHA TECH, accessible from our primary website domain, visitor privacy is one of our top priorities. This Privacy Policy document contains types of information that is collected and recorded by SUGANDHA TECH and how we use it, specifically regarding our participation in the Amazon Services LLC Associates Program.
          </p>
        </section>

        {/* Amazon Associate Cookie Usage */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-amber-500" />
            <span>2. Cookies &amp; Amazon Affiliate Tracking</span>
          </h2>
          <p>
            SUGANDHA TECH uses standard web browser cookies. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
          </p>
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2 text-amber-950 dark:text-amber-200">
            <h3 className="font-bold text-amber-800 dark:text-amber-300">
              Amazon Associates Program Cookie Policy:
            </h3>
            <p>
              When you click an outbound link on SUGANDHA TECH marked with <strong>#ad</strong> or <strong>(Paid Link)</strong> to Amazon.com, Amazon places an affiliate tracking cookie on your browser. This cookie allows Amazon to assign referral credit if you make a purchase within the standard Amazon cookie window (typically 24 hours).
            </p>
            <p className="italic">
              "{MANDATORY_FOOTER_DISCLOSURE}"
            </p>
          </div>
        </section>

        {/* Log Files & Analytics */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <span>3. Technical Log Files &amp; Local Storage</span>
          </h2>
          <p>
            SUGANDHA TECH follows standard procedure of using log files and browser LocalStorage. The information stored locally includes dark/light theme preferences and customized Amazon Associate tracking tags for testing purposes. We do NOT collect personally identifiable banking details, social security numbers, or payment credentials.
          </p>
        </section>

        {/* Third Party External Links */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-amber-500" />
            <span>4. Third-Party Websites &amp; Outbound Links</span>
          </h2>
          <p>
            Our website contains links to external e-commerce platforms (predominantly Amazon.com). Note that SUGANDHA TECH has no control over the privacy policies or practices of third-party shopping portals once you leave our domain. We advise you to consult the respective Privacy Policies of Amazon.com for more detailed information.
          </p>
        </section>

      </div>

    </div>
  );
};
