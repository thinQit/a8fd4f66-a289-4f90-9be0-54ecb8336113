"use client";

import { Card } from '@/components/ui/card'

interface MenuItemCardProps {
  name: string
  description: string
  price: number
  dietaryTags?: string[]
}

export default function MenuItemCard({
  name = 'Menu Item',
  description = 'Description',
  price = 0,
  dietaryTags = [],
}: Partial<MenuItemCardProps>) {
  return (
    <Card className="rounded-xl border border-border bg-card p-5 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl text-[#722F37]">{name}</h3>
        <p className="font-semibold text-[#606C38]">${price.toFixed(2)}</p>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {dietaryTags && dietaryTags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {dietaryTags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#DDA15E]/50 bg-[#FEFAE0] px-3 py-1 text-xs font-medium text-[#722F37]">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  )
}
