'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header({ siteName }: { siteName: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b">
      <div className="bg-slate-50 border-b border-slate-200 text-center text-xs text-slate-700">
        <div className="container mx-auto py-2 px-4">
          <p>
            Affiliate Disclosure: We may earn a commission from qualifying purchases. Our editorial recommendations are independent and based on research and experience.
            <Link href="/affiliate-disclosure" className="ml-2 font-medium underline">Learn more</Link>
          </p>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-4">
          <img src="/images/logo.svg" alt="Sugandha Tech" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/reviews" className="hover:underline">Reviews</Link>
          <Link href="/guides" className="hover:underline">Buying Guides</Link>
          <Link href="/news" className="hover:underline">Tech News</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
        </div>
        <div className="flex md:hidden items-center gap-4">
          <button
            aria-label="Open menu"
            className="p-2 rounded focus:outline-none focus:ring"
            onClick={() => setOpen(!open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
            <Link href="/reviews" onClick={()=>setOpen(false)}>Reviews</Link>
            <Link href="/guides" onClick={()=>setOpen(false)}>Buying Guides</Link>
            <Link href="/news" onClick={()=>setOpen(false)}>Tech News</Link>
            <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
            <div className="pt-2"><SearchBar /></div>
          </div>
        </div>
      )}
    </header>
  )
}