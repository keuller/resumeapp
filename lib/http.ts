import { BASE_API, HEADERS } from '~/lib/utils';

export type Method = 'get' | 'post' | 'put' | 'delete';

export type Options = {
    token: string
}

export namespace Http {

    function call<D, R>(method: Method, path: string, payload?: D, opts?: Options): Promise<R> {
        return fetch(`${BASE_API}/${path}`, {
            method: method.toUpperCase(),
            headers: {
                ...HEADERS,
                'X-Appwrite-JWT': opts?.token ?? ''
            },
            body: (payload ? JSON.stringify(payload) : null)
        }).then(res => {
            if (res.status !== 200) {
                throw new Error(`Fail to perform operation: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        });
    }

    export function get<R>(path: string, opts?: Options): Promise<R> {
        return call('get', path, undefined, opts)
    }

    /**
     * Invoke HTTP POST operation.
     * @param path relative path
     * @param payload data object to be sent.
     * @param opts optional params
     * @returns Promise<R>
     */
    export function post<D, R>(path: string, payload: D, opts?: Options): Promise<R> {
        return call<D, R>('post', path, payload, opts);
    }

    /**
     * Invoke HTTP PUT operation.
     * @param path relative path
     * @param payload data object to be sent.
     * @param opts optional params
     * @returns Promise<R>
     */
    export function put<D, R>(path: string, payload: D, opts?: Options): Promise<R> {
        return call<D, R>('put', path, payload, opts);
    }

    /**
     * Invoke HTTP DELETE operation.
     * @param path relative path
     * @param opts optional params
     * @returns Promise<R>
     */
    export function del<R>(path: string, opts?: Options): Promise<R> {
        return call('delete', path, undefined, opts) as Promise<R>;
    }
}
