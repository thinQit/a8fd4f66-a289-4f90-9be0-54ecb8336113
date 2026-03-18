export const dynamic = 'force-dynamic';

import CTAVortex from "@/components/CTAVortex";
import ReservationForm from "@/components/ReservationForm";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";

export default function ReservationsPage() {
  return (
    <main>
      <SeoHead title="Reservations | Bella Notte" description="Reserve your table at Bella Notte in under a minute. Date night, celebrations, and spontaneous dinners welcome." />

      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577047/site-images/restaurant/10456027.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Reserve your night at Bella Notte</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">Choose a date, time, and party size. Add dietary notes and we’ll take care of the rest.</p>
        </div>
      </section>

      <ScrollReveal>
        <section id="reservation-form" className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <ReservationForm />
          </div>
        </section>
      </ScrollReveal>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <CTAVortex
          title="Need catering or a private dinner?"
          subtitle="Tell us your guest count and date—we’ll propose a menu and handle the details."
          ctaLabel="Catering & Events"
          ctaHref="/catering"
          secondaryCtaLabel="Contact Us"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
