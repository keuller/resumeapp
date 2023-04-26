import { H3Event, setResponseStatus, readBody } from 'h3';
import { type UpdateSkillSet, SkillSet } from '../skillset.service';

export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const oid = params?.oid ?? '';
    const data = await readBody<UpdateSkillSet>(ev);
    const result = await SkillSet.updateValue(oid, data);

    setResponseStatus(ev, 200);
    return {
        message: result.message
    }
});
