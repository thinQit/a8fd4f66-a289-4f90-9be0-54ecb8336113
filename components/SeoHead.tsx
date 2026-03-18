"use client";

import Head from 'next/head'

interface SeoHeadProps {
  title: string
  description: string
  url: string
  imageSrc: string
}

export default function SeoHead({
  title = 'Bella Notte | Italian Restaurant in NYC',
  description = 'Bella Notte offers authentic Italian dining, takeout, catering, and easy reservations in New York City.',
  url = 'https://www.bellanotte.com',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg',
}: Partial<SeoHeadProps>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Bella Notte',
    image: [imageSrc],
    servesCuisine: 'Italian',
    telephone: '+1-212-555-0199',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '245 Mulberry St',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10012',
      addressCountry: 'US',
    },
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageSrc} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  )
}
