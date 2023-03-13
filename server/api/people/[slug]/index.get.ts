import { H3Event } from 'h3';
import { Query } from 'node-appwrite';
import { db } from '~/lib/client';
import type { SkillSet, Job, Project } from '~/types';

const DB = 'resumedb-dev';
const COLLECTION = '640475a2a7b08deb0966';

type SkillSetView = Omit<SkillSet, "oid" | "createdAt">;
type ProjectView = Omit<Project, "createdAt">;
type JobView = Omit<Job, "createdAt">;

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

    return outcome.sort((s1, s2) => {
        const val1 = Number(s1.value);
        const val2 = Number(s2.value);
        if (isNaN(val1) || isNaN(val2)) return 0;
        if(val1 < val2) return 1;
        if(val1 === val2) return 0;
        return -1;
    });
}

// load all jobs
async function loadJobs(personId: string): Promise<Array<JobView>> {
    const COLL_NAME = '640475d3244123ffa68b';
    const res = await db.listDocuments(DB, COLL_NAME, [
        Query.equal('person_id', [personId]),
        Query.orderAsc('job_start')
    ]);

    if (!res || res.total < 1) return [];

    let outcome: JobView[] = [];
    for(const doc of res.documents) {
        const startDate = new Date(`${doc.job_start}T01:00:00.000Z`);
        const endDate = (doc.job_end !== null ? new Date(`${doc.job_end}T23:59:00.000Z`) : null);
        const item: JobView = {
            company: doc.company,
            jobTitle: doc.job_title,
            startDate,
            endDate,
            mode: doc.mode
        }
        outcome = [...outcome, item];
    }

    return outcome.sort((j1, j2) => {
        if(j1.startDate < j2.startDate) return 1;
        if(j1.startDate === j2.startDate) return 0;
        return -1;
    });
}

// load all projects
async function loadProjects(personId: string): Promise<Array<ProjectView>> {
    const COLL_NAME = '640475c30afe05af1377';
    const res = await db.listDocuments(DB, COLL_NAME, [
        Query.equal('person_id', [personId]),
    ]);

    if (!res || res.total < 1) return [];

    let outcome: ProjectView[] = [];
    for(const doc of res.documents) {
        const item: ProjectView = {
            name: doc.name,
            description: doc.description,
            stack: doc.stack,
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
    const [skillsets, jobs, projects] = await Promise.all([
        loadSkillSet(docId),
        loadJobs(docId),
        loadProjects(docId)
    ]);

    const skills = skillsets.filter(item => item.category === 'skill');
    const langs = skillsets.filter(item => item.category === 'language')
    return {
        firstName: docs.first_name,
        lastName: docs.last_name,
        email: docs.email,
        jobTitle: docs.job_title,
        avatar: docs.avatar,
        github: docs.github,
        gitlab: docs.gitlab,
        linkedin: docs.linkedin,
        interests: docs.interests,
        skills,
        langs,
        projects,
        jobs
    }
});
