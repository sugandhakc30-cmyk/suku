
import Link from 'next/link'

type Props = {
  productName: string
  productId?: string
  image?: string
  description?: string
  category?: string
  pros?: string[]
  cons?: string[]
  affiliateUrl?: string
  ctaText?: string
}

export default function ProductCard({
  productName,
  productId,
  image,
  description,
  category,
  affiliateUrl = '#',
  ctaText = 'Check Price on Amazon →'
}: Props) {
  const detailHref = productId ? `/products/${productId}` : '#'

  return (
    <div className="border rounded-lg p-4 bg-white">
      <img src={image || '/images/article-2.jpg'} alt={productName} className="w-full h-40 object-cover rounded" />
      <div className="mt-3">
        <div className="text-xs text-gray-500">{category}</div>
        <h4 className="font-semibold">{productName}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href={detailHref} className="px-3 py-2 bg-slate-900 text-white rounded text-sm inline-block">View Details →</Link>
          <Link href={affiliateUrl} target="_blank" rel="nofollow sponsored noopener noreferrer" className="px-3 py-2 bg-brand text-white rounded text-sm inline-block">{ctaText}</Link>
        </div>
      </div>
    </div>
  )
}