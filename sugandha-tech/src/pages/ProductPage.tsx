/// <reference types="react" />
/// <reference types="react/jsx-runtime" />
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/amazonProducts';
import { 
  Star, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Award, 
  ChevronRight, 
  User, 
  Calendar, 
  ShieldCheck, 
  ThumbsUp,
  Info
} from 'lucide-react';

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  // Default to main image if gallery is empty or undefined
  const [activeImage, setActiveImage] = useState<string>(
    product?.image || ''
  );

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">
          The product review you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  // Fallback to primary image if active state hasn't synced
  const displayImage = activeImage || product.image;

  return (
  <>
    <SEO
      title={product.title}
      description={product.shortSummary}
      image={product.image}
      brand={product.brand}
      rating={product.rating}
      reviews={product.reviewsCount}
      canonical={`https://sugandhatech.in.net/product/${product.id}`}
      keywords={[
        product.brand,
        product.title,
        `${product.brand} Review`,
        "Amazon Buying Guide",
        "Amazon Review"
      ]}
      type="product"
    />

    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span>{product.category}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
            {product.brand}
          </span>
        </nav>

        {/* Top Product Header & Overview Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
            
            {/* Gallery Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full h-80 sm:h-96 bg-gray-100 rounded-lg overflow-hidden mb-4 border border-gray-100 flex items-center justify-center">
                <img
                  src={displayImage}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain p-4"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="flex space-x-3 overflow-x-auto w-full pb-2">
                  <button
                    onClick={() => setActiveImage(product.image)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md border-2 overflow-hidden bg-gray-50 ${
                      displayImage === product.image ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={product.image} alt="Thumbnail main" className="w-full h-full object-contain p-1" />
                  </button>
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`flex-shrink-0 w-16 h-16 rounded-md border-2 overflow-hidden bg-gray-50 ${
                        displayImage === img ? 'border-blue-600' : 'border-gray-200'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Overview Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">
                 <div className="flex items-center text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">
                 <span>{product.brand}</span>
                      </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
                  {product.title}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-md border border-yellow-200">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-bold text-gray-900">{product.rating}</span>
                    <span className="text-gray-400 mx-1">/</span>
                    <span className="text-xs text-gray-500">5.0</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviewsCount.toLocaleString()} user reviews)
                  </span>
                </div>

                {/* Short Summary */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {product.shortSummary}
                </p>
              </div>

              {/* Call-to-Action Section (No Price) */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-amber-500 hover:bg-amber-600 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Check Availability on Amazon
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Main Review Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Extended Description */}
            <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                Product Review & Analysis
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {product.description}
              </p>
            </section>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                  Key Features & Highlights
                </h2>
                <ul className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Pros & Cons Comparison */}
            {(product.pros || product.cons) && (
              <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
                  Pros & Cons
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Pros */}
                  {product.pros && (
                    <div className="bg-green-50/50 p-5 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                        <ThumbsUp className="w-5 h-5 mr-2 text-green-600" />
                        What We Liked
                      </h3>
                      <ul className="space-y-2.5">
                        {product.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-800">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Cons */}
                  {product.cons && (
                    <div className="bg-red-50/50 p-5 rounded-lg border border-red-100">
                      <h3 className="font-semibold text-red-900 mb-4 flex items-center">
                        <XCircle className="w-5 h-5 mr-2 text-red-600" />
                        Things to Consider
                      </h3>
                      <ul className="space-y-2.5">
                        {product.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-800">
                            <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </section>
            )}

            {/* Target Audience Guidance */}
            {(product.whoShouldBuy || product.whoShouldAvoid) && (
              <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
                  Is This Product Right for You?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Who Should Buy */}
                  {product.whoShouldBuy && (
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-bold text-gray-900 mb-3">
                        Ideal For:
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {product.whoShouldBuy.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Who Should Avoid */}
                  {product.whoShouldAvoid && (
                    <div className="border-l-4 border-gray-400 pl-4">
                      <h3 className="font-bold text-gray-900 mb-3">
                        Might Want to Skip If:
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {product.whoShouldAvoid.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </section>
            )}

            {/* Editor's Final Verdict */}
            {product.editorVerdict && (
              <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="flex items-center space-x-2 text-amber-400 mb-3">
                  <Award className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-sm">Editor's Final Verdict</span>
                </div>
                <p className="text-lg leading-relaxed text-blue-50 font-medium italic mb-6">
                  "{product.editorVerdict}"
                </p>
                <div className="pt-4 border-t border-blue-800/80 flex items-center justify-between">
                  <span className="text-sm text-blue-200">Independent Review Assessment</span>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200"
                  >
                    View options on Amazon <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </section>
            )}

            {/* Detailed Technical Specifications Table */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                  Technical Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-700">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr
                          key={key}
                          className={idx % 2 === 0 ? 'bg-gray-50/60' : 'bg-white'}
                        >
                          <td className="py-3 px-4 font-semibold text-gray-900 w-1/3 border-b border-gray-100">
                            {key}
                          </td>
                          <td className="py-3 px-4 text-gray-700 border-b border-gray-100">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Reviewer Info Card */}
            {product.author && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Reviewed By
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  {product.author.avatar ? (
                    <img
                      src={product.author.avatar}
                      alt={product.author.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      <User className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{product.author.name}</h4>
                    <p className="text-xs text-blue-600 font-medium">{product.author.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {product.author.bio}
                </p>
                <div className="pt-3 border-t border-gray-100 flex items-center text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-green-600 mr-1.5" />
                  <span>{product.author.experience}</span>
                </div>
              </div>
            )}

            {/* Quick Summary Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
                Review Snapshot
              </h3>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Overall Rating</span>
                <span className="font-bold text-gray-900">{product.rating} / 5.0</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Total Reviews</span>
                <span className="font-medium text-gray-900">{product.reviewsCount.toLocaleString()}</span>
              </div>

              {product.updatedAt && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Last Updated</span>
                  <span className="font-medium text-gray-900 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" />
                    {product.updatedAt}
                  </span>
                </div>
              )}

              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-bold rounded-lg text-white bg-amber-500 hover:bg-amber-600 transition"
              >
                Buy on Amazon
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Disclosure Box */}
            <div className="bg-gray-100 p-4 rounded-lg text-xs text-gray-500 leading-relaxed flex items-start space-x-2">
              <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Affiliate Disclosure:</strong> Clicking Amazon links on this page may earn us an affiliate commission at no additional cost to you.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  </> 
  );
};

export default ProductPage;