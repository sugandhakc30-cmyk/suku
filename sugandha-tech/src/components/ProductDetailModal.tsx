import React, { useState } from 'react';
import { X, Star, ExternalLink, ShieldCheck, CheckCircle2, XCircle, Tag, Copy, Check, Share2, Info, UserCheck, Calendar, ArrowRight, User } from 'lucide-react';
import { Product } from '../types';
import { buildAffiliateUrl, MANDATORY_FOOTER_DISCLOSURE } from '../utils/affiliateUtils';

interface ProductDetailModalProps {
  product: Product | null;
  activeAssociateTag: string;
  onClose: () => void;
  onNavigatePage?: (page: any) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, activeAssociateTag, onClose, onNavigatePage }) => {
  if (!product) return null;

  const [activeImg, setActiveImg] = useState<string>(product.image);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const affiliateUrl = buildAffiliateUrl(product.amazonUrl, product.asin, activeAssociateTag);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(affiliateUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const author = product.author || {
    name: 'Sugandha KC',
    role: 'Chief Hardware & Ergonomic Reviewer',
    experience: '8+ years testing computer peripherals & workstation tech',
    bio: 'Sugandha evaluates input peripherals and workstation hardware following strict hands-on testing guidelines.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5 rounded border border-amber-500/20">
              #ad (Affiliate Link)
            </span>
            <span>ASIN: <strong className="text-slate-800 dark:text-slate-200">{product.asin}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy Affiliate Link"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs font-medium flex items-center gap-1.5 cursor-pointer"
            >
              {copiedUrl ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedUrl ? 'Copied Link!' : 'Share Link'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Top Gallery & Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gallery Column */}
            <div className="space-y-4">
              <div className="aspect-4/3 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-800">
                <img
                  src={activeImg}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(img)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        activeImg === img
                          ? 'border-amber-500 scale-105 shadow-md'
                          : 'border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Affiliate Summary Column */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {product.brand}
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    {product.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                  {product.title}
                </h2>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewsCount.toLocaleString()} Amazon customer reviews)</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {product.shortSummary}
                </p>

                {/* FTC Disclosure Warning */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold">
                      <ShieldCheck className="w-4 h-4 text-amber-500" />
                      <span>Affiliate Link Disclosure (#ad)</span>
                    </div>
                    {onNavigatePage && (
                      <button
                        onClick={() => {
                          onClose();
                          onNavigatePage('disclosure');
                        }}
                        className="text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Full Policy</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-amber-800 dark:text-amber-200/90">
                    This is an affiliate link. We may earn a commission if you make a purchase at zero extra cost to you.
                  </p>
                </div>

              </div>

              {/* Main Primary CTA Button */}
              <div className="pt-4 space-y-2">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span>Check Price on Amazon</span>
                    <span className="bg-slate-950/20 text-slate-950 text-xs px-2 py-0.5 rounded font-mono font-black">
                      #ad
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[11px] text-slate-400 text-center font-mono">
                  Affiliate Tag: <strong className="text-amber-500">{activeAssociateTag}</strong> • Live availability on Amazon
                </p>
              </div>

            </div>

          </div>

          {/* Author Badge Section */}
          <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={author.avatar}
                  alt={author.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Reviewed by {author.name}</h4>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[10px] border border-amber-500/20">
                      Verified Tester
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{author.role} • {author.experience}</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>Updated: {product.updatedAt}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic border-t border-slate-200 dark:border-slate-700 pt-2">
              "{author.bio}"
            </p>
          </div>

          {/* Detailed Description */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Original Editorial Evaluation</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Target Audience: Who Should Buy / Who Should Avoid */}
          {(product.whoShouldBuy || product.whoShouldAvoid) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-500" /> Who Should Buy It
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {(product.whoShouldBuy || ['Power users wanting top-tier performance']).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <h4 className="font-bold text-sm text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-amber-500" /> Who Should Avoid It
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {(product.whoShouldAvoid || ['Users looking for ultra-budget entry options']).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Pros &amp; Standout Strengths
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {product.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-500" /> Cons &amp; Considerations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {product.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Technical Specifications</h3>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-xs">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between p-3 ${
                      idx % 2 === 0
                        ? 'bg-slate-50 dark:bg-slate-800/50'
                        : 'bg-white dark:bg-slate-900'
                    }`}
                  >
                    <span className="font-semibold text-slate-600 dark:text-slate-400">{key}</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Editor Verdict */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 space-y-2">
            <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" /> Hands-On Tester Verdict
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "{product.editorVerdict}"
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {MANDATORY_FOOTER_DISCLOSURE}
          </p>

          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <span>View Latest Price on Amazon</span>
            <span className="font-mono text-[10px] bg-slate-950/20 px-1.5 py-0.5 rounded">#ad</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};

