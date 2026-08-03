import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
  type?: "website" | "article" | "product";
  brand?: string;
  rating?: number;
  reviews?: number;
  price?: string;
  currency?: string;
  availability?: string;
}

const SITE_NAME = "SUGANDHA TECH";
const SITE_URL = "https://sugandhatech.in.net";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  canonical = SITE_URL,
  keywords = [],
  type = "website",
  brand,
  rating,
  reviews,
  price,
  currency = "USD",
  availability = "https://schema.org/InStock",
}: SEOProps) {
  const pageTitle = `${title} | ${SITE_NAME}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
   
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema =
    type === "product"
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: title,
          image,
          description,
          brand: {
            "@type": "Brand",
            name: brand || ""
          },
          aggregateRating:
            rating && reviews
              ? {
                  "@type": "AggregateRating",
                  ratingValue: rating,
                  reviewCount: reviews
                }
              : undefined,
          offers: {
            "@type": "Offer",
            price: price || "0",
            priceCurrency: currency,
            availability
          }
        }
      : null;

  return (
    <Helmet>

      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content={keywords.join(", ")}
      />

      <meta
        name="robots"
        content="index,follow,max-image-preview:large"
      />

      <meta
        name="googlebot"
        content="index,follow"
      />

      <link
        rel="canonical"
        href={canonical}
      />

      {/* Open Graph */}

      <meta property="og:type" content={type} />

      <meta property="og:title" content={pageTitle} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={canonical} />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      {/* Mobile */}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <meta
        name="theme-color"
        content="#ffffff"
      />

      {/* JSON-LD */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
}