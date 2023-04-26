import { Permission, Role } from 'node-appwrite';
import { db, genId } from '~/lib/client';
import { z } from 'zod';
import { Model } from '~/types';
import { JobSchema } from '~/server/validators/job.schema';

const cfg = useRuntimeConfig();

export type JobRequest = z.infer<typeof JobSchema>;

export type JobUpdateRequest = Omit<JobRequest, "personId">;

export namespace Job {
    const COLLECTION = '640475d3244123ffa68b';

    export function add(data: JobRequest): Promise<Model.CreateResultMessage> {
        const oid = genId();
        return db.createDocument(cfg.DATABASE, COLLECTION, oid, {
            person_id: data.personId,
            company: data.company,
            job_title: data.jobTitle,
            job_start: data.startDate,
            job_end: data.endDate || undefined,
            mode: data.mode,
            created_at: new Date()
        }, [
            Permission.read(Role.any()),
            // Permission.update(Role.user('')),
            // Permission.delete(Role.user('')),
        ]).then(res => {
            return { oid: res.$id, message: 'New job has been added.' }
        });
    }

    export function update(oid: string, data: JobUpdateRequest): Promise<Model.ResultMessage> {
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

    export function del(oid: string): Promise<Model.ResultMessage> {
        return db.deleteDocument(cfg.DATABASE, COLLECTION, oid)
            .then(_res => {
                return { message: 'Job record has been removed.' }
            });
    }
}
