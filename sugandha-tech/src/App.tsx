import React, { useState, useEffect, useMemo } from 'react';
import { ActivePage, Category, Product } from './types';
import { getStoredAssociateTag } from './utils/affiliateUtils';
import { AMAZON_PRODUCTS } from './data/amazonProducts';

// Components
import { ComplianceBanner } from './components/ComplianceBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AssociateTagModal } from './components/AssociateTagModal';

import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ContactPage } from './pages/ContactPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import ProductPage from './pages/ProductPage';



export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [products] = useState<Product[]>(AMAZON_PRODUCTS);


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeAssociateTag, setActiveAssociateTag] = useState<string>(getStoredAssociateTag);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Modals
  const [tagModalOpen, setTagModalOpen] = useState(false);

  // Sync Dark Mode class with <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Derive all dynamic categories from products in state + standard defaults
  const categories: Category[] = useMemo(() => {
    const baseList = [
      'All',
      'Audio & Music',
      'Smart Home',
      'Productivity & Tech',
      'Outdoor & Travel',
      'Gaming & Entertainment',
      'Home & Kitchen'
    ];
    const customCats = products.map(p => p.category).filter(Boolean);
    return Array.from(new Set([...baseList, ...customCats]));
  }, [products]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-200 flex flex-col justify-between">
      
      {/* Top Site-wide Compliance Banner */}
      <ComplianceBanner
        currentTag={activeAssociateTag}
        onOpenTagModal={() => setTagModalOpen(true)}
      />

      {/* Sticky Main Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onOpenTagModal={() => setTagModalOpen(true)}
        activeAssociateTag={activeAssociateTag}
      />

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activePage === 'home' && (
          <HomePage
            products={products}
            categories={categories}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            activeAssociateTag={activeAssociateTag}
            onOpenDetail={(prod) => setSelectedProduct(prod)}
            onNavigatePage={(page) => setActivePage(page)}
          />
        )}

        {activePage === 'disclosure' && (
          <AffiliateDisclosurePage onBackToHome={() => setActivePage('home')} />
        )}

        {activePage === 'terms' && (
          <TermsPage onBackToHome={() => setActivePage('home')} />
        )}

        {activePage === 'cookie' && (
          <CookiePolicyPage onBackToHome={() => setActivePage('home')} />
        )}

        {activePage === 'about' && (
          <AboutUsPage onBackToHome={() => setActivePage('home')} />
        )}

        {activePage === 'privacy' && (
          <PrivacyPolicyPage onBackToHome={() => setActivePage('home')} />
        )}

        {activePage === 'contact' && (
          <ContactPage onBackToHome={() => setActivePage('home')} />
        )}
      </main>

      {/* Site Footer */}
      <Footer
        setActivePage={setActivePage}
        activeAssociateTag={activeAssociateTag}
        onOpenTagModal={() => setTagModalOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        activeAssociateTag={activeAssociateTag}
        onClose={() => setSelectedProduct(null)}
        onNavigatePage={(page) => setActivePage(page)}
      />

      {/* Associate Tag Inspector Modal */}
      {tagModalOpen && (
        <AssociateTagModal
          currentTag={activeAssociateTag}
          onClose={() => setTagModalOpen(false)}
          onSaveTag={(newTag) => setActiveAssociateTag(newTag)}
        />
      )}

    </div>
  );
}
