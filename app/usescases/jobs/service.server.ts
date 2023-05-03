import { v4 as uuidv4 } from 'uuid';
import { validate, isSuccess } from '~/lib/schema.server';
import {
    type ServiceResult,
    type ServiceFail,
    createSuccess,
    createFail
} from "~/lib/serviceResult.server";
import { db } from '~/lib/db.server';
import { JobEntity } from "./entity.server";
import { JobCreateSchema,
    type JobCreateRequest,
    type JobUpdateRequest,
    type JobResponse
} from './validator';
import { eq } from 'drizzle-orm';

export async function addJob(data: JobCreateRequest): Promise<ServiceResult<JobResponse>> {
    const result = validate(JobCreateSchema, data);
    if (!isSuccess(result)) {
        return result as ServiceFail;
    }

    // console.log('mode:', process.env.NODE_ENV);
    const job = Object.assign(data, {
        oid: uuidv4(),
        createdAt: new Date()
    });

    const res = await db.insert(JobEntity).values(job);
    if(res.rowCount < 1) {
        return createFail({ "message": "Fail to create a new Job record" })
    }

    return createSuccess({
        message: "Job has been added.",
        oid: res.fields.oid
    });
}

// export async function updateDates(data: JobUpdateRequest): Promise<> {

// }

export async function remove(oid: string): Promise<ServiceResult<JobResponse>> {
    const res = await db.delete(JobEntity).where(eq(JobEntity.oid, oid));
    if(res.rowCount < 1) {
        return createFail({ "message": "Fail to remove the Job record" })
    }

    return createSuccess({
        message: "Job has been removed."
    });
}
