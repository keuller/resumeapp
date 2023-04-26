import { H3Event, setResponseStatus, readBody } from 'h3';
import { type UpdProjectRequest, Project } from '../project.service';

export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const oid = params?.oid ?? '';
    const data = await readBody<UpdProjectRequest>(ev);
    const result = await Project.update(oid, data);

    setResponseStatus(ev, 200);
    return {
        message: result.message
    }
});
