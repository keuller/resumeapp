export namespace Model {
    export type ResultMessage = {
        message: string,
    }

    export type CreateResultMessage = ResultMessage & {
        oid: string,
    }

    export type Person = {
        oid: string,
        firstName: string,
        lastName: string,
        email: string,
        slug: string,
        jobTitle: string,
        avatar: string,
        linkedIn: string,
        github: string,
        gitlab: string,
        twitter: string,
        interests: string[],
        createdAt: Date,
        updatedAt?: Date
    }

    export type SkillSet = {
        oid: string,
        category: string,
        personId: string,
        name: string,
        value: string,
        createdAt: Date
    }

    export type Job = {
        oid: string,
        company: string,
        jobTitle: string,
        startDate: string,
        personId: string,
        endDate?: string | null,
        mode: number,
        createdAt: Date
    }

    export type Project = {
        oid: string,
        name: string,
        personId: string,
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

}
