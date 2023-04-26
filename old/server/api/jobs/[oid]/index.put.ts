import { H3Event, setResponseStatus, readBody } from 'h3';
import { type JobUpdateRequest, Job } from '../job.service';

export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const oid = params?.oid ?? '';
    const data = await readBody<JobUpdateRequest>(ev);
    const result = await Job.update(oid, data);

    setResponseStatus(ev, 200);
    return {
        message: result.message
    }
});
