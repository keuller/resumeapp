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
    endDate?: string,
    mode: string,
    createdAd: Date
}

export type Project = {
    name: string,
    description: string,
    stack: string[],
    createdAd: Date
}
