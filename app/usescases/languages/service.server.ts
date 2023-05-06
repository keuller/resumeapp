import { validate, isSuccess } from "~/lib/schema.server";
import { v4 as uuidv4 } from 'uuid';
import { createFail, createSuccess, ServiceFail, ServiceResult, } from "~/lib/serviceResult.server";
import { LanguageCreateRequest, LanguageCreateSchema, LanguageResponse, LanguageUpdateRequest, LanguageUpdateSchema } from "./validator";
import { LanguageEntity } from "./entity.server";
import { db } from "~/lib/db.server";
import { eq } from "drizzle-orm";

export async function addLanguage(data: LanguageCreateRequest): Promise<ServiceResult<LanguageResponse>>{
    const result = validate(LanguageCreateSchema, data);
    if(!isSuccess(result)){
        return result as ServiceFail;
    }

    const language = Object.assign(data, {
        oid: uuidv4(),
        createdAt: new Date()
    });

    console.log(language);
    const res = await db.insert(LanguageEntity).values(language);
    console.log(res);

    if(res.rowCount < 1){
        return createFail({"message": "Fail to create a new Language record."})
    }

    return createSuccess({
        message: "Language has been added.",
        oid: language.oid
    });
}

export async function updateLanguage(data: LanguageUpdateRequest): Promise<ServiceResult<LanguageResponse>>{
    const result = validate(LanguageUpdateSchema, data);
    if (!isSuccess(result)) {
        return result as ServiceFail;
    }

    const res = await db.update(LanguageEntity)
                        .set({language: data.language, languageLevel: data.languageLevel})
                        .where(eq(LanguageEntity.oid, data.oid))

    if(res.rowCount < 1) {
        return createFail({ "message": "Fail to update the Language record."})
    }

    return createSuccess({
        message: "Language has been updated.",
        oid: data.oid
    });                        
}

export async function deleteLanguage(oid: string): Promise<ServiceResult<LanguageResponse>>{
    const res = await db.delete(LanguageEntity).where(eq(LanguageEntity.oid, oid));

    if(res.rowCount < 1) {
        return createFail({ "message": "Fail to delete the Language record."})
    }

    return createSuccess({
        message: "Language has been deleted.",
    }); 
}