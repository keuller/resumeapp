import { z } from 'zod';

export const HasOID = z.object({
    oid: z.string().max(36).trim()
});

export function transformErrors(error: z.ZodError): Record<string, string> {
    let reason = {} as Record<string, string>;
    const errors = error.flatten();
    const fields = Object.keys(errors.fieldErrors);

    for(const field of fields) {
        //@ts-ignore
        reason[field] = errors.fieldErrors[field][0];
    }
    return reason;
}
