"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CateringPackages() {
  const tiers = [
    { name: 'Classic', price: '$28/person', features: ['Two pastas', 'Garden salad', 'Garlic focaccia'] },
    { name: 'Signature', price: '$42/person', features: ['Three pastas', 'Two entrées', 'Dessert platter'] },
    { name: 'Grand Feast', price: '$58/person', features: ['Custom menu', 'Chef carving station', 'Premium dessert bar'] },
  ]

  return (
    <section className="bg-[#FEFAE0] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-4xl text-[#722F37]">Catering Packages</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="rounded-xl p-6">
              <h3 className="font-serif text-2xl text-[#722F37]">{tier.name}</h3>
              <p className="mt-2 font-semibold text-[#606C38]">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {tier.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <Button className="mt-6 w-full bg-[#722F37] text-white hover:bg-[#5f2730]">Inquire</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
