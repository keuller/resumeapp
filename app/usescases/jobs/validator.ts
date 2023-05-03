import { z } from 'zod';

export const JobCreateSchema = z.object({
    company: z.string().trim().min(5),
    jobTitle: z.string().trim().min(5),
    personId: z.string().length(36).trim(),
    startDate: z.date(),
    endDate: z.date().optional(),
    mode: z.number().min(1).max(5)
});

export const JobUpdateDates = z.object({
    oid: z.string().length(36),
    startDate: z.date(),
    endDate: z.date().optional()
});

export type JobCreateRequest = z.infer<typeof JobCreateSchema>;
export type JobResponse = Record<string, string>;

export type JobUpdateRequest = z.infer<typeof JobUpdateDates>;
