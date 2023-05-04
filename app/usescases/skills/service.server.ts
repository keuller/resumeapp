import { v4 as uuidv4 } from 'uuid';
import { db } from '~/lib/db.server';
import { validate, isSuccess } from "~/lib/schema.server";
import {  createSuccess,createFail, ServiceFail, ServiceResult } from "~/lib/serviceResult.server";
import { SkillEntity } from './entity.server';
import { SkillCreateRequest, SkillCreateSchema, SkillResponse } from "./validator";

export async function addSkill(data: SkillCreateRequest): Promise<ServiceResult<SkillResponse>>{
    const result = validate(SkillCreateSchema, data);
    if(!isSuccess(result)){
        return result as ServiceFail;
    }

    const skill = Object.assign(data, {
        oid: uuidv4(),
        createdAt: new Date()
    });

    const res = await db.insert(SkillEntity).values(skill);

    if(res.rowCount < 1) {
        return createFail({"message" : "Fail to create a new Skill record"});
    }

    return createSuccess({
        message: "Skill has been added",
        oid: res.fields.oid
    });
}