import { H3Event, setResponseStatus, readBody } from 'h3';
import { type StackRequest, Project } from '../project.service';

export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const oid = params?.oid ?? '';
    const data = await readBody<StackRequest>(ev);

    if (data.op === 'add') {
        const result = await Project.addStack(oid, data.value);
        setResponseStatus(ev, 201);
        return { message: result.message }
    }

    await Project.delStack(oid, data.value);
    setResponseStatus(ev, 204);
    return {}
});
