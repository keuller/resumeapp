import { BASE_API, HEADERS } from '~/lib/utils';

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
