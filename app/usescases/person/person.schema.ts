import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { z } from 'zod';

export const PersonSchema = z.object({
    firstName: z.string().min(3).trim(),
    lastName: z.string().min(3).trim(),
    email: z.string().email(),
    slug: z.string().min(3).trim(),
    jobTitle: z.string().min(3).trim().optional(),
    avatar: string,
    linkedIn: string,
    github: string,
    gitlab: string,
    twitter: string,
    interests: string[],
    createdAt: Date,
    updatedAt?: Date
});
