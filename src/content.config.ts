import {defineCollection} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';

const projects = defineCollection({
    loader: glob({pattern: ['**/*.md', '**/*.mdx'], base: './src/content/projects'}),
    schema: ({image}) => z.object({
        title: z.string(),
        image: image(),
        aspect: z.union([z.literal("landscape"), z.literal("portrait"), z.literal("square")]),
        category: z.string(),
        role: z.string(),
        year: z.number(),
        duration: z.string(),
        overview: z.string(),
        summary: z.string(),
        additionalText: z.string()
    })
});

export const collections = {
    projects,
};