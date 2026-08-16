
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
    <div className="group border border-neutral-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden h-44 bg-neutral-100">
        <img 
          src={image || '/images/article-2.jpg'} 
          alt={productName} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-5">
        {category && (
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-600 font-medium mb-3">
            {category}
          </div>
        )}
        <h4 className="font-bold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors line-clamp-2">{productName}</h4>
        <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{description}</p>
        <div className="mt-5 flex flex-col gap-2">
          <Link href={detailHref} className="inline-flex items-center justify-center px-4 py-2.5 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors text-sm">
            View Details
          </Link>
          <Link 
            href={affiliateUrl} 
            target="_blank" 
            rel="nofollow sponsored noopener noreferrer" 
            className="inline-flex items-center justify-center px-4 py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  )
}