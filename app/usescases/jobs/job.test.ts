import { test, describe, expect } from 'vitest';
import type { ServiceFail, ServiceSuccess } from "~/lib/serviceResult.server";
import { Job } from "./model";

const createJob: Job.Model = {
    company: 'Acme Test Inc',
    personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
    jobTitle: 'Test Job',
    mode: 1,
    startDate: new Date()
}

describe('job.model', () => {

    test('Create valid Job', () => {
        const result = Job.validate(createJob);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<Job.Model>;
        expect(outcome.value).not.toBeNull();
    });

    test('Fail to create Job', () => {
        const result = Job.validate({
            company: 'Acme Test Inc',
            personId: '',
            jobTitle: '',
            mode: 0,
            startDate: new Date()
        });

        expect(result.kind).toBe('fail');
        const outcome = result as ServiceFail;
        expect(outcome.reason).not.toBeNull();
        expect(outcome.reason.mode).toBe('Number must be greater than or equal to 1');
    });
});
