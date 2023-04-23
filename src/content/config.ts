import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		tags: z.array(z.string()),
		description: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		imgUrl: z.string(),
		draft: z.boolean().optional().default(false),
	}),
});

const projectsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		draft: z.boolean().optional().default(false),
	})
});

export const collections = {
	blog: blogCollection,
	projects: projectsCollection,
};