"use client";

import Link from 'next/link'
import { Facebook, Instagram, Music2 } from 'lucide-react'

export default function SocialLinks({
  links = [
    { icon: 'Instagram', href: 'https://instagram.com', label: 'Instagram' },
    { icon: 'Facebook', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'Music2', href: 'https://tiktok.com', label: 'TikTok' },
  ],
}: Partial<{ links: { icon: string; href: string; label: string }[] }>) {
  const iconMap = { Instagram, Facebook, Music2 } as Record<string, any>

  return (
    <div className="flex items-center gap-3">
      {links.map((item) => {
        const Icon = iconMap[item.icon] || Instagram
        return (
          <Link key={item.label} href={item.href} className="rounded-full border border-[#DDA15E]/40 p-2 hover:bg-[#DDA15E]/20" aria-label={item.label}>
            <Icon className="h-4 w-4" />
          </Link>
        )
      })}
    </div>
  )
}
