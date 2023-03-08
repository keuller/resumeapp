import { H3Event } from 'h3';

export default defineEventHandler((ev: H3Event) => {
    return {
        status: 'OK',
        message: 'It works!'
    }
});
