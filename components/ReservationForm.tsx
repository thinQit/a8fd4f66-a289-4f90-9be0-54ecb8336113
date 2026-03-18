'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="reservation" className="bg-[#f7f1dc] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-md md:p-8">
        <h2 className="font-serif text-3xl text-[#722F37]">Reservation Request</h2>
        <p className="mt-2 text-sm text-muted-foreground">Share your preferred date and party details. We’ll confirm shortly.</p>
        <form
          className="mt-6 grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <Input placeholder="Full name" required />
          <Input type="email" placeholder="Email address" required />
          <Input type="tel" placeholder="Phone number" required />
          <Input type="date" required />
          <Input type="time" required />
          <Input type="number" min={1} max={20} placeholder="Party size" required />
          <div className="md:col-span-2">
            <Input placeholder="Dietary notes (optional)" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="w-full bg-[#722F37] text-white hover:bg-[#5f2730]">Request Reservation</Button>
          </div>
        </form>
        {submitted ? <p className="mt-4 text-sm font-medium text-[#606C38]">Thanks! Your request has been received.</p> : null}
      </div>
    </section>
  )
}
