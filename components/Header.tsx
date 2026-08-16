'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header({ siteName }: { siteName: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 transition-all duration-300">
      <div className="bg-gradient-to-r from-brand-50 to-blue-50 border-b border-brand-100 py-2.5 px-4">
        <div className="container mx-auto">
          <p className="text-xs text-neutral-700 font-medium">
            🎯 Affiliate Disclosure: We may earn a commission from qualifying purchases. Our editorial recommendations are independent and based on research.
            <Link href="/affiliate-disclosure" className="ml-2 text-brand-600 hover:text-brand-700 underline font-semibold transition-colors">Learn more</Link>
          </p>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-3.5 px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <img src="/images/channels4_profile.jpg" alt="Sugandha Tech" className="h-10 w-10 rounded-[6px] object-cover" />
          </div>
          <span className="hidden sm:block font-semibold text-neutral-900 text-sm">Sugandha Tech</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200">Home</Link>
          <Link href="/reviews" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200">Reviews</Link>
          <Link href="/guides" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200">Buying Guides</Link>
          <Link href="/news" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200">Tech News</Link>
          <Link href="/about" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200">About</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
        </div>
        
        <div className="flex md:hidden items-center gap-3">
          <button
            aria-label="Open menu"
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            <Link href="/" onClick={()=>setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors">Home</Link>
            <Link href="/reviews" onClick={()=>setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors">Reviews</Link>
            <Link href="/guides" onClick={()=>setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors">Buying Guides</Link>
            <Link href="/news" onClick={()=>setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors">Tech News</Link>
            <Link href="/about" onClick={()=>setOpen(false)} className="px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors">About</Link>
            <div className="pt-2 border-t border-neutral-200 mt-2"><SearchBar /></div>
          </div>
        </div>
      )}
    </header>
  )
}