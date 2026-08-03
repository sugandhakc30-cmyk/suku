import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  TrendingUp, 
  Search, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  PackageOpen, 
  Layers, 
  Headphones, 
  Home, 
  Laptop, 
  Compass, 
  Gamepad2, 
  SlidersHorizontal,
  Tag
} from 'lucide-react';
import { Product, Category, FilterState } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CategoryBar } from '../components/CategoryBar';
import { ComparisonTable } from '../components/ComparisonTable';

interface HomePageProps {
  products: Product[];
  categories: Category[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  activeAssociateTag: string;
  onOpenDetail: (product: Product) => void;
  onNavigatePage: (page: any) => void;
  onEditProduct?: (product: Product) => void;
  onDeleteProduct?: (productId: string) => void;
}

const CATEGORY_CARDS = [
  {
    name: 'Audio & Music',
    icon: <Headphones className="w-6 h-6 text-amber-500" />,
    desc: 'Noise-canceling headphones, wireless earbuds, and spatial audio speakers.',
    color: 'from-amber-500/10 to-orange-500/5 border-amber-500/20'
  },
  {
    name: 'Productivity & Tech',
    icon: <Laptop className="w-6 h-6 text-blue-500" />,
    desc: 'Ergonomic mice, mechanical keyboards, fast power banks, and monitors.',
    color: 'from-blue-500/10 to-indigo-500/5 border-blue-500/20'
  },
  {
    name: 'Smart Home',
    icon: <Home className="w-6 h-6 text-emerald-500" />,
    desc: 'Robotic vacuums, ambient lighting, smart plugs, and security systems.',
    color: 'from-emerald-500/10 to-teal-500/5 border-emerald-500/20'
  },
  {
    name: 'Outdoor & Travel',
    icon: <Compass className="w-6 h-6 text-purple-500" />,
    desc: 'Rugged GPS watches, portable solar chargers, and durable travel gear.',
    color: 'from-purple-500/10 to-pink-500/5 border-purple-500/20'
  },
  {
    name: 'Gaming & Entertainment',
    icon: <Gamepad2 className="w-6 h-6 text-rose-500" />,
    desc: 'High refresh displays, haptic controllers, and immersive gaming audio.',
    color: 'from-rose-500/10 to-red-500/5 border-rose-500/20'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  products,
  categories,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  activeAssociateTag,
  onOpenDetail,
  onNavigatePage,
  onEditProduct,
  onDeleteProduct
}) => {
  const [filterState, setFilterState] = useState<FilterState>({
    category: selectedCategory,
    searchQuery: searchQuery,
    selectedBrand: '',
    minRating: 0,
    badgeFilter: '',
    sortBy: 'featured'
  });

  // Keep state in sync if parent props change
  React.useEffect(() => {
    setFilterState(prev => ({
      ...prev,
      category: selectedCategory,
      searchQuery: searchQuery
    }));
  }, [selectedCategory, searchQuery]);

  // Extract all available brands from active products
  const availableBrands = useMemo(() => {
    const brands = new Set(products.map(p => p.brand));
    return Array.from(brands).sort();
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category filter
      if (filterState.category !== 'All' && p.category !== filterState.category) {
        return false;
      }
      // Search query
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesDesc = p.shortSummary.toLowerCase().includes(q);
        const matchesFeat = p.features.some(f => f.toLowerCase().includes(q));
        if (!matchesTitle && !matchesBrand && !matchesDesc && !matchesFeat) return false;
      }
      // Brand filter
      if (filterState.selectedBrand && p.brand !== filterState.selectedBrand) {
        return false;
      }
      // Min Rating filter
      if (filterState.minRating > 0 && p.rating < filterState.minRating) {
        return false;
      }
      // Badge filter
      if (filterState.badgeFilter && p.badge !== filterState.badgeFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      if (filterState.sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      if (filterState.sortBy === 'title') return a.title.localeCompare(b.title);
      return 0; // featured default order
    });
  }, [products, filterState]);

  // Featured Editor's Choice products
  const featuredPicks = useMemo(() => {
    return products.filter(p => p.badge === "Editor's Choice" || p.rating >= 4.8).slice(0, 3);
  }, [products]);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl">
        {/* Background Decorative Gradient Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-8">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>SUGANDHA TECH — FTC &amp; Amazon Associate 100% Compliant</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/80">
              Tag: <span className="text-amber-400 font-bold">{activeAssociateTag}</span>
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Curated Tech &amp; Home Products. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
                Zero Price Friction. 100% Transparency.
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Explore tested electronics, workplace setups, and smart home innovations. Browse verified editorial reviews and navigate directly to official Amazon detail pages with explicit <strong className="text-amber-400">#ad Paid Link</strong> disclosures.
            </p>
          </div>

          {/* Hero Quick Search Input */}
          <div className="max-w-xl space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search products by brand, title, or category..."
                value={filterState.searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setFilterState(prev => ({ ...prev, searchQuery: e.target.value }));
                }}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner text-sm"
              />
              {filterState.searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterState(prev => ({ ...prev, searchQuery: '' }));
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
              <span className="text-slate-400 text-[11px] font-medium">Quick Suggestions:</span>
              {['Audio & Music', 'Smart Home', 'Productivity & Tech', 'Gaming & Entertainment'].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setFilterState(prev => ({ ...prev, category: cat }));
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] transition-colors cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-xs">
            <div className="space-y-0.5">
              <span className="text-slate-400 block text-[11px]">Active Products</span>
              <span className="font-extrabold text-lg text-white">{products.length} Items</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-400 block text-[11px]">Categories Ready</span>
              <span className="font-extrabold text-lg text-white">{categories.length - 1} Ready</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-400 block text-[11px]">FTC Disclosure</span>
              <span className="font-extrabold text-xs text-emerald-400 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-4 h-4" /> 100% Compliant
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-400 block text-[11px]">Price Integrity</span>
              <span className="font-extrabold text-xs text-amber-400 flex items-center gap-1 pt-1">
                <ExternalLink className="w-4 h-4" /> Direct Amazon Links
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Explore Categories Showcase */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-amber-500" />
              <span>Browse Product Categories</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select any category to filter products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORY_CARDS.map(cat => {
            const count = products.filter(p => p.category === cat.name).length;
            const isSelected = selectedCategory === cat.name;

            return (
              <div
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setFilterState(prev => ({ ...prev, category: cat.name }));
                }}
                className={`p-5 rounded-3xl bg-gradient-to-br ${cat.color} bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between ${
                  isSelected ? 'ring-2 ring-amber-500 border-amber-500' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {count} {count === 1 ? 'Product' : 'Products'}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                  <span>Browse Category</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Editor's Choice Section (if featured products exist) */}
      {featuredPicks.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Editor's Featured Picks
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Highest rated hand-picked gear with outstanding performance reviews
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
              #ad Paid Links
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPicks.map(product => (
              <ProductCard
               product={product}
              onOpenDetail={onOpenDetail}
/>
                key={product.id}
                product={product}
                activeAssociateTag={activeAssociateTag}
                onOpenDetail={onOpenDetail}
                onEditProduct={onEditProduct}
                onDeleteProduct={onDeleteProduct}
              />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter & Main Product Catalog Section */}
      <section className="space-y-6 pt-2">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span>Full Product Catalog</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Filter by category, brand, and customer ratings
            </p>
          </div>
        </div>

        {/* Category & Filter Control Bar */}
        <CategoryBar
          filterState={filterState}
          setFilterState={setFilterState}
          categories={categories}
          availableBrands={availableBrands}
          totalResults={filteredProducts.length}
        />

        {/* Product Cards Grid or Empty State */}
        {products.length === 0 ? (
          <div className="p-10 sm:p-14 text-center rounded-3xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center shadow-inner">
              <PackageOpen className="w-10 h-10" />
            </div>
            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">
                Catalog Currently Empty
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                All products have been removed. You can browse through our structured product categories above or use the search bar.
              </p>
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard

                key={product.id}
                product={product}
                activeAssociateTag={activeAssociateTag}
                onOpenDetail={onOpenDetail}
                onEditProduct={onEditProduct}
                onDeleteProduct={onDeleteProduct}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <Search className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">
              No products found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No items match your active filters or search query "{filterState.searchQuery}". Try clearing your filters or picking a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterState({
                  category: 'All',
                  searchQuery: '',
                  selectedBrand: '',
                  minRating: 0,
                  badgeFilter: '',
                  sortBy: 'featured'
                });
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </section>

      {/* Side-by-Side Product Comparison Table Section */}
      {products.length > 1 && (
        <ComparisonTable 
          products={products}
          activeAssociateTag={activeAssociateTag}
          onOpenDetail={onOpenDetail}
        />
      )}

      {/* Why SUGANDHA TECH Value Grid */}
      <section className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <span className="text-amber-600 dark:text-amber-400 font-extrabold text-xs uppercase tracking-wider">
            Trust &amp; Transparency
          </span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Why SUGANDHA TECH Review Portal?
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Engineered specifically to satisfy strict Amazon Associates and FTC guidance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Explicit FTC Badges
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Every outbound link clearly presents <span className="font-semibold text-amber-500">#ad Paid Links</span> so users are fully informed before clicking.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit">
              <ExternalLink className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Live Price Integrity
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              We never show misleading stale prices. Users view real-time current pricing directly on official Amazon product pages.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 w-fit">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Editorial Structure
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Structured pros, cons, key features, specifications, and editor verdicts for balanced product evaluation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Structured Categories
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Intuitive categorization across audio, productivity, smart home, travel, and gaming gear.
            </p>
          </div>
        </div>
      </section>

      {/* Amazon Operating Agreement Compliance Guarantee Box */}
      <section className="p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs space-y-3">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-800 dark:text-amber-300">
          <ShieldCheck className="w-5 h-5 text-amber-500" />
          <span>Amazon Associates Compliance Guarantee</span>
        </div>
        <p className="leading-relaxed">
          SUGANDHA TECH strictly enforces every requirement of the Amazon Associates Operating Agreement. Prices on Amazon fluctuate continuously; therefore, we do not quote static dollar amounts. Clicking any product button directs you to the official Amazon product detail page with our associate tracking tag appended.
        </p>
      </section>

    </div>
  );
};
