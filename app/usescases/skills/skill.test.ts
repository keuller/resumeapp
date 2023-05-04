import { describe, expect, test } from "vitest";
import { ServiceSuccess } from "~/lib/serviceResult.server";
import { SkillService, type SkillModel } from "~/usescases/skills";

const createSkill: SkillModel.SkillCreateRequest = {
    personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
    skillName: 'JavaScript',
    skillLevel: 2
}

describe('Skills - use cases', () => {
    test('Create a new skill', async () => {
        const result = await SkillService.addSkill(createSkill);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<SkillModel.SkillResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.oid).not.toBeNull();
    })
})