import { db, genId } from '~/lib/client';
import { Model } from '~/types';

const cfg = useRuntimeConfig();

export type AddSkillSet = Omit<Model.SkillSet, "oid" | "createdAt">;

export type UpdateSkillSet = {
    name: string,
    value: string
}

export namespace SkillSet {
    const COLLECTION = '6409ccbad3937a5e7490';

    export function addSkill(data: AddSkillSet): Promise<unknown> {
        const oid = genId();
        return db.createDocument(cfg.DATABASE, COLLECTION, oid, {
            category: data.category,
            nane: data.name,
            value: data.value,
            person_id: data.personId,
            created_at: new Date()
        }).then(res => {
            return { oid: res.$id }
        })
    }

    export function updateValue(oid: string, data: UpdateSkillSet): Promise<unknown> {
        return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
            nane: data.name,
            value: data.value
        }).then(_res => {
            return { message: 'Skill has been updated.' }
        })
    }

    export function delSkill(oid: string): Promise<unknown> {
        return db.deleteDocument(cfg.DATABASE, COLLECTION, oid)
            .then(_res => {
                return {}
            })
    }
}
