import { SITE } from "@config";
import { defineCollection, z } from "astro:content";
import type { TitleStyles } from "types";

const services = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      title: z.string(),
      styledTitle: z.array(z.object({ text: z.string(), style: z.string()}) satisfies z.ZodSchema<TitleStyles>),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { services };