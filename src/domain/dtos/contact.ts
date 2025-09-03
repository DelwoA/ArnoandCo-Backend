import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9\s()\-]{7,}$/;

export const contactDTO = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(emailRegex, "Please provide a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .regex(phoneRegex, "Please provide a valid phone number"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type ContactDTO = z.infer<typeof contactDTO>;
