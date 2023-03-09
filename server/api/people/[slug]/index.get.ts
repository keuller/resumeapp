import { H3Event } from 'h3';
import { Query } from 'node-appwrite';
import db from '~/lib/client';
import type { SkillSet, Job } from '~/types';

const DB = 'resumedb-dev';
const COLLECTION = '640475a2a7b08deb0966';

type SkillSetView = Omit<SkillSet, "oid" | "createdAt">;

// load all skillset docs accordinly to the person's ID
async function loadSkillSet(personId: string): Promise<Array<SkillSetView>> {
    const COLL_NAME = '6409ccbad3937a5e7490';
    const res = await db.listDocuments(DB, COLL_NAME, [
        Query.equal('person_id', [personId]),
    ]);

    if (!res || res.total < 1) return [];

    let outcome: SkillSetView[] = [];
    for(const doc of res.documents) {
        const item: SkillSetView = {
            name: doc.nane,
            category: doc.category,
            value: doc.value
        }
        outcome = [...outcome, item]
    }
    return outcome;
}

// load all jobs
async function loadJobs(personId: String): Promise<Array<Job>> {
    const COLL_NAME = '640475d3244123ffa68b';
    const res = await db.listDocuments(DB, COLL_NAME, [
        Query.equal('person_id', [personId]),
    ]);

    if (!res || res.total < 1) return [];

    let outcome: Job[] = [];
    for(const doc of res.documents) {
        const item: Job = {
            company: doc.nane,
            jobTitle: doc.category,
            startDate: doc.job_start,
            endDate: doc.job_end,
            mode: doc.mode,
            createdAt: doc.created_at
        }
        outcome = [...outcome, item]
    }
    return outcome;
}

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
    const docId = docs.$id;
    const [skillsets, jobs] = await Promise.all([
        loadSkillSet(docId),
        loadJobs(docId)
    ]);

    return {
        status: 'OK',
        firstName: docs.first_name,
        lastName: docs.last_name,
        email: docs.email,
        jobTitle: docs.job_title,
        avatar: docs.avatar,
        github: docs.github,
        gitlab: docs.gitlab,
        linkedin: docs.linkedin,
        skillsets,
        jobs
    }
});
