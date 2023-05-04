import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { db } from '~/lib/db.server';
import { validate, isSuccess } from "~/lib/schema.server";
import { createSuccess, createFail, ServiceFail, ServiceResult } from "~/lib/serviceResult.server";
import { SkillEntity } from './entity.server';
import { SkillCreateRequest, SkillCreateSchema, SkillResponse, SkillUpdateRequest, SkillUpdateSchema } from "./validator";

export async function addSkill(data: SkillCreateRequest): Promise<ServiceResult<SkillResponse>> {
    const result = validate(SkillCreateSchema, data);
    if (!isSuccess(result)) {
        return result as ServiceFail;
    }

    const skill = Object.assign(data, {
        oid: uuidv4(),
        createdAt: new Date()
    });

    const res = await db.insert(SkillEntity).values(skill);

    if (res.rowCount < 1) {
        return createFail({ "message": "Fail to create a new Skill record" });
    }

    return createSuccess({
        message: "Skill has been added",
        oid: skill.oid
    });
}

export async function updateSkill(data: SkillUpdateRequest): Promise<ServiceResult<SkillResponse>> {
    console.log("Information being sent to updateSkill: " + data);
    const result = validate(SkillUpdateSchema, data);
    if (!isSuccess(result)) {
        return result as ServiceFail;
    }

    const res = await db.update(SkillEntity)
        .set({ skillName: data.skillName, skillLevel: data.skillLevel })
        .where(eq(SkillEntity.oid, data.oid));

    if (res.rowCount < 1) {
        return createFail({ "message": "Fail to update the Skill record" })
    }

    return createSuccess({
        message: "Skill has been updated."
    });
}

export async function deleteSkill(oid: string): Promise<ServiceResult<SkillResponse>> {
    const res = await db.delete(SkillEntity).where(eq(SkillEntity.oid, oid));

    if (res.rowCount < 1) {
        return createFail({ "message": "Fail to remove the Skill record" })
    }

    return createSuccess({
        message: "Skill has been removed."
    });
}