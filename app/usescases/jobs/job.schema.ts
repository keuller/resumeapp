import { z } from 'zod';

export const JobSchema = z.object({
    company: z.string().trim().min(5),
    jobTitle: z.string().trim().min(5),
    personId: z.string().length(36).trim(),
    startDate: z.date(),
    endDate: z.date().optional(),
    mode: z.number().min(1).max(5)
});

