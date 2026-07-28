import React from 'react';
import { Filter, SlidersHorizontal, Headphones, Home, Laptop, Compass, Gamepad2, Layers, RotateCcw, Tag } from 'lucide-react';
import { Category, FilterState } from '../types';

interface CategoryBarProps {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  categories: Category[];
  availableBrands: string[];
  totalResults: number;
}

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  'All': <Layers className="w-4 h-4" />,
  'Audio & Music': <Headphones className="w-4 h-4" />,
  'Smart Home': <Home className="w-4 h-4" />,
  'Productivity & Tech': <Laptop className="w-4 h-4" />,
  'Outdoor & Travel': <Compass className="w-4 h-4" />,
  'Gaming & Entertainment': <Gamepad2 className="w-4 h-4" />
};

export const CategoryBar: React.FC<CategoryBarProps> = ({
  filterState,
  setFilterState,
  categories,
  availableBrands,
  totalResults
}) => {
  const handleCategoryChange = (category: Category) => {
    setFilterState(prev => ({ ...prev, category }));
  };

  const handleResetFilters = () => {
    setFilterState({
      category: 'All',
      searchQuery: '',
      selectedBrand: '',
      minRating: 0,
      badgeFilter: '',
      sortBy: 'featured'
    });
  };

  const isFiltered = filterState.category !== 'All' || 
                     filterState.selectedBrand !== '' || 
                     filterState.minRating > 0 || 
                     filterState.badgeFilter !== '' ||
                     filterState.searchQuery !== '';

  return (
    <div className="space-y-4">
      
      {/* Category Horizontal Pill Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = filterState.category === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {CATEGORY_ICONS[cat] || <Tag className="w-4 h-4" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Options & Sort Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left: Brand & Rating Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-slate-500 font-semibold">
            <SlidersHorizontal className="w-4 h-4 text-amber-500" />
            <span>Filters:</span>
          </div>

          {/* Brand Selector */}
          <select
            value={filterState.selectedBrand}
            onChange={(e) => setFilterState(prev => ({ ...prev, selectedBrand: e.target.value }))}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">All Brands</option>
            {availableBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          {/* Min Rating Selector */}
          <select
            value={filterState.minRating}
            onChange={(e) => setFilterState(prev => ({ ...prev, minRating: Number(e.target.value) }))}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value={0}>All Ratings</option>
            <option value={4.5}>4.5★ &amp; Above</option>
            <option value={4.7}>4.7★ &amp; Above</option>
          </select>

          {/* Badge Filter */}
          <select
            value={filterState.badgeFilter}
            onChange={(e) => setFilterState(prev => ({ ...prev, badgeFilter: e.target.value }))}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">All Curated Badges</option>
            <option value="Editor's Choice">Editor's Choice</option>
            <option value="Best Value">Best Value</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Trending">Trending</option>
          </select>

          {isFiltered && (
            <button
              onClick={handleResetFilters}
              className="text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>

        {/* Right: Sort By & Results Count */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
          <span className="text-slate-500 font-medium">
            Showing <strong>{totalResults}</strong> items
          </span>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-medium">Sort:</span>
            <select
              value={filterState.sortBy}
              onChange={(e) => setFilterState(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
            >
              <option value="featured">Featured Picks</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
              <option value="title">Product Name</option>
            </select>
          </div>
        </div>

      </div>

    </div>
  );
};
