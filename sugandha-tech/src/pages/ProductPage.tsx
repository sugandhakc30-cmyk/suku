import React, { useState } from "react";
import { useParams, Link } from "react-router-dom"; // Replace with 'next/navigation' or 'next/router' if using Next.js
import { getProductBySlug, getProductsByIds, Product } from "./amazonProducts";
import SEO from "./SEO";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product: Product | undefined = slug ? getProductBySlug(slug) : undefined;

  const [selectedImage, setSelectedImage] = useState<number>(0);

  // ---------------------------------------------------------------------------
  // 404 PAGE COMPONENT (Rendered if product slug is not found)
  // ---------------------------------------------------------------------------
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <SEO title="Product Not Found" description="The requested product page does not exist." />
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm max-w-md w-full">
          <span className="text-6xl font-black text-indigo-600">404</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-4 mb-2">Product Not Found</h1>
          <p className="text-slate-600 mb-6 text-sm">
            We couldn't find the product review or guide you were looking for. It may have been moved, deleted, or never existed.
          </p>
          <Link
            to="/"
            className="inline-block w-full py-3 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition duration-150 shadow-sm"
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByIds(product.relatedProductIds || []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pb-20 font-sans">
      {/* ---------------------------------------------------------------------
          1. FULL SEO INTEGRATION
      --------------------------------------------------------------------- */}
      <SEO
        title={`${product.title} Review & Buying Guide`}
        description={product.editorVerdict}
        image={product.images[0]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs sm:text-sm text-slate-500 mb-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <span>/</span>
          <span className="text-slate-600">{product.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-medium truncate">{product.title}</span>
        </nav>

        {/* ---------------------------------------------------------------------
            2. HERO SECTION & IMAGE GALLERY
        --------------------------------------------------------------------- */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Gallery Module */}
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
                <img
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition duration-300"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === idx
                          ? "border-amber-500 ring-2 ring-amber-500/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Meta & CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-3">
                  {product.title}
                </h1>
                {product.subtitle && (
                  <p className="text-base sm:text-lg text-slate-600 mb-4">{product.subtitle}</p>
                )}

                {/* Rating Display */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-amber-400 text-lg">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
                  <span className="text-slate-400 text-sm">({product.reviewCount} user reviews)</span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-black text-slate-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-slate-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* -----------------------------------------------------------------
                  3. AMAZON AFFILIATE BUTTON
              ----------------------------------------------------------------- */}
              <div className="pt-6 border-t border-slate-100">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer shadow-lg"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-lg rounded-xl transition duration-150 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M15.312 12.302c-.22-.12-.423-.08-.607.121l-.736.852c-.18.21-.14.412.08.621 1.34 1.252 2.62 1.482 3.86 1.482 2.37 0 3.75-1.25 3.75-3.13 0-1.74-1.07-2.65-2.91-2.94l-1.39-.22c-.88-.14-1.32-.47-1.32-1.04 0-.64.6-1.02 1.55-1.02 1.05 0 2.02.32 2.87.97.19.15.39.12.56-.07l.69-.79c.17-.2.12-.39-.06-.54-1.12-.91-2.47-1.35-4.04-1.35-2.28 0-3.69 1.25-3.69 3.01 0 1.63 1.05 2.58 2.85 2.87l1.39.22c.94.15 1.38.5 1.38 1.08 0 .74-.72 1.15-1.75 1.15-1.25 0-2.38-.45-3.29-1.26z" />
                  </svg>
                  Check Current Price on Amazon
                </a>
                <p className="text-xs text-center text-slate-400 mt-2">
                  As an Amazon Associate, we earn from qualifying purchases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            4. FEATURES SECTION
        --------------------------------------------------------------------- */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="text-slate-800 font-medium text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------------------
            5. PROS & CONS SECTION
        --------------------------------------------------------------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Pros */}
          <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-6">
            <h2 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2">
              <span className="text-emerald-600">👍</span> What We Like (Pros)
            </h2>
            <ul className="space-y-3">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2 text-emerald-950 text-sm sm:text-base">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-rose-50/60 rounded-2xl border border-rose-200 p-6">
            <h2 className="text-lg font-bold text-rose-950 mb-4 flex items-center gap-2">
              <span className="text-rose-600">👎</span> Room for Improvement (Cons)
            </h2>
            <ul className="space-y-3">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2 text-rose-950 text-sm sm:text-base">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            6. WHO SHOULD BUY / AVOID
        --------------------------------------------------------------------- */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Who Is This For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-md font-bold text-indigo-900 mb-3">Who Should Buy This</h3>
              <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                {product.whoShouldBuy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-slate-300 pl-4">
              <h3 className="text-md font-bold text-slate-800 mb-3">Who Should Avoid This</h3>
              <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                {product.whoShouldAvoid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            7. SPECIFICATIONS TABLE
        --------------------------------------------------------------------- */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                    <td className="py-3 px-4 font-semibold text-slate-700 text-sm w-1/3 border-b border-slate-100">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 text-slate-900 text-sm border-b border-slate-100">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            8. EDITOR VERDICT
        --------------------------------------------------------------------- */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
          <h2 className="text-xl font-bold text-amber-400 mb-3">Editor's Final Verdict</h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">{product.editorVerdict}</p>
        </section>

        {/* ---------------------------------------------------------------------
            9. AUTHOR SECTION
        --------------------------------------------------------------------- */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <img
            src={product.author.avatar}
            alt={product.author.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 flex-shrink-0"
          />
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Reviewed By</span>
            <h3 className="font-bold text-lg text-slate-900">{product.author.name}</h3>
            <p className="text-xs text-indigo-600 font-medium mb-2">{product.author.title}</p>
            <p className="text-sm text-slate-600">{product.author.bio}</p>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            10. RELATED PRODUCTS
        --------------------------------------------------------------------- */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/product/${rel.slug}`}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div className="w-full h-44 bg-slate-100 relative">
                    <img
                      src={rel.images[0]}
                      alt={rel.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">
                      {rel.title}
                    </h3>
                    <p className="text-amber-600 font-extrabold mb-3">
                      ${rel.price}
                    </p>
                    <span className="text-sm font-semibold text-indigo-600 flex items-center gap-1">
                      Read Review <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}