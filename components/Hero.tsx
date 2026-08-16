
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-50 border border-brand-200 rounded-full">
            <span className="w-2 h-2 bg-brand-600 rounded-full"></span>
            <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">Find the right tech</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            Smart Tech Choices Start Here
          </h1>
          
          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
            Independent technology reviews, comprehensive buying guides, and expert insights to help you make confident decisions. Trusted by thousands of tech enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/reviews" className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Reviews
            </Link>
            <Link href="/guides" className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-600 text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition-all duration-200">
              View Buying Guides
            </Link>
          </div>
          
          <div className="flex gap-8 pt-4 text-sm">
            <div>
              <div className="font-bold text-2xl text-neutral-900">500+</div>
              <p className="text-neutral-600">In-depth reviews</p>
            </div>
            <div>
              <div className="font-bold text-2xl text-neutral-900">50+</div>
              <p className="text-neutral-600">Buying guides</p>
            </div>
            <div>
              <div className="font-bold text-2xl text-neutral-900">100%</div>
              <p className="text-neutral-600">Independent</p>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-xl">
            <div className="space-y-4">
              <div className="h-64 bg-gradient-to-br from-brand-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-50">
                    <rect x="20" y="20" width="80" height="80" rx="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M50 50L70 70M70 50L50 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p className="mt-3 text-neutral-600 font-medium">Latest Tech Reviews</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                  <span className="text-sm text-neutral-700 font-medium">Expert tested & verified</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                  <span className="text-sm text-neutral-700 font-medium">Detailed comparisons</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                  <span className="text-sm text-neutral-700 font-medium">Honest recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}