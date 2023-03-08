import { Client, Databases } from 'appwrite';

const client = new Client();
let initialized = false;
let dbs: Databases;

export const DB_NAME = 'resumedb-dev';

function initClient() {
    if (!initialized) {
        client.setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('resumeapp');
        initialized = true;
    }
    return client;
}

export function getDb(): Databases {
    initClient();

    if (!dbs) {
        dbs = new Databases(client);
    }
    return dbs;
}

