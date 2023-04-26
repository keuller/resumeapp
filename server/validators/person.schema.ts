import { z } from 'zod';

export const PersonSchema = z.object({
    oid: z.string().trim(),
    firstName: z.string({
            required_error: 'First name is required'
        }).trim().min(3, 'First name must contain 3 chars'),
    lastName: z.string().trim().optional(),
    email: z.string({
            required_error: 'Email is required'
        }).trim().email('Invalid email address'),
    slug: z.string({
            required_error: 'Slug is required'
        }).trim().min(4, 'Slug must contain at least 4 chars'),
    jobTitle: z.string().trim().optional(),
    avatar: z.string().trim().optional(),
    linkedIn: z.string().trim().optional(),
    github: z.string().trim().optional(),
    gitlab: z.string().trim().optional(),
    twitter: z.string().trim().optional(),
    interests: z.array(z.string()).optional(),
    createdAt: z.date({
            required_error: 'Created at is required'
        }),
    updatedAt: z.date({
            required_error: 'Created at is required'
        }).optional()
});
