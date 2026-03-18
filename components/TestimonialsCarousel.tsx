'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function TestimonialsCarousel() {
  const testimonials = [
    { name: 'Ariana M.', quote: 'Best handmade pasta in Manhattan. Service was impeccable.', rating: 5 },
    { name: 'David R.', quote: 'Perfect date-night spot. Cozy, elegant, and absolutely delicious.', rating: 5 },
    { name: 'Lena P.', quote: 'Catering for our office was flawless. Everyone asked for seconds.', rating: 5 },
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [testimonials.length])

  const item = testimonials[index]

  return (
    <section id="testimonials" className="bg-[#f7f1dc] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#606C38]">Guest Love</p>
        <h2 className="mt-2 font-serif text-4xl text-[#722F37]">What Diners Say</h2>
        <Card className="mt-8 rounded-xl p-8 shadow-md">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#DDA15E] text-[#DDA15E]" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground">“{item.quote}”</p>
          <p className="mt-4 font-semibold text-[#722F37]">{item.name}</p>
        </Card>
      </div>
    </section>
  )
}
