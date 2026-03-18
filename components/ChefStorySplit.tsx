"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function ChefStorySplit({
  chefImageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg',
}: Partial<{ chefImageSrc: string }>) {
  return (
    <section id="about" className="bg-[#f7f1dc] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border">
          <Image src={chefImageSrc} alt="Chef Marco at Bella Notte" width={1200} height={800} unoptimized className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#606C38]">Our Story</p>
          <h2 className="mt-3 font-serif text-4xl text-[#722F37]">From Naples to New York</h2>
          <p className="mt-4 text-muted-foreground">
            Chef Marco Bellini founded Bella Notte to bring the soul of Southern Italy to the city. Every sauce is simmered in-house,
            every pasta rolled fresh, and every service designed around warm hospitality.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl p-4">
              <p className="font-semibold text-[#722F37]">Handmade Daily</p>
              <p className="mt-1 text-sm text-muted-foreground">Fresh pasta prepared each afternoon.</p>
            </Card>
            <Card className="rounded-xl p-4">
              <p className="font-semibold text-[#722F37]">Seasonal Ingredients</p>
              <p className="mt-1 text-sm text-muted-foreground">Local produce and imported Italian staples.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
