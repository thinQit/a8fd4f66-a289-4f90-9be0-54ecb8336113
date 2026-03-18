'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock, CalendarDays } from 'lucide-react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = {
  Mail,
  MapPin,
  Phone,
  Clock,
  CalendarDays,
};

export default function ContactForm({
  headline = 'Reservations & Private Dining',
  subheadline = 'Planning a romantic dinner, group celebration, or private event? Send your details and our team will confirm availability shortly.',
  contactInfo = [
    { icon: 'Phone', label: 'Reservations', value: '(555) 013-2647' },
    { icon: 'Mail', label: 'Email', value: 'hello@ambertable.com' },
    { icon: 'MapPin', label: 'Address', value: '148 Olive Grove Avenue, Downtown District' },
    { icon: 'Clock', label: 'Hours', value: 'Mon–Thu 5:00 PM–10:00 PM, Fri–Sun 4:30 PM–11:00 PM' },
  ],
}: Partial<ContactFormProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="rounded-xl border border-border bg-card shadow-md">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none ring-ring transition focus-visible:ring-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none ring-ring transition focus-visible:ring-2"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-foreground">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none ring-ring transition focus-visible:ring-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium text-foreground">
                        Party Size
                      </label>
                      <input
                        id="guests"
                        type="number"
                        min={1}
                        placeholder="2"
                        className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none ring-ring transition focus-visible:ring-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="occasion" className="text-sm font-medium text-foreground">
                      Occasion
                    </label>
                    <input
                      id="occasion"
                      placeholder="Anniversary, birthday, business dinner..."
                      className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none ring-ring transition focus-visible:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Special Requests
                    </label>
                    <textarea
                      id="message"
                      placeholder="Dietary preferences, seating requests, or event details..."
                      rows={5}
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-ring transition focus-visible:ring-2"
                    />
                  </div>
                  <Button type="submit" className="w-full transition-all duration-200 hover:scale-105">
                    Send Reservation Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
            {contactInfo && contactInfo.length > 0 && (
              <div className="flex flex-col justify-center space-y-8">
                {contactInfo.map(function (info, i) {
                  const Icon = iconMap[info.icon] || Mail;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="rounded-full border border-border bg-background p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
