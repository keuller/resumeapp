import { type z } from 'zod';
import { HasOID, transformErrors } from '~/lib/schema.server';
import { type ServiceResult, createFail, createSuccess } from "~/lib/serviceResult.server";
import { PersonSchema } from "./person.schema";

export namespace People {
    export const PersonSchemaWithOID = PersonSchema.merge(HasOID);

    export type Model = z.infer<typeof PersonSchema>;

    export function validate(model: People.Model): ServiceResult<People.Model> {
        const result = PersonSchema.safeParse(model);
        if (result.success) {
            return createSuccess<People.Model>(model);
        }

        const reason = transformErrors(result.error);
        return createFail(reason);
    }
}
