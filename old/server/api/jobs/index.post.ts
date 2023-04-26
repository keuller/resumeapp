import { H3Event, setResponseStatus, readBody } from 'h3';
import { type JobRequest, Job } from './job.service';

export default defineEventHandler(async (ev: H3Event) => {
    const data = await readBody<JobRequest>(ev);
    const result = await Job.add(data);

    setResponseStatus(ev, 201);
    return result;
});
