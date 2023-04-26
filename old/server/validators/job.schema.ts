import { z } from 'zod';

const HasOID = z.object({
    oid: z.string().trim(),
})

export const JobSchema = z.object({
    company: z.string().trim().min(5),
    jobTitle: z.string().trim().min(5),
    personId: z.string().trim(),
    startDate: z.date(),
    endDate: z.date().optional(),
    mode: z.number().min(1).max(5)
});

export const JobSchemaWithOID = JobSchema.merge(HasOID);
