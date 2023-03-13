import { H3Event } from 'h3';
import { Register } from '~/types';

export default defineEventHandler(async (ev: H3Event) => {
    const data = await readBody(ev) as Register;
    console.log('data:', data);

    ev.node.res.statusCode = 201;
    return {
        message: 'Your account has been created.'
    }
});
