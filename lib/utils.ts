export function capitalize(v: string | undefined): string {
    if (!v) return 'Smith';
    const first = v.charAt(0);
    return `${first.toUpperCase()}${v.substring(1)}`;
}
