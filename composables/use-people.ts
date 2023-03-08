
import { getPeople, type Person } from '~/lib/people.service';

const person = reactive<Person>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    jobTitle: '',
    github: '',
    gitlab: '',
    linkedin: ''
});

export function usePeople() {

    async function findPerson(slug: string) {
        const data = await getPeople(slug);
        person.email = data.email;
        person.avatar = data.avatar;
        person.jobTitle = data.jobTitle;
        person.firstName = data.firstName;
        person.lastName = data.lastName;
        person.github = data.github ?? '';
        person.gitlab = data.gitlab ?? '';
        person.linkedin = data.linkedin ?? '';
    }

    return {
        person,
        findPerson
    }
}
