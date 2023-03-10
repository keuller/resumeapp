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
    startDate: Date,
    endDate?: Date | null,
    mode: string,
    createdAt: Date
}

export type Project = {
    name: string,
    description: string,
    stack: string[],
    createdAt: Date
}
