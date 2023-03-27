import { H3Event, setResponseStatus, readBody } from 'h3';
import { Project, AddProjectRequest } from './project.service';

export default defineEventHandler(async (ev: H3Event) => {
    const data = await readBody<AddProjectRequest>(ev);
    const result = await Project.add(data);

    setResponseStatus(ev, 201);
    return result;
});
