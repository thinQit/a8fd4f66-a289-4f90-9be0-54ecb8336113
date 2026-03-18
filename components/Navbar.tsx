'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logo = 'Bella Notte'
  phone = '(212) 555-0199'
  navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Location', href: '#location' },
  ]
  reserveHref = '#reservation'
  orderHref = '#menu'
}

export default function Navbar({
  logo = 'Bella Notte',
  phone = '(212) 555-0199',
  navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Location', href: '#location' },
  ],
  reserveHref = '#reservation',
  orderHref = '#menu',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-serif text-2xl font-bold text-[#722F37]">
          {logo}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium hover:text-[#722F37]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={'tel:' + phone.replace(/\D/g, '')} className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-[#606C38]" />
            {phone}
          </a>
          <Button asChild variant="outline" className="border-[#DDA15E] text-[#722F37]">
            <Link href={orderHref}>Order</Link>
          </Button>
          <Button asChild className="bg-[#722F37] text-white hover:bg-[#5f2730]">
            <Link href={reserveHref}>Reserve</Link>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Open menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={cn('border-t border-border/60 bg-background md:hidden', open ? 'block' : 'hidden')}>
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block font-medium">
              {link.label}
            </Link>
          ))}
          <a href={'tel:' + phone.replace(/\D/g, '')} className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-[#606C38]" />
            {phone}
          </a>
          <div className="grid grid-cols-2 gap-3">
            <Button asChild variant="outline" className="border-[#DDA15E] text-[#722F37]">
              <Link href={orderHref}>Order</Link>
            </Button>
            <Button asChild className="bg-[#722F37] text-white hover:bg-[#5f2730]">
              <Link href={reserveHref}>Reserve</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
