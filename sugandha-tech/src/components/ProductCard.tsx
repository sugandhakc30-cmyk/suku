import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, ChevronRight, CheckCircle2, ShieldCheck, Tag, Edit3, Trash2 } from 'lucide-react';
import { Product } from '../types';
import { buildAffiliateUrl } from '../utils/affiliateUtils';

interface ProductCardProps {
  product: Product;
  activeAssociateTag: string;
  onOpenDetail: (product: Product) => void;
  onEditProduct?: (product: Product) => void;
  onDeleteProduct?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  activeAssociateTag,
  onOpenDetail,
  onEditProduct,
  onDeleteProduct
}) => {
  const affiliateUrl = buildAffiliateUrl(product.amazonUrl, product.asin, activeAssociateTag);

  return (
    <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden relative">
      
      {/* Top Image Section */}
     <Link
  to={`/product/${product.id}`}
  className="relative aspect-4/3 bg-slate-100 dark:bg-slate-800 overflow-hidden cursor-pointer block"
>
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge Overlay - Left Top */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide shadow-md border border-amber-500/30">
            {product.badge}
          </div>
        )}

        {/* Mandatory Explicit #ad Disclosure Tag - Right Top */}
        <div className="absolute top-3 right-3 bg-amber-500/90 text-slate-950 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-mono font-extrabold tracking-tight shadow-md flex items-center gap-1">
          <Tag className="w-3 h-3" />
          <span>#ad</span>
        </div>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-md">
            Read Hands-On Review <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          
          {/* Brand & Category & Manage Options */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {product.brand}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                {product.category}
              </span>

              {(onEditProduct || onDeleteProduct) && (
                <div className="flex items-center gap-1 ml-1" onClick={e => e.stopPropagation()}>
                  {onEditProduct && (
                    <button
                      onClick={() => onEditProduct(product)}
                      title="Edit Product"
                      className="p-1 rounded text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {onDeleteProduct && (
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${product.title}"?`)) {
                          onDeleteProduct(product.id);
                        }
                      }}
                      title="Delete Product"
                      className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 
         <button
  onClick={() => onOpenDetail(product)}
  <span>Full Specs &amp; Hands-On Review</span>
  <ChevronRight className="w-3.5 h-3.5" />
    </Link>
            className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug line-clamp-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
          >
            {product.title}
          </h3>

          {/* Star Rating & Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-300 dark:text-slate-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{product.rating}</span>
            <span className="text-xs text-slate-400">({product.reviewsCount.toLocaleString()} reviews)</span>
          </div>

          {/* Short Excerpt */}
          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {product.shortSummary}
          </p>

          {/* Key Feature Bullets */}
          <div className="pt-1 space-y-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Action Controls */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
          
          {/* Compliant CTA Button - NO Hardcoded Prices per Amazon Operating Agreement */}
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-between group/btn cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <span>Check Price on Amazon</span>
              <span className="text-[10px] bg-slate-950/20 text-slate-950 px-1.5 py-0.2 rounded font-mono font-extrabold">
                #ad
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>

          {/* Secondary Full Review Button */}
        <Link
  to={`/product/${product.id}`}
  className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1"
>
  <span>Full Specs &amp; Hands-On Review</span>
  <ChevronRight className="w-3.5 h-3.5" />
</Link>
            className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Full Specs &amp; Hands-On Review</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Paid Link Micro Disclosure */}
          <div className="text-[10px] text-slate-400 dark:text-slate-500 text-center flex items-center justify-center gap-1 pt-0.5">
            <ShieldCheck className="w-3 h-3 text-amber-500" />
            <span>(Paid Link - Commissions Earned)</span>
          </div>

        </div>

      </div>
    </div>
  );
};
