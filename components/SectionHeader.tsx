"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export default function SectionHeader({
  eyebrow = '',
  headline = 'Section headline',
  subheadline = '',
  primaryCtaLabel = '',
  primaryCtaHref = '#',
  secondaryCtaLabel = '',
  secondaryCtaHref = '#',
}: Partial<SectionHeaderProps>) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#606C38]">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">{headline}</h2>
      {subheadline ? <p className="mt-4 text-base text-muted-foreground md:text-lg">{subheadline}</p> : null}
      {(primaryCtaLabel || secondaryCtaLabel) ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {primaryCtaLabel ? (
            <Button asChild className="bg-[#722F37] text-white hover:bg-[#5f2730]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
          ) : null}
          {secondaryCtaLabel ? (
            <Button asChild variant="outline" className="border-[#DDA15E] text-[#722F37]">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
