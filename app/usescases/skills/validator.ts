import { z } from "zod";

export const SkillCreateSchema = z.object({
    personId: z.string().length(36).trim(),
    skillName: z.string().trim().min(2),
    skillLevel: z.number().min(1).max(5)
})

export const SkillUpdateSchema = z.object({
    oid: z.string().length(36),
    skillName: z.string().trim().min(2),
    skillLevel: z.number().min(1).max(5)
})

export type SkillCreateRequest = z.infer<typeof SkillCreateSchema>;
export type SkillResponse = Record<string, string>;


export type SkillUpdateRequest = z.infer<typeof SkillUpdateSchema>;
