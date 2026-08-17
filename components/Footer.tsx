
import Link from 'next/link'

const socialLinks = {
  youtube: 'https://www.youtube.com/',
  pinterest: 'https://www.pinterest.com/'
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200/50 mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ST</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Sugandha Tech</h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Independent reviews and practical buying guidance for people choosing tech with more confidence.
            </p>
            <div className="flex gap-3">
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-200 hover:bg-brand-100 text-neutral-700 hover:text-brand-600 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href={socialLinks.pinterest} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-200 hover:bg-brand-100 text-neutral-700 hover:text-brand-600 transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.937-.2-2.378.042-3.41.22-.937 1.409-5.98 1.409-5.98s-.36-.723-.36-1.79c0-1.676.973-2.926 2.185-2.926 1.03 0 1.526.773 1.526 1.699 0 1.035-.657 2.584-.994 4.02-.283 1.194.6 2.169 1.775 2.169 2.128 0 3.768-2.245 3.768-5.48 0-2.864-2.058-4.866-4.998-4.866-3.407 0-5.407 2.554-5.407 5.2 0 1.03.39 2.131.873 2.73.096.127.11.236.082.361l-.333 1.36c-.053.22-.174.268-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/reviews" className="text-neutral-600 hover:text-brand-600 transition-colors">Reviews</Link></li>
              <li><Link href="/guides" className="text-neutral-600 hover:text-brand-600 transition-colors">Buying Guides</Link></li>
              <li><Link href="/news" className="text-neutral-600 hover:text-brand-600 transition-colors">Tech News</Link></li>
              <li><Link href="/comparisons" className="text-neutral-600 hover:text-brand-600 transition-colors">Comparisons</Link></li>
              <li><Link href="/about" className="text-neutral-600 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-neutral-600 hover:text-brand-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-5 text-sm uppercase tracking-wider">Policies</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/affiliate-disclosure" className="text-neutral-600 hover:text-brand-600 transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/editorial-policy" className="text-neutral-600 hover:text-brand-600 transition-colors">Editorial Policy</Link></li>
              <li><Link href="/privacy-policy" className="text-neutral-600 hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-neutral-600 hover:text-brand-600 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/terms" className="text-neutral-600 hover:text-brand-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-neutral-900 mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-neutral-600 mb-4">Get the latest tech reviews and guides delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-5 py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {currentYear} Sugandha Tech. All rights reserved.</p>
          <p>Made with care for tech enthusiasts worldwide.</p>
        </div>
      </div>
    </footer>
  )
}