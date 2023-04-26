import { H3Event, setResponseStatus, readBody } from 'h3';
import { type UpdPersonRequest, Person } from '~/server/api/people/people.service';

export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const oid = params?.oid ?? '';
    const data = await readBody<UpdPersonRequest>(ev);

    const { message } = await Person.updateSocialMedias(oid, data);

    setResponseStatus(ev, 200);
    return { message }
});
