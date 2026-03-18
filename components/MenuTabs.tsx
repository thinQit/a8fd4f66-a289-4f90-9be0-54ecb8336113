'use client'

import { useMemo, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import MenuItemCard from '@/components/MenuItemCard'

interface MenuItem {
  name: string
  description: string
  price: number
  dietaryTags: string[]
  category: string
}

export default function MenuTabs() {
  const [active, setActive] = useState('Pasta')

  const items: MenuItem[] = [
    { name: 'Tagliatelle al Tartufo', description: 'Fresh pasta, black truffle cream, Parmigiano.', price: 29, dietaryTags: ['Vegetarian'], category: 'Pasta' },
    { name: 'Rigatoni alla Vodka', description: 'San Marzano tomato, cream, basil, chili flakes.', price: 24, dietaryTags: ['Vegetarian'], category: 'Pasta' },
    { name: 'Branzino al Forno', description: 'Roasted Mediterranean sea bass, lemon, herbs.', price: 34, dietaryTags: ['Gluten-Free'], category: 'Secondi' },
    { name: 'Pollo Milanese', description: 'Crispy chicken cutlet, arugula, cherry tomato.', price: 28, dietaryTags: [], category: 'Secondi' },
    { name: 'Burrata e Pomodoro', description: 'Creamy burrata, heirloom tomato, basil oil.', price: 17, dietaryTags: ['Vegetarian', 'Gluten-Free'], category: 'Antipasti' },
    { name: 'Calamari Fritti', description: 'Crispy calamari, lemon aioli, marinara.', price: 18, dietaryTags: [], category: 'Antipasti' },
  ]

  const categories = Array.from(new Set(items.map((i) => i.category)))
  const visible = useMemo(() => items.filter((i) => i.category === active), [active])

  return (
    <section id="menu" className="bg-[#FEFAE0] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Menu" headline="Signature Italian Favorites" subheadline="Crafted daily with seasonal ingredients and old-world technique." />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={'rounded-full px-5 py-2 text-sm font-medium transition ' + (active === cat ? 'bg-[#722F37] text-white' : 'bg-white text-[#722F37] hover:bg-[#f4ecd0]')}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <MenuItemCard key={item.name} name={item.name} description={item.description} price={item.price} dietaryTags={item.dietaryTags} />
          ))}
        </div>
      </div>
    </section>
  )
}
