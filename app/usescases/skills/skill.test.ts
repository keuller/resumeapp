import { describe, expect, test } from "vitest";
import { ServiceFail, ServiceSuccess } from "~/lib/serviceResult.server";
import { SkillService, type SkillModel } from "~/usescases/skills";

const createSkill: SkillModel.SkillCreateRequest = {
    personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
    skillName: 'javascript',
    skillLevel: 2
}

const updateSkill: SkillModel.SkillUpdateRequest = {
    oid: '',
    skillName: 'JavaScript',
    skillLevel: 5
}

describe('Skills - use cases', () => {
    let _oid = '';

    test('Create a new skill', async () => {
        const result = await SkillService.addSkill(createSkill);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<SkillModel.SkillResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.oid).not.toBeNull();
        _oid = outcome.value.oid;

    });

    test('Fail to create Skill', async () => {
        const result = await SkillService.addSkill({
            personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
            skillName: 'Js',
            skillLevel: 0
        });
        expect(result.kind).toBe('fail');

        const outcome = result as ServiceFail;

        expect(outcome.reason).not.toBeNull();
        expect(outcome.reason.skillLevel).toBe('Number must be greater than or equal to 1')

    });

    test('Update existing skill', async () => {
        const result = await SkillService.updateSkill({
            oid: _oid,
            skillName: 'JavaScript',
            skillLevel: 5
        });
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<SkillModel.SkillResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.message).eq('Skill has been updated.');
    })

    test('Delete existing skill', async () => {
        const result = await SkillService.deleteSkill(_oid);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<SkillModel.SkillResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.message).eq('Skill has been removed.');
    })
})