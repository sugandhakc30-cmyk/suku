import Link from 'next/link'

export default function AffiliateButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-block bg-brand text-white px-4 py-2 rounded">
      {children}
    </Link>
  )
}