import { z } from "zod";

export const LanguageCreateSchema = z.object({
    personId: z.string().length(36).trim(),
    language: z.string().min(3).max(15),
    languageLevel: z.number().min(1).max(5)
});

export const LanguageUpdateSchema = z.object({
    oid: z.string().length(36),
    language: z.string().min(3).max(20),
    languageLevel: z.number().min(1).max(5)
})

export type LanguageCreateRequest = z.infer<typeof LanguageCreateSchema>;
export type LanguageResponse = Record<string, string>;

export type LanguageUpdateRequest = z.infer<typeof LanguageUpdateSchema>;