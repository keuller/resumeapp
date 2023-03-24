import { db, genId } from '~/lib/client';
import { Model } from '~/types';

const cfg = useRuntimeConfig();

export type JobRequest = Omit<Model.Job, "oid" | "createdAt">;
export type JobUpdateRequest = Omit<Model.Job, "oid" | "personId" | "createdAt">;

export namespace Job {
    const COLLECTION = '640475d3244123ffa68b';

    export function add(data: JobRequest): Promise<unknown> {
        const oid = genId();
        return db.createDocument(cfg.DATABASE, COLLECTION, oid, {
            person_id: data.personId,
            company: data.company,
            job_title: data.jobTitle,
            job_start: data.startDate,
            job_end: data.endDate || undefined,
            mode: data.mode,
            created_at: new Date()
        }).then(res => {
            return { oid: res.$id, message: 'New job has been added.' }
        });
    }

    export function update(oid: string, data: JobUpdateRequest): Promise<unknown> {
        return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
            company: data.company,
            job_title: data.jobTitle,
            job_start: data.startDate,
            job_end: data.endDate,
            mode: data.mode
        }).then(_res => {
            return { message: 'Job has been updated.' }
        })
    }

    export function del(oid: string): Promise<unknown> {
        return db.deleteDocument(cfg.DATABASE, COLLECTION, oid)
            .then(_res => {
                return {}
            })
    }
}
