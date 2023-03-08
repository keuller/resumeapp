import { H3Event } from 'h3';
import { Query } from 'node-appwrite';
import db from '~/lib/client';

const DB = 'resumedb-dev';
const COLLECTION = '640475a2a7b08deb0966';

export default defineEventHandler(async (ev: H3Event) => {
    const { params } = ev.context;
    const slug = params?.slug ?? '';

    const res = await db.listDocuments(DB, COLLECTION, [
        Query.equal('slug', [slug])
    ]);

    if(!res || res.total < 1) {
        throw createError({ statusCode: 404, message: 'Resume not found' })
    }

    const docs = res.documents[0];
    return {
        status: 'OK',
        firstName: docs.first_name,
        lastName: docs.last_name,
        email: docs.email,
        jobTitle: docs.job_title,
        avatar: docs.avatar,
        github: docs.github,
        gitlab: docs.gitlab,
        linkedin: docs.linkedin
    }
});
