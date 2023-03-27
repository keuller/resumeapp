import { H3Event, setResponseStatus, readBody } from 'h3';
import { type AddSkillSet, SkillSet } from './skillset.service';

export default defineEventHandler(async (ev: H3Event) => {
    const data = await readBody<AddSkillSet>(ev);
    const result = await SkillSet.addSkill(data);

    setResponseStatus(ev, 201);
    return {
        oid: result.oid,
        message: 'Skill has been added.'
    }
});
