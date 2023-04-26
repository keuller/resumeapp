export interface ServiceSuccess<T> {
    kind: 'success',
    value: T
}

export interface ServiceFail {
    kind: 'fail',
    reason: Record<string, string>
}

export type ServiceResult<T> = ServiceSuccess<T> | ServiceFail;

export function createSuccess<T>(value: T): ServiceSuccess<T> {
    return {
        kind: 'success',
        value
    } satisfies ServiceSuccess<T>
}

export function createFail(reason: Record<string, string>): ServiceFail {
    return {
        kind: 'fail',
        reason
    } satisfies ServiceFail
}
