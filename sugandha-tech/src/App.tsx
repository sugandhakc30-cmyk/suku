import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ActivePage, Category, Product } from './types';
import { getStoredAssociateTag } from './utils/affiliateUtils';
import { AMAZON_PRODUCTS } from './data/amazonProducts';

// Components
import { ComplianceBanner } from './components/ComplianceBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AssociateTagModal } from './components/AssociateTagModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ContactPage } from './pages/ContactPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import ProductPage from './pages/ProductPage';

// Scroll Restoration Helper Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

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

  // Sync activePage state based on current URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActivePage('home');
    else if (path.startsWith('/about')) setActivePage('about');
    else if (path.startsWith('/privacy')) setActivePage('privacy');
    else if (path.startsWith('/contact')) setActivePage('contact');
    else if (path.startsWith('/terms')) setActivePage('terms');
    else if (path.startsWith('/cookie')) setActivePage('cookie');
    else if (path.startsWith('/disclosure')) setActivePage('disclosure');
  }, [location.pathname]);

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

  // Centralized Navigation Handler
  const handleNavigatePage = (page: ActivePage) => {
    setActivePage(page);
    if (page === 'home') navigate('/');
    else navigate(`/${page}`);
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
      
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Top Site-wide Compliance Banner */}
      <ComplianceBanner
        currentTag={activeAssociateTag}
        onOpenTagModal={() => setTagModalOpen(true)}
      />

      {/* Sticky Main Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigatePage}
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
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                categories={categories}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                activeAssociateTag={activeAssociateTag}
                onOpenDetail={(prod) => setSelectedProduct(prod)}
                onNavigatePage={handleNavigatePage}
              />
            }
          />

          <Route path="/product/:id" element={<ProductPage />} />

          <Route
            path="/about"
            element={<AboutUsPage onBackToHome={() => handleNavigatePage('home')} />}
          />

          <Route
            path="/privacy"
            element={<PrivacyPolicyPage onBackToHome={() => handleNavigatePage('home')} />}
          />

          <Route
            path="/contact"
            element={<ContactPage onBackToHome={() => handleNavigatePage('home')} />}
          />

          <Route
            path="/terms"
            element={<TermsPage onBackToHome={() => handleNavigatePage('home')} />}
          />

          <Route
            path="/cookie"
            element={<CookiePolicyPage onBackToHome={() => handleNavigatePage('home')} />}
          />

          <Route
            path="/disclosure"
            element={<AffiliateDisclosurePage onBackToHome={() => handleNavigatePage('home')} />}
          />
        </Routes>
      </main>

      {/* Site Footer */}
      <Footer
        setActivePage={handleNavigatePage}
        activeAssociateTag={activeAssociateTag}
        onOpenTagModal={() => setTagModalOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        activeAssociateTag={activeAssociateTag}
        onClose={() => setSelectedProduct(null)}
        onNavigatePage={handleNavigatePage}
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