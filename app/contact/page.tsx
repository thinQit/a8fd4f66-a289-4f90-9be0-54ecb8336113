export const dynamic = 'force-dynamic';

import ContactForm from "@/components/ContactForm";
import LocationMapSection from "@/components/LocationMapSection";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";

export default function ContactPage() {
  return (
    <main>
      <SeoHead title="Contact | Bella Notte" description="Contact Bella Notte for reservations, catering, private events, and general inquiries." />

      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577055/site-images/restaurant/12436190.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Contact Bella Notte</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">Questions, special requests, press inquiries, or private events—reach out and we’ll respond quickly.</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <ContactForm
              headline="Send a message"
              subheadline="We typically reply within 1 business day."
              contactInfo={[
                { icon: "Mail", label: "Reservations", value: "reservations@bellanotte.com" },
                { icon: "Mail", label: "Catering", value: "catering@bellanotte.com" },
                { icon: "Mail", label: "General", value: "hello@bellanotte.com" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <LocationMapSection />
        </section>
      </ScrollReveal>
    </main>
  );
}
