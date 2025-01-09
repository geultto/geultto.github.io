import { z } from "zod";

export const curationMetadataSchema = z.object({
  category: z.string(),
  originalTitle: z.string(),
  originalDescription: z.string(),
  author: z.string(),
  url: z.string(),
  ogTitle: z.string(),
  ogDescription: z.string(),
  ogImage: z.string() || z.null(),
});

export type CurationMetadata = z.infer<typeof curationMetadataSchema>;
