import { H3Event } from 'h3';
import { ID } from 'node-appwrite';
import { Register } from '~/types';
import { getToken } from '~/server/api/util/get-token';
import { sendEmailVerification } from './people.service';

export default defineEventHandler(async (ev: H3Event) => {
    const data = await readBody(ev) as Register;

    const { email, password } = data;
    const name = `${data.firstName} ${data.lastName}`;
    const payload = {
        userId: ID.unique(),
        name,
        email,
        password
    }

    return fetch('https://cloud.appwrite.io/v1/account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Appwrite-Response-Format': '1.0.0',
            'X-Appwrite-Project': 'resumeapp'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        if (res.status !== 201) throw new Error('Fail to register');
        return Promise.all([res.json(), getToken()]);
    }).then(data => {
        const [account, token] = data;
        console.log('debug:', account, token);
        return sendEmailVerification(account.$id, token);
    }).then(res => {
        ev.node.res.statusCode = 201;
        return {
            message: 'Your account has been created.',
            userId: res.userId,
            token: res.tokenId
        }
    }).catch(err => {
        ev.node.res.statusCode = 400;
        return {
            message: err.message
        }
    });
});
