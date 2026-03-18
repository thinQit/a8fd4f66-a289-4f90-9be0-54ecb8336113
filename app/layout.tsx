import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bella Notte | Modern Italian Restaurant in Austin",
  description:
    "Bella Notte is a modern Italian restaurant in downtown Austin serving house-made pasta, seasonal antipasti, and curated wines. Reserve a table, order takeout, or request catering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Bella Notte"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "Catering", href: "/catering" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve a Table"
          ctaHref="/reservations"
        />
        {children}
        <Footer
          brand="Bella Notte"
          description="Modern Italian dining in the heart of Austin."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "214 W Magnolia Ave, Austin, TX 78701", href: "https://maps.google.com/?q=214%20W%20Magnolia%20Ave%2C%20Austin%2C%20TX%2078701" },
                { label: "(512) 555-0198", href: "tel:+15125550198" },
                { label: "hello@bellanotte.com", href: "mailto:hello@bellanotte.com" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "Catering", href: "/catering" },
                { label: "Order Takeout", href: "/order" },
              ],
            },
            {
              title: "Follow",
              links: [
                { label: "Instagram", href: "https://instagram.com/bellanotteaustin" },
                { label: "Facebook", href: "https://facebook.com/bellanotteaustin" },
                { label: "TikTok", href: "https://tiktok.com/@bellanotteaustin" },
              ],
            },
          ]}
          copyright="© 2026 Bella Notte. All rights reserved."
        />
      </body>
    </html>
  );
}
