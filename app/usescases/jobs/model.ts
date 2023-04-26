import { type z } from 'zod';
import { HasOID, transformErrors } from '~/lib/schema.server';
import { type ServiceResult, createFail, createSuccess } from "~/lib/serviceResult.server";
import { JobSchema } from "./job.schema";

export namespace Job {
    export const JobSchemaWithOID = JobSchema.merge(HasOID);

    export type Model = z.infer<typeof JobSchema>;

    export function validate(model: Job.Model): ServiceResult<Job.Model> {
        const result = JobSchema.safeParse(model);
        if (result.success) {
            return createSuccess<Job.Model>(model);
        }

        const reason = transformErrors(result.error);
        return createFail(reason);
    }
}
