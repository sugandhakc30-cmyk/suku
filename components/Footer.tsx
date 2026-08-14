
import Link from 'next/link'

const socialLinks = {
  youtube: 'https://www.youtube.com/',
  pinterest: 'https://www.pinterest.com/'
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-semibold">SUGANDHA TECH</h3>
          <p className="text-sm text-gray-700">Independent reviews and buying guidance for modern tech choices.</p>
        </div>
        <div>
          <h4 className="font-medium">Navigation</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/guides">Buying Guides</Link></li>
            <li><Link href="/news">Tech News</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Legal & Info</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
            <li><Link href="/editorial-policy">Editorial Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Follow</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href={socialLinks.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href={socialLinks.pinterest} target="_blank" rel="noreferrer">Pinterest</a></li>
          </ul>
          <p className="mt-3 text-xs text-gray-600">Add your real social URLs in the footer constants later.</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sugandha Tech — All rights reserved.
      </div>
    </footer>
  )
}