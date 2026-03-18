export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuTabs from "@/components/MenuTabs";
import ReservationCtaBand from "@/components/ReservationCtaBand";
import ChefStorySplit from "@/components/ChefStorySplit";
import PhotoGalleryMasonry from "@/components/PhotoGalleryMasonry";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LocationMapSection from "@/components/LocationMapSection";
import StatsCounter from "@/components/StatsCounter";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="A modern Italian night out—handmade pasta, bold wines, zero rush."
          subheadline="Bella Notte serves seasonal Italian classics with a contemporary edge. Dine in, order takeout, or book catering for your next celebration."
          primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
          secondaryCta={{ label: "View Menu", href: "/menu" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg"
          badges={[
            "Dine-in • Takeout • Catering",
            "House-made pasta daily",
            "Vegetarian & gluten-free options",
          ]}
          quickInfo={{
            address: "214 W Magnolia Ave, Austin, TX 78701",
            phone: "(512) 555-0198",
            hoursSummary: "Open Tue–Sun • Dinner 4–10pm (Fri–Sat to 11pm)",
          }}
        />
      </div>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <MenuTabs />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <ReservationCtaBand />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <ChefStorySplit
            imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10135116.jpg"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <PhotoGalleryMasonry
            images={[
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577056/site-images/restaurant/110813.jpg", alt: "Tagliatelle bolognese with parmigiano and basil" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577096/site-images/restaurant/12324704.jpg", alt: "Burrata with roasted grapes and rosemary honey" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577055/site-images/restaurant/12436190.jpg", alt: "Bella Notte dining room with warm lighting and modern Italian decor" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577084/site-images/restaurant/10918168.jpg", alt: "Aperol spritz with orange slice at the bar" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg", alt: "Classic tiramisu dusted with cocoa" },
              { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577044/site-images/restaurant/1121480.jpg", alt: "Pan-roasted branzino with preserved lemon and broccolini" },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <TestimonialsCarousel />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-muted">
          <StatsCounter
            stats={[
              { value: "4.8/5", label: "Average rating" },
              { value: "12k+", label: "Happy diners served" },
              { value: "6", label: "Nights open each week" },
              { value: "60", label: "Guests for private events" },
            ]}
            bgColor="bg-muted"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up py-20 md:py-28 bg-background">
          <LocationMapSection />
        </div>
      </ScrollReveal>
    </main>
  );
}
