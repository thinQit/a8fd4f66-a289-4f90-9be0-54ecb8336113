'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock3, Utensils } from 'lucide-react'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'
import { Button } from '@/components/ui/button'

interface AceternityHeroAuroraProps {
  imageSrc: string
}

export default function AceternityHeroAurora({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <section className="relative">
      <AuroraBackground className="min-h-[88vh]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DDA15E]">Italian Dining in NYC</p>
            <h1 className="font-serif text-4xl leading-tight text-[#FEFAE0] md:text-6xl">
              Bella Notte
            </h1>
            <TextGenerateEffect
              words="House-made pasta, wood-fired classics, and unforgettable evenings."
              className="text-lg text-[#FEFAE0]/90"
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[#722F37] text-white hover:bg-[#5f2730]">
                <Link href="#reservation">Reserve a Table</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#DDA15E] bg-transparent text-[#FEFAE0]">
                <Link href="#menu">Order Takeout</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm text-[#FEFAE0]"><MapPin className="h-4 w-4 text-[#DDA15E]" />SoHo, NYC</div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm text-[#FEFAE0]"><Clock3 className="h-4 w-4 text-[#DDA15E]" />Open Daily</div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm text-[#FEFAE0]"><Utensils className="h-4 w-4 text-[#DDA15E]" />Dine-in • Takeout • Catering</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl">
            <Image src={imageSrc} alt="Bella Notte hero dish" width={1200} height={800} unoptimized className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#722F37]/45 to-transparent" />
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}
