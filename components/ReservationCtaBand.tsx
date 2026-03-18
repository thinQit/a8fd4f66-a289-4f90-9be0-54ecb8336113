"use client";

import Link from 'next/link'
import { ShieldCheck, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReservationCtaBand() {
  return (
    <section className="bg-[#722F37] px-4 py-14 text-[#FEFAE0] md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#DDA15E]">Reserve Tonight</p>
          <h3 className="mt-2 font-serif text-3xl">Your table is waiting at Bella Notte.</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#FEFAE0]/90">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[#DDA15E]" />4.9 average rating</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#DDA15E]" />Private dining available</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#DDA15E]" />Instant confirmation</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button asChild className="bg-[#DDA15E] text-[#2a1a1d] hover:bg-[#c98b49]">
            <Link href="#reservation">Book Now</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#DDA15E] text-[#FEFAE0]">
            <Link href="#menu">View Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
