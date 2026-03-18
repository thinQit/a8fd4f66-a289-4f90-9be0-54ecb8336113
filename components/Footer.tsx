'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SocialLinks from '@/components/SocialLinks'

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  brand: string
  description?: string
  columns: FooterColumn[]
  copyright?: string
}

export default function Footer({
  brand = 'Bella Notte',
  description = 'Modern Italian dining in the heart of Austin.',
  columns = [],
  copyright,
}: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold">{brand}</h3>
          <p className="mt-3 text-sm text-muted">{description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-accent">{col.title}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) =>
                l.href.startsWith('http') || l.href.startsWith('mailto:') || l.href.startsWith('tel:') ? (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:underline">
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-semibold text-accent">Newsletter</h4>
          <p className="mt-2 text-sm text-muted">Get seasonal menus, events, and chef specials.</p>
          <div className="mt-3 flex gap-2">
            <Input placeholder="Email address" className="border-border bg-background text-foreground" />
            <Button className="bg-accent text-background hover:bg-accent/90">Join</Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>{copyright ? copyright : <>© {new Date().getFullYear()} {brand}. All rights reserved.</>}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
