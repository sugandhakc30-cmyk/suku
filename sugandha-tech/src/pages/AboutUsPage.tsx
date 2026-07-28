import React from 'react';
import { HelpCircle, ShieldCheck, Award, Users, CheckCircle2, HeartHandshake, ArrowLeft } from 'lucide-react';
import { MANDATORY_FOOTER_DISCLOSURE } from '../utils/affiliateUtils';

interface AboutUsPageProps {
  onBackToHome: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBackToHome }) => {
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
            <HelpCircle className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              About SUGANDHA TECH &amp; Review Standards
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Independent technology research, hands-on testing, and 100% compliant affiliate disclosures
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        
        {/* Mission Statement */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Our Mission</span>
          </h2>
          <p>
            SUGANDHA TECH was founded with a single core philosophy: to provide clear, actionable, and unbiased product testing for tech enthusiasts, remote professionals, and smart home adopters. In a digital landscape flooded with automated scraped text and deceptive affiliate traps, we prioritize depth, visual accuracy, and total legal transparency.
          </p>
        </section>

        {/* 4 Pillars of Review Integrity */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Our 4 Editorial Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span>1. Original Content Only</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We never copy-paste manufacturer press releases or scraped catalog descriptions. Every product feature, pro, con, and spec is written in unique original text.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>2. No Hardcoded Prices</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Amazon prices, lightning deals, and stock quantities shift constantly. To prevent misleading price tags, all calls to action dynamically redirect to live Amazon detail pages.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
                <HeartHandshake className="w-5 h-5 text-amber-500" />
                <span>3. Explicit Paid Link Disclosures</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Every external Amazon button explicitly presents a clear <strong>#ad</strong> or <strong>(Paid Link)</strong> disclosure next to the button as mandated by the FTC.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
                <Users className="w-5 h-5 text-amber-500" />
                <span>4. Reader Supported</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We do not accept paid brand placement to inflate product rankings. We earn small commissions when readers choose to purchase through our associate links.
              </p>
            </div>
          </div>
        </section>

        {/* Amazon Associate Declaration Callout */}
        <section className="p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-950 dark:text-amber-200 space-y-3">
          <div className="flex items-center gap-2 font-bold text-base text-amber-800 dark:text-amber-300">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <span>Amazon Associates Mandatory Declaration</span>
          </div>
          <p className="font-semibold text-base">
            "{MANDATORY_FOOTER_DISCLOSURE}"
          </p>
          <p className="text-xs text-amber-800/90 dark:text-amber-200/90">
            SUGANDHA TECH participates in the Amazon Services LLC Associates Program. When you click outbound product buttons on our portal and complete a purchase on Amazon.com, SUGANDHA TECH receives a referral commission at zero additional cost to you.
          </p>
        </section>

      </div>

    </div>
  );
};
