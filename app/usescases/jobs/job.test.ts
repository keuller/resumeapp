import { test, describe, expect } from 'vitest';
import type { ServiceFail, ServiceSuccess } from "~/lib/serviceResult.server";
import { JobService, type JobModel } from "~/usescases/jobs";

const createJob: JobModel.JobCreateRequest = {
    company: 'Acme Test Inc',
    personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
    jobTitle: 'Test Job',
    mode: 1,
    startDate: new Date()
}

describe('jobs - use cases', () => {
    let oid = '';

    test('Create a new Job', async () => {
        const result = await JobService.addJob(createJob);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<JobModel.JobResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.oid).not.toBeNull();
        oid = outcome.value.oid;
    });

    test('Fail to create Job', async () => {
        const result = await JobService.addJob({
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

    test('remove Remove Job', async () => {
        const result = await JobService.remove(oid);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<JobModel.JobResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.message).eq("Job has been removed.")
    });
});
