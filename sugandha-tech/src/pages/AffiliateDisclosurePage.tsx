import React from 'react';
import { ShieldCheck, Info, DollarSign, Award, ExternalLink, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

interface AffiliateDisclosurePageProps {
  onBackToHome: () => void;
  activeAssociateTag: string;
}

export const AffiliateDisclosurePage: React.FC<AffiliateDisclosurePageProps> = ({
  onBackToHome,
  activeAssociateTag
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8 px-4 sm:px-6">
      
      {/* Top Back Nav */}
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Hero Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>FTC &amp; Amazon Associates Policy Transparency</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Affiliate Link &amp; Editorial Disclosure
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          At SUGANDHA TECH, trust and editorial integrity are our foundational principles. This page clearly outlines how we earn revenue, how our affiliate partnerships operate, and why our product evaluations remain 100% independent.
        </p>

        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">Official Amazon Associate Statement:</span>
            <p>
              "SUGANDHA TECH is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."
            </p>

          </div>
        </div>
      </div>

      {/* Main Disclosure Grid */}
      <div className="space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        
        {/* Section 1: What are Affiliate Links */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
              <ExternalLink className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. What Are Affiliate Links?
            </h2>
          </div>
          <p>
            An affiliate link is a specific URL that contains a tracking identifier code (for example, associate tag <code className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 font-mono text-xs">{activeAssociateTag}</code>). When you click an outbound link on our website to a partner retail merchant like Amazon, your web browser briefly passes this identifier tag so the merchant knows you originated from SUGANDHA TECH.
          </p>
        </section>

        {/* Section 2: Zero Extra Cost to You */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
              <DollarSign className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Zero Extra Cost to You
            </h2>
          </div>
          <p>
            Clicking an affiliate link or making a purchase through our site <strong className="text-slate-900 dark:text-white font-semibold">NEVER increases the price you pay</strong>. The price on Amazon is identical whether you visit directly or navigate through our review links.
          </p>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>You pay the exact same price, while helping keep SUGANDHA TECH free and independent.</span>
          </div>
        </section>

        {/* Section 3: Independent Review Integrity */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Independent Editorial Process
            </h2>
          </div>
          <p>
            Our product reviews and buying recommendations are strictly based on objective hands-on testing, technical specifications, real-world ergonomics, and verified buyer performance feedback.
          </p>
          <ul className="space-y-2 text-xs list-disc pl-5">
            <li>We do NOT accept paid placements or sponsored positive reviews from manufacturers.</li>
            <li>No brand or vendor can pay to influence our rating scores or editor verdicts.</li>
            <li>If a product is flawed or overpriced, our review explicitly lists those drawbacks in the "Cons" and "Who Should Avoid It" sections.</li>
          </ul>
        </section>

        {/* Section 4: Dynamic Price Integrity */}
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Why We Use "Check Price on Amazon" Buttons
            </h2>
          </div>
          <p>
            Amazon prices and stock availability change constantly throughout the day. To ensure you never see outdated or misleading static prices, we do not print static dollar amounts on our review cards. Instead, clicking buttons like <strong className="text-amber-500">"Check Price on Amazon"</strong> directs you directly to Amazon's live official detail page.
          </p>
        </section>

        {/* Section 5: FTC Compliance */}
        <section className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Federal Trade Commission (FTC) 16 CFR § 255
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            In compliance with FTC guidelines concerning the use of endorsements and testimonials in advertising, please assume that any link pointing to Amazon or third-party retailer sites on SUGANDHA TECH is an affiliate link (#ad).
          </p>
        </section>

      </div>

      {/* Footer Back Button */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
        <button
          onClick={onBackToHome}
          className="px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-600 transition-colors cursor-pointer"
        >
          Return to SUGANDHA TECH Product Catalog
        </button>
      </div>

    </div>
  );
};
