import { BASE_API, HEADERS } from '~/lib/utils';
import { db, genId } from '~/lib/client';
import { Model } from '~/types';

const cfg = useRuntimeConfig();

export type AddPersonRequest = {
    fullName: string,
    email: string
};

export type UpdPersonRequest = Partial<Model.Person>;

export namespace Person {
    const COLLECTION = '640475a2a7b08deb0966';

    export function add(data: AddPersonRequest): Promise<{oid:string, message: string}> {
        const oid = genId();
        const names = data.fullName.split(' ');
        return db.createDocument(cfg.DATABASE, COLLECTION, oid, {
            firstName: names[0],
            lastName: names[1],
            slug: `${names[0]}.${names[1]}-42`,
            email: data.email,
            job_title: undefined,
            avatar: undefined,
            created_at: new Date()
        }).then(res => {
            return { oid: res.$id, message: 'Person has been added.' }
        });
    }

    export function updateSocialMedias(oid: string, data: UpdPersonRequest): Promise<{message: string}> {
        return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
            linkedin: data.linkedIn,
            github: data.github,
            twitter: data.twitter,
            gitlab: data.gitlab,
            updated_at: new Date()
        }).then(_res => {
            return { message: 'Person has been updated.' }
        });
    }

    export function updateInfo(oid: string, data: UpdPersonRequest) {
        return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
            job_title: data.jobTitle,
            avatar: data.avatar,
            updated_at: new Date()
        }).then(_res => {
            return { message: 'Person has been updated.' }
        })
    }

    export function sendEmailVerification(userId: string, jwt: string): Promise<Record<string, string>> {
        return fetch(`${BASE_API}/v1/account/verification`, {
            method: 'POST',
            headers: {
                ...HEADERS,
                'X-Appwrite-JWT': jwt
            },
            body: JSON.stringify({ url: 'https://getrezume.com' })
        }).then(res => {
            if (res.status !== 200) throw new Error(`Fail to send email verification: ${res.status} - ${res.statusText}`);
            return res.json();
        }).then(token => {
            return {
                userId: token.userId,
                tokenId: token.$id,
                expires: token.expire
            }
        });
    }

    export function getPerson(userId: string): Promise<Model.Person> {
        return db.getDocument(cfg.DATABASE, COLLECTION, userId)
            .then((doc) => {
                return {
                    oid: doc.$id,
                    firstName: doc.first_name,
                    lastName: doc.last_name,
                    email: doc.email,
                    slug: doc.slug,
                    jobTitle: doc.job_title,
                    avatar: doc.avatar,
                    linkedIn: doc.linkedin,
                    github: doc.github,
                    gitlab: doc.gitlab,
                    twitter: doc.twitter,
                    interests: doc.interests,
                    createdAt: doc.created_at,
                    updatedAt: doc.updated_at
                }
            })
    }

    export function addInterest(userId: string, value: string): Promise<unknown> {
        return getPerson(userId)
            .then(person => {
                const { oid, interests } = person;
                return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
                    interests: [...interests, value],
                    updated_at: new Date()
                });
            }).then(res => {
                console.log('result:', res);
                return {}
            })
    }

    export function delInterest(userId: string, value: string): Promise<unknown> {
        return getPerson(userId)
            .then(person => {
                const { oid, interests } = person;
                const _interests = interests.filter((item) => item !== value)

                return db.updateDocument(cfg.DATABASE, COLLECTION, oid, {
                    interests: [..._interests],
                    updated_at: new Date()
                });
            }).then(res => {
                console.log('[error]', res);
                return {}
            })
    }
}
