export const dynamic = 'force-dynamic';

import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import SeoHead from "@/components/SeoHead";

export default function AccessibilityPage() {
  return (
    <main>
      <SeoHead title="Accessibility | Bella Notte" description="Bella Notte is committed to an accessible website experience for all guests." />

      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577044/site-images/restaurant/1121480.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Accessibility</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">We’re committed to providing an accessible website experience for all guests.</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader headline="Our approach" subheadline="We aim to follow best practices for readable typography, keyboard navigation, and clear content hierarchy." />
            <div className="mt-8 space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Standards</h2>
                <ul className="mt-3 list-disc pl-6 space-y-2">
                  <li>Semantic HTML and accessible form labels</li>
                  <li>Sufficient color contrast for text and UI elements</li>
                  <li>Keyboard navigable menus and focus states</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Feedback</h2>
                <p className="mt-3">Email hello@bellanotte.com with any accessibility feedback or requests.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
