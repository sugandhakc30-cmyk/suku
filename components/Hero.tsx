
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
            Independent technology reviews, practical buying guidance, and clear comparisons to help you make more confident purchase decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/reviews" className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Reviews
            </Link>
            <Link href="/guides" className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-600 text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition-all duration-200">
              View Buying Guides
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4 text-sm">
            <div>
              <div className="font-bold text-2xl text-neutral-900">Research-led</div>
              <p className="text-neutral-600">Review coverage built around specs, comparisons, and real-world use.</p>
            </div>
            <div>
              <div className="font-bold text-2xl text-neutral-900">Buying guides</div>
              <p className="text-neutral-600">Practical advice for choosing the right tech without the noise.</p>
            </div>
            <div>
              <div className="font-bold text-2xl text-neutral-900">Transparent</div>
              <p className="text-neutral-600">Clear affiliate disclosures and editorial standards you can trust.</p>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 bg-gradient-to-br from-white via-brand-50/30 to-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-xl backdrop-blur-sm">
            <div className="space-y-6">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 h-72 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/50 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl mb-4 mx-auto border border-white/30">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg">Expert Reviews</p>
                  <p className="text-brand-100 text-sm mt-2">Thoroughly tested products</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest text-brand-600 mb-4">Why Choose Us</h3>
                
                <div className="space-y-3.5">
                  {/* Feature 1 */}
                  <div className="group flex gap-3.5 p-3 rounded-lg hover:bg-brand-50/50 transition-colors">
                    <div className="flex-shrink-0 pt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-brand-100 border border-brand-300 group-hover:bg-brand-200 transition-colors">
                        <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-900">Expert Tested & Verified</p>
                      <p className="text-xs text-neutral-600 mt-0.5">Real-world testing by experienced reviewers</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="group flex gap-3.5 p-3 rounded-lg hover:bg-brand-50/50 transition-colors">
                    <div className="flex-shrink-0 pt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-brand-100 border border-brand-300 group-hover:bg-brand-200 transition-colors">
                        <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-900">Detailed Comparisons</p>
                      <p className="text-xs text-neutral-600 mt-0.5">Side-by-side analysis of features & pricing</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="group flex gap-3.5 p-3 rounded-lg hover:bg-brand-50/50 transition-colors">
                    <div className="flex-shrink-0 pt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-brand-100 border border-brand-300 group-hover:bg-brand-200 transition-colors">
                        <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-900">Honest Recommendations</p>
                      <p className="text-xs text-neutral-600 mt-0.5">Independent advice based on research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}