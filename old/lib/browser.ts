import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('resumeapp');

const account = new Account(client);

export function getAccount(): Account {
    return account;
}

export function genId(): string {
    return ID.unique();
}
