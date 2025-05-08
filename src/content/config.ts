import { defineCollection, z, reference } from "astro:content";

// z => Zod schema
const products = defineCollection({
    schema: z.object({
      name: z.string(),
      img: z.string(),
      description: z.string(),
      descriptionLong: z.string(),
      presentacion: z.string(),
      segmento: z.string(),
      technicalSheet: z.object({
        img: z.string(),
        url: z.string().url(),
      }),
      category: reference('categories'), // ← campo que enlaza con categorías
      caracteristicas: z.array(z.string())
    }),
  });

const categories = defineCollection({
    schema: z.object({
        name: z.string(),
        img: z.string(),
        // description: z.string()
    }),
});

export const collections = {
    products,
    categories
  };