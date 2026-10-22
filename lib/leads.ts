import { z } from "zod";
export const leadSchema = z
  .object({
    kind: z.enum(["pilot", "contact"]),
    business: z.string().trim().min(2).max(100),
    area: z.string().trim().min(2).max(100),
    type: z.string().trim().min(2).max(100),
    volume: z.string().min(1).max(30),
    phone: z
      .string()
      .regex(/^\+?[0-9 ()-]{9,20}$/)
      .refine(
        (v) =>
          v.replace(/\D/g, "").length >= 9 && v.replace(/\D/g, "").length <= 15,
      ),
    message: z.string().max(2000).optional(),
    consent: z.literal("yes"),
    website: z.string().max(200).optional(),
  })
  .refine((v) => v.kind !== "contact" || !!v.message?.trim(), {
    message: "A message is required for contact inquiries.",
  });
