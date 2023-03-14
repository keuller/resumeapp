export const BASE_API = 'https://cloud.appwrite.io';

export const HEADERS: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Appwrite-Project': 'resumeapp',
    'X-Appwrite-Response-Format': '1.0.0'
}

export function capitalize(v: string | undefined): string {
    if (!v) return 'Smith';
    const first = v.charAt(0);
    return `${first.toUpperCase()}${v.substring(1)}`;
}
