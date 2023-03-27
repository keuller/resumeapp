import { H3Event, setResponseStatus, readBody } from 'h3';
import { Project } from '../project.service';


export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const oid = params?.oid ?? '';

    if (oid === '') {
        throw createError({ statusCode: 400, message: 'No information provided' })
    }

    await Project.del(oid);

    setResponseStatus(ev, 204);
    return {}
});
