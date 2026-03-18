export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  dietary?: string[];
}

export interface MenuCategory {
  label?: string;
  name?: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  source: string;
  rating: number;
  quote: string;
}

export interface ApiResponse {
  ok: boolean;
  message: string;
}

export interface ReservationPayload {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  occasion?: string;
  notes?: string;
}

export interface CateringPayload {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  serviceType: string;
  notes?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  topic: string;
  message: string;
}
