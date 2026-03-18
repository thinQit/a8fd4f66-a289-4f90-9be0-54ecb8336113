"use client";

import { MapPin, Car, Clock3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LocationMapSection() {
  return (
    <section id="location" className="bg-[#FEFAE0] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="Bella Notte map"
            src="https://www.google.com/maps?q=245+Mulberry+St,+New+York,+NY+10012&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl text-[#722F37]">Visit Bella Notte</h2>
          <div className="mt-6 space-y-4 text-sm">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#606C38]" />245 Mulberry St, New York, NY 10012</p>
            <p className="flex items-start gap-2"><Clock3 className="mt-0.5 h-4 w-4 text-[#606C38]" />Mon-Thu 4:30–10:00 • Fri-Sat 4:30–11:00 • Sun 4:00–9:30</p>
            <p className="flex items-start gap-2"><Car className="mt-0.5 h-4 w-4 text-[#606C38]" />Street parking and nearby garage at Spring St.</p>
          </div>
          <Button className="mt-6 bg-[#722F37] text-white hover:bg-[#5f2730]">Get Directions</Button>
        </div>
      </div>
    </section>
  )
}
