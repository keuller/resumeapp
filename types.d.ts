export type SkillSet = {
    oid: string,
    category: string,
    name: string,
    value: string,
    createdAt: Date
}

export type Job = {
    company: string,
    jobTitle: string,
    startDate: string,
    endDate?: string | null,
    mode: number,
    createdAt: Date
}

export type Project = {
    name: string,
    description: string,
    stack: string[],
    createdAt: Date
}

type Register = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
