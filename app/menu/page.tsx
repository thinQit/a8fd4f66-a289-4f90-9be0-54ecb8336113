export const dynamic = 'force-dynamic';

import SectionHeader from "@/components/SectionHeader";
import MenuItemCard from "@/components/MenuItemCard";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Menu | Bella Notte",
  description:
    "Explore Bella Notte's full dinner menu, from antipasti and handmade pasta to secondi and dolci.",
};

export default function MenuPage() {
  const categories = [
    {
      name: "Antipasti",
      items: [
        { name: "Burrata & Roasted Grapes", description: "Rosemary honey, pistachio, grilled sourdough.", price: 16 },
        { name: "Calamari Fritti", description: "Lemon aioli, pickled chili, parsley.", price: 18 },
        { name: "Arancini al Tartufo", description: "Fontina, marinara.", price: 15 },
        { name: "Insalata Cesare alla Romana", description: "Little gems, anchovy dressing, pangrattato, pecorino.", price: 14 },
      ],
    },
    {
      name: "Pasta (House-made)",
      items: [
        { name: "Tagliatelle Bolognese", description: "Slow-cooked ragù, parmigiano-reggiano.", price: 28 },
        { name: "Cacio e Pepe", description: "Pecorino romano, black pepper, butter emulsion.", price: 24 },
        { name: "Spicy Vodka Rigatoni", description: "Calabrian chili, tomato-vodka cream, basil, stracciatella.", price: 26 },
        { name: "Mushroom Ravioli", description: "Brown butter, sage, toasted hazelnut.", price: 27 },
      ],
    },
  ];

  return (
    <main>
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10875172.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">The full Bella Notte menu</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">Italian classics, seasonal specials, and house-made pasta—crafted for sharing (or not).</p>
        </div>
      </section>

      {categories.map((category) => (
        <ScrollReveal key={category.name}>
          <section className="py-20 md:py-28 bg-background animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeader headline={category.name} subheadline="Prices subject to seasonal changes. Ask your server about tonight’s specials." />
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {category.items.map((item) => (
                  <div key={item.name} className="card-hover">
                    <MenuItemCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <CTAVortex
          title="Planning a celebration?"
          subtitle="Ask about family-style menus and catering packages for groups of 10–60."
          ctaLabel="Explore Catering"
          ctaHref="/catering"
          secondaryCtaLabel="Reserve a Table"
          secondaryCtaHref="/reservations"
        />
      </section>
    </main>
  );
}
