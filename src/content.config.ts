import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Validation rules from docs/02-content-model.md. The build fails when
// alt text or a summary is missing, a project is `pending` and not a draft,
// or a project's role does not match an Experience file.

const yearMonth = z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM, e.g. 2025-01');

const experience = defineCollection({
  // The file name is the role's id (e.g. tapestry.md -> "tapestry").
  loader: glob({ pattern: '*.md', base: './content/experience' }),
  schema: z.object({
    role: z.string(),
    organization: z.string().optional(),
    location: z.string().optional(),
    startDate: yearMonth,
    endDate: yearMonth.optional(), // empty means "Present"
    kind: z.enum(['role', 'summary']).default('role'),
    dateLabel: z.string().optional(), // for summary entries, e.g. "2018 – 2021"
    open: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  // The file name is the URL slug: /projects/<file-name>
  loader: glob({ pattern: '*.md', base: './content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        subtitle: z.string(),
        summary: z.string().min(1, 'summary is required'),
        role: reference('experience'),
        tools: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        date: z.coerce.date(),
        featured: z.boolean().default(false),
        order: z.number().default(99),
        cover: image(),
        coverAlt: z.string().min(1, 'coverAlt is required'),
        clearance: z.enum(['cleared', 'redacted', 'pending']),
        draft: z.boolean().default(false),
      })
      .refine((p) => !(p.clearance === 'pending' && !p.draft), {
        message: 'A project with clearance "pending" must stay a draft (docs/08).',
        path: ['clearance'],
      }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/pages' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string().min(1, 'summary is required'),
        // home
        headline: z.string().optional(),
        tagline: z.string().optional(),
        intro: z.string().optional(),
        heroImage: image().optional(),
        heroAlt: z.string().optional(),
        featuredCount: z.number().min(1).max(6).optional(),
        // contact
        email: z.email().optional(),
        linkedin: z.url().optional(),
        github: z.url().optional(),
        resumePdf: z.string().optional(),
        // beyond the map
        rows: z
          .array(
            z.object({
              paragraphs: z.array(z.string()).min(1),
              image: image(),
              alt: z.string().min(1, 'every photo needs alt text'),
              caption: z.string().optional(),
              side: z.enum(['left', 'right']).default('right'),
            }),
          )
          .optional(),
      })
      .refine((p) => !p.heroImage || (p.heroAlt && p.heroAlt.length > 0), {
        message: 'heroAlt is required when heroImage is set',
        path: ['heroAlt'],
      }),
});

const skills = defineCollection({
  loader: file('content/data/skills.yaml'),
  schema: z.object({ group: z.string(), items: z.array(z.string()).min(1) }),
});

const education = defineCollection({
  loader: file('content/data/education.yaml'),
  schema: z.object({
    qualification: z.string(),
    institution: z.string(),
    startYear: z.number(),
    endYear: z.number(),
  }),
});

export const collections = { experience, projects, pages, skills, education };
