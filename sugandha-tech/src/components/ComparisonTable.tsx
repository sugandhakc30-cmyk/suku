import React, { useState } from 'react';
import { Product } from '../types';
import { ExternalLink, Star, Check, X, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { buildAffiliateUrl } from '../utils/affiliateUtils';

interface ComparisonTableProps {
  products: Product[];
  activeAssociateTag: string;
  onOpenDetail: (product: Product) => void;
  onNavigatePage: (page: any) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  activeAssociateTag,
  onOpenDetail,
  onNavigatePage
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-6">
      
      {/* Table Header & Category Selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Independent Specs &amp; Evaluation Matrix</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Side-by-Side Product Comparison
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Compare key ergonomic highlights, target audience fit, and editor rankings.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Grid / Table Container */}
      <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              <th className="p-4 w-1/4">Product &amp; Rating</th>
              <th className="p-4 w-1/4">Key Features</th>
              <th className="p-4 w-1/4">Who Should Buy</th>
              <th className="p-4 w-1/4 text-center">Action &amp; Amazon Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
            {filteredProducts.map(product => {
              const buyUrl = buildAffiliateUrl(product.amazonUrl, product.asin, activeAssociateTag);

              return (
                <tr key={product.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  
                  {/* Product Info */}
                  <td className="p-4 align-top space-y-3">
                    <div className="flex items-start gap-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-cover rounded-xl border border-slate-200 dark:border-slate-700 shrink-0"
                      />
                      <div className="space-y-1">
                        {product.badge && (
                          <span className="inline-block text-[10px] font-extrabold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                            {product.badge}
                          </span>
                        )}
                        <h3 className="font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400 text-[11px] font-normal">({product.reviewsCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenDetail(product)}
                      className="text-amber-600 dark:text-amber-400 hover:underline font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Full Hands-On Review</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>

                  {/* Highlights */}
                  <td className="p-4 align-top space-y-2 text-slate-600 dark:text-slate-300">
                    <ul className="space-y-1.5 list-disc pl-4 text-[11px]">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="line-clamp-2">{feat}</li>
                      ))}
                    </ul>
                  </td>

                  {/* Who Should Buy */}
                  <td className="p-4 align-top space-y-2">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 text-[11px] space-y-1">
                      <span className="font-bold block text-emerald-700 dark:text-emerald-400">Best Suited For:</span>
                      <ul className="space-y-1">
                        {product.whoShouldBuy.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>

                  {/* Action Button & Affiliate Note */}
                  <td className="p-4 align-top text-center space-y-2">
                    <a
                      href={buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-950 font-extrabold text-xs shadow-md shadow-amber-500/20 inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Check Price on Amazon</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <div className="space-y-1 text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                      <p>This is an affiliate link (#ad). We may earn a commission at no extra cost to you.</p>
                      <button
                        onClick={() => onNavigatePage('disclosure')}
                        className="text-amber-600 dark:text-amber-400 hover:underline font-semibold cursor-pointer"
                      >
                        Read Disclosure
                      </button>
                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};
