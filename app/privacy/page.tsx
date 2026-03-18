export const dynamic = 'force-dynamic';

import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";

export default function PrivacyPage() {
  return (
    <main>
      <SeoHead title="Privacy Policy | Bella Notte" description="Read how Bella Notte collects and uses information from forms and newsletter signups." />

      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Privacy Policy</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">How Bella Notte collects and uses information from forms and newsletter signups.</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader headline="Summary" subheadline="We collect only what we need to respond to requests and improve service." />
            <div className="mt-8 space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Information we collect</h2>
                <ul className="mt-3 list-disc pl-6 space-y-2">
                  <li>Reservation requests: name, phone, email, date/time, party size, and notes you provide.</li>
                  <li>Catering inquiries: contact details, event date, guest count, and event notes.</li>
                  <li>Newsletter: email address.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
