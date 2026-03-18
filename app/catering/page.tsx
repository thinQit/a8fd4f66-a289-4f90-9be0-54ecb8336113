export const dynamic = 'force-dynamic';

import CateringPackages from "@/components/CateringPackages";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";

export default function CateringPage() {
  return (
    <main>
      <SeoHead title="Catering | Bella Notte" description="Drop-off and full-service Italian catering for offices and celebrations in Austin." />

      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/12603336.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Catering that tastes like the restaurant</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">From office dinners to milestone celebrations—Bella Notte brings modern Italian comfort to your table.</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <CateringPackages />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="catering-form" className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <ContactForm
              headline="Tell us about your event"
              subheadline="We’ll reply within 1 business day with menu options and a clear quote."
              contactInfo={[
                { icon: "Phone", label: "Call", value: "(512) 555-0198" },
                { icon: "Mail", label: "Email", value: "catering@bellanotte.com" },
                { icon: "MapPin", label: "Service Area", value: "Austin Metro" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
