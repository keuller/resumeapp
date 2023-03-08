
import { getPeople } from '~/lib/people.service';

const person = reactive({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    jobTitle: ''
});

export function usePeople() {

    async function findPerson(slug: string) {
        const data = await getPeople(slug);
        person.email = data.email;
        person.avatar = data.avatar;
        person.jobTitle = data.jobTitle;
        person.firstName = data.firstName;
        person.lastName = data.lastName;
    }

    return {
        person,
        findPerson
    }
}
