export const dynamic = 'force-dynamic';

import TeamGrid from "@/components/TeamGrid";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main>
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577096/site-images/restaurant/12324704.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Italian tradition, Austin energy</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">Bella Notte is a neighborhood restaurant built around handmade pasta, seasonal ingredients, and hospitality that feels personal.</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader headline="Our story" subheadline="A love letter to late dinners, great wine, and the kind of pasta you remember." />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                "Bella Notte started with a simple idea: serve Italian food that’s rooted in tradition but feels right for today—lighter, seasonal, and meant to be shared.",
                "We make pasta daily, build sauces from scratch, and keep our dining room warm and lively.",
                "Our team is obsessed with details—from the first sip of a spritz to the last bite of tiramisu.",
              ].map((text, index) => (
                <article key={index} className="rounded-xl shadow-md hover:shadow-lg transition-shadow bg-card border border-border p-6 card-hover">
                  <p className="text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <TeamGrid
              headline="Meet the team"
              subheadline="The people behind the plates, pours, and warm welcomes."
              members={[
                {
                  name: "Lucia Romano",
                  title: "Executive Chef",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
                  bio: "Bologna-trained chef known for pasta technique and bold seasonal sauces.",
                },
                {
                  name: "Marco DeSantis",
                  title: "General Manager",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
                  bio: "Service-driven leader focused on pacing, details, and guest experience.",
                },
                {
                  name: "Elena Park",
                  title: "Beverage Director",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
                  bio: "Curates Italian-forward wines, spritzes, and an amaro program built for pairing.",
                },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
