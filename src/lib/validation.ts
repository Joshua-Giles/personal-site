import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(4000),
  // Honeypot — real users leave this empty.
  company: z.string().max(0).optional().or(z.literal(""))
});

export type ContactInput = z.infer<typeof contactSchema>;
