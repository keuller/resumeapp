import { H3Event, setResponseStatus, readBody } from 'h3';
import { Person } from '~/server/api/people/people.service';

type AddInterest = {
    userId: string,
    value: string
}

export default defineEventHandler(async (ev: H3Event) => {
    const data = await readBody<AddInterest>(ev);
    await Person.delInterest(data.userId, data.value);

    setResponseStatus(ev, 204);
    return {
    }
});
