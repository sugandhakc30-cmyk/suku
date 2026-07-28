import React from 'react';
import { ShoppingBag, ShieldCheck, Heart, ExternalLink, ArrowUpRight } from 'lucide-react';
import { ActivePage } from '../types';
import { MANDATORY_FOOTER_DISCLOSURE } from '../utils/affiliateUtils';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  activeAssociateTag: string;
  onOpenTagModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, activeAssociateTag, onOpenTagModal }) => {
  const scrollToTop = (page?: ActivePage) => {
    if (page) setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-300 pt-12 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MANDATORY HIGHLY VISIBLE AMAZON ASSOCIATE LEGAL DISCLOSURE BOX */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-200 text-sm leading-relaxed">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-amber-300 text-base flex items-center gap-2">
                Amazon Associates Program Legal Disclosure
              </h3>
              <p className="font-semibold text-white text-base">
                "{MANDATORY_FOOTER_DISCLOSURE}"
              </p>
              <p className="text-xs text-amber-200/80 pt-1">
                SUGANDHA TECH is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Product prices and availability are accurate as of the date/time indicated on Amazon.com and are subject to change.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">SUGANDHA TECH</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Transparent, independent product research and curated buying recommendations. All product links feature explicit affiliate labels (#ad) in strict compliance with FTC and Amazon Associate guidelines.
            </p>
          </div>

          {/* Col 2: Legal & Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal &amp; Policy Pages</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToTop('home')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Product Catalog &amp; Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('disclosure')} className="hover:text-amber-400 transition-colors cursor-pointer font-bold text-amber-400">
                  Affiliate Disclosure (#ad)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('terms')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('cookie')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Cookie Policy &amp; Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('privacy')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('about')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  About Us &amp; Authors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Affiliate Policy */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Amazon Affiliate Rules</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Dynamic Price Button:</strong> No hardcoded price quotes; live prices checked on Amazon.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Explicit Labels:</strong> #ad and (Paid Link) tags on all external outbound buttons.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Unique Content:</strong> Original reviews, hands-on testing, and pros &amp; cons.</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Associate Tag Settings */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Associate Tag Inspector</h4>
            <p className="text-xs text-slate-400">
              Current Active Affiliate Tag applied to all Amazon links on this portal:
            </p>
            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-amber-400 flex items-center justify-between">
              <span>tag={activeAssociateTag}</span>
              <button
                onClick={onOpenTagModal}
                className="text-white hover:text-amber-400 underline cursor-pointer text-[11px]"
              >
                Change
              </button>
            </div>
            <a
              href="https://affiliate-program.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors pt-1"
            >
              <span>Amazon Associates Central</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SUGANDHA TECH. All rights reserved. Built with React, TypeScript &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollToTop('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => scrollToTop('contact')} className="hover:text-slate-300 transition-colors">
              Contact
            </button>
            <span>•</span>
            <button onClick={() => scrollToTop()} className="flex items-center gap-1 text-amber-400 hover:underline">
              Back to Top <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
