export const dynamic = 'force-dynamic';

import SectionHeader from "@/components/SectionHeader";
import MenuItemCard from "@/components/MenuItemCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Order Takeout | Bella Notte",
  description: "Order Bella Notte takeout online for easy pickup in downtown Austin.",
};

export default function OrderPage() {
  const items = [
    { name: "Spicy Vodka Rigatoni", description: "Creamy, bright, and just enough heat. Add chicken cutlet +$7.", price: 26 },
    { name: "Chicken Parm (Bella Notte Style)", description: "Crisp cutlet, san marzano, mozzarella, basil.", price: 31 },
    { name: "Caesar alla Romana", description: "Little gems, anchovy dressing, pangrattato, pecorino.", price: 14 },
    { name: "Tiramisu Classico", description: "The classic finish—espresso, mascarpone, cocoa.", price: 12 },
  ];

  return (
    <main>
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577084/site-images/restaurant/10918168.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Take Bella Notte home</h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl">Order takeout for pickup. Fresh pasta, crisp salads, and desserts that travel well.</p>
          <div className="mt-8">
            <Button asChild className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105">
              <a href="https://order.bellanotte.com" target="_blank" rel="noreferrer">Start an Order</a>
            </Button>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader headline="Takeout favorites" subheadline="A few top picks that hold up beautifully for the ride." />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {items.map((item) => (
                <div key={item.name} className="card-hover">
                  <MenuItemCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
