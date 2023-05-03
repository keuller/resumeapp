import { z } from 'zod';
import { type ServiceResult, createFail, createSuccess } from "~/lib/serviceResult.server";

export const HasOID = z.object({
    oid: z.string().max(36).trim()
});

export const HasCreatedAt = z.object({
    createdAt: z.date()
});

export function validate<T>(schema: z.ZodObject, model: T): ServiceResult<T> {
    const result = schema.safeParse(model);
    if (result.success) {
        return createSuccess<T>(model);
    }

    const reason = transformErrors(result.error);
    return createFail(reason);
}

export function isSuccess<T>(svc: ServiceResult<T>): boolean {
    if(!svc) return false;
    return Object.is(svc.kind, 'success');
}

function transformErrors(error: z.ZodError): Record<string, string> {
    let reason = {} as Record<string, string>;
    const errors = error.flatten();
    const fields = Object.keys(errors.fieldErrors);

    for(const field of fields) {
        //@ts-ignore
        reason[field] = errors.fieldErrors[field][0];
    }
    return reason;
}
