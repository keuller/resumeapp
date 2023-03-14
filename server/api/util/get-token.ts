import { BASE_API, HEADERS } from '~/lib/utils';

export function getToken(): Promise<string> {
    return fetch(`${BASE_API}/v1/account/jwt`, {
        method: 'POST',
        headers: { ...HEADERS }
    }).then(res => {
        if (res.status !== 201) {
            throw new Error(`Fail to generate JWT token: ${res.status} - ${res.statusText}`);
        }
        return res.json();
    }).then(token => {
        return token.jwt;
    }).catch(err => {
        console.error(err);
        return '';
    });
}
