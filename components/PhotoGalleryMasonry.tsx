'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PhotoGalleryMasonry({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10135116.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10875172.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577047/site-images/restaurant/10456027.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/12603336.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577056/site-images/restaurant/110813.jpg',
  ],
}: Partial<{ images: string[] }>) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="bg-[#FEFAE0] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center font-serif text-4xl text-[#722F37]">Gallery</h2>
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <button key={src + i} onClick={() => setActive(src)} className="group block w-full overflow-hidden rounded-xl">
              <Image src={src} alt="Bella Notte gallery" width={1200} height={800} unoptimized className="h-auto w-full object-cover transition duration-300 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActive(null)}>
          <Image src={active} alt="Gallery lightbox" width={1400} height={900} unoptimized className="max-h-[90vh] w-auto rounded-xl object-contain" />
        </div>
      ) : null}
    </section>
  )
}
