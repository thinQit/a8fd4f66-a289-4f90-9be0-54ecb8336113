import { z } from "zod";

const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;

export const reservationSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  partySize: z.string().min(1, "Party size is required"),
  occasion: z.string().max(120).optional().default(""),
  notes: z.string().max(2000).optional().default(""),
});

export const cateringSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  eventDate: z.string().min(1, "Event date is required"),
  guestCount: z.string().min(1, "Guest count is required"),
  serviceType: z.string().min(1, "Service type is required"),
  notes: z.string().max(4000).optional().default(""),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Invalid email address"),
  topic: z.string().min(1, "Topic is required").max(120),
  message: z.string().min(1, "Message is required").max(4000),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
export type CateringInput = z.infer<typeof cateringSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
