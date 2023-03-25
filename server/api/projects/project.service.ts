import { db, genId } from '~/lib/client';
import { Model } from '~/types';

const cfg = useRuntimeConfig();

export type AddProjectRequest = Omit<Model.Project, "oid" | "createdAt">;
export type UpdProjectRequest = { name: string, description: string }
export type StackRequest = { op: string, value: string }

type ResultInsert = { oid: string, message: string }
type ResultMessage = { message: string }

export namespace Project {
    const COLLECTION = '640475c30afe05af1377';

    export function add(data: AddProjectRequest): Promise<ResultInsert> {
        const oid = genId();
        return db.createDocument(cfg.DATABASE, COLLECTION, oid, {
            person_id: data.personId,
            name: data.name,
            description: data.description,
            stack: data.stack,
            created_at: new Date()
        }).then(res => {
            return { oid: res.$id, message: 'New project has been added.' }
        });
    }

    export function update(oid: string, data: UpdProjectRequest): Promise<ResultMessage> {
        return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
            name: data.name,
            description: data.description,
        }).then(_res => {
            return { message: 'Project has been updated.' }
        })
    }

    export function addStack(oid: string, value: string): Promise<ResultMessage> {
        return db.getDocument(cfg.DATABASE, COLLECTION, oid)
            .then(res => res.stack)
            .then((currentStack: string[]) => {
                return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
                    stack: [...currentStack, value]
                });
            }).then(() => {
                return { message: 'Stack item has been added.' }
            });
    }

    export function delStack(oid: string, value: string): Promise<unknown> {
        return db.getDocument(cfg.DATABASE, COLLECTION, oid)
            .then(res => res.stack)
            .then((currentStack: string[]) => {
                const stack = currentStack.filter(item => item !== value);
                return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
                    stack
                });
            }).then(() => {
                return { message: 'Stack item has been removed.' }
            });
    }

    export function del(oid: string): Promise<unknown> {
        return db.deleteDocument(cfg.DATABASE, COLLECTION, oid)
            .then(_res => {
                return {}
            })
    }
}
