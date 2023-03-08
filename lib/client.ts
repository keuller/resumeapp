import * as sdk from 'node-appwrite';

const cfg = useRuntimeConfig();
const client = new sdk.Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('resumeapp')
    .setKey(cfg.devApiKey);

const db = new sdk.Databases(client);

export default db;
