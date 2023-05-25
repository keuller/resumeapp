import { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import EmptyContent from "~/components/basic/EmptyContent";
import ExperienceItem from "~/components/basic/ExperienceItem";
import InterestItem from "~/components/basic/InterestItem";
import LangItem from "~/components/basic/LangItem";
import ProjectItem from "~/components/ProjectItem";
import SkillsItem from "~/components/basic/SkillItem";
import FooterPage from "~/components/FooterPage";
import { Icons } from '~/lib/icons';


const SlugInfo = {
  'firstName': 'Abdoral',
  'lastName': 'Gusmao',
  'jobTitle': 'Sr. Software Engineer',
  'email': 'abdoral.gusmao@outlook.com',
  'interests': ['Cloud Development',
    'Microservices',
    'Mobile Development',
    'Web Development'],
  'skills': [{ 'skill': 'Koa/Express', 'value': 4 },
  { 'skill': 'Vue3/Nuxt3', 'value': 4 },
  { 'skill': 'JavaScript', 'value': 4 },
  { 'skill': 'Tailwind', 'value': 3 }],
  'langs': [{ 'skill': 'Portuguese', 'value': 4 },
  { 'skill': 'English', 'value': 3 },
  { 'skill': 'Spanish', 'value': 2 }],
  'jobs': [{ 'company': 'Acme LDA', 'job': 'Senior Eng. Manager', 'startDate': '2/3/2023', 'endDate': '5/19/2023', 'mode': 1 },
  { 'company': 'Acme Inc', 'job': 'Tech Lead', 'startDate': '5/10/ 2022', 'endDate': '3/4/2023', 'mode': 1 },
  { 'company': 'Activate Inc', 'job': 'Senior Engineer', 'startDate': '4/30/2021', 'endDate': '5/5/2022', 'mode': 1 },
  { 'company': 'Woods Inc', 'job': 'Software Engineer', 'startDate': '4/12/2020', 'endDate': '4/23/2021', 'mode': 1 },
  { 'company': 'ShowBox Co', 'job': 'Software Engineer', 'startDate': '1/18/2018', 'endDate': '4/6/2020', 'mode': 1 }],
  'projects': [{'name': 'Project 1', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p','stack': ['CSS','HTML','Vue3/Nuxt3','TailwindCSS','Cogito']},
               {'name': 'Project 2', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p', 'stack': ['Fastify','Svelte','TailwindCSS','Postgress']}]
}

export function loader({ params }: LoaderArgs){
  return params;
}

export default function() {
  const params = useLoaderData();
  return (
    <div className="relative flex flex-col w-full">
      <header className="lg:pt-2 pb-2 sticky top-0">
        <div className="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded px-4 py-2 shadow">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <img src={Icons.EMPTY_AVATAR}
                alt="avatar" width="64" height="64"
                className="rounded-full h-16 w-16" />
              <div className="flex flex-col tracking-wide">
                <span className="font-semibold">{params.slug} {SlugInfo.lastName}</span>
                <span className="text-sm text-slate-500">{SlugInfo.jobTitle}</span>
                <div className="flex gap-2 text-sm text-slate-500">
                  <img src={Icons.EMAIL} alt="email" width="16" height="16" />
                  <span><a href={'mailTo:' + SlugInfo.email}>{SlugInfo.email}</a></span>
                </div>
              </div>
            </div>

            <div className="items-center justify-end gap-2 w-full hidden">
              <div className="bg-slate-200 text-xs rounded-full p-2">
                PT
              </div>
              <div className="bg-slate-200 text-xs rounded-full p-2">
                EN
              </div>
              <div className="bg-slate-200 text-xs rounded-full p-2">
                DE
              </div>
              <div className="bg-slate-200 text-xs rounded-full p-2">
                FR
              </div>
              <div className="bg-slate-200 text-xs rounded-full p-2">
                ES
              </div>
              <div className="flex items-center bg-slate-200 text-xs rounded-full p-2">
                ...
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-8 h-8 lg:hidden">
            <a href="#" title="Share">
              <img src={Icons.SHARE} width="22" height="22" alt="share" />
            </a>
          </div>
        </div >
      </header >

      <div className="flex flex-1 xs:w-full lg:w-[990px] lg:mx-auto gap-4">
        <aside className="w-72 hidden lg:block">
          <div className="flex flex-col gap-2 bg-slate-100p-2">

            <div className="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
              <h2 className="box-title">Interests</h2>
              <ul className="flex flex-col gap-1 pb-2">
                {SlugInfo.interests.map((item, index) => (
                  <InterestItem name={item} key={index} />
                ))}
              </ul>
            </div>

            <div className="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
              <h2 className="box-title">Skills</h2>
              <ul className="flex flex-col gap-2 pb-2">
                {SlugInfo.skills.map((item, index) => (
                  <SkillsItem name={item.skill} value={item.value} key={index} />
                ))}
              </ul>
            </div>

            <div className="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
              <h2 className="box-title">Languages</h2>
              <ul className="flex flex-col gap-2 pb-2 pl-1">
                {SlugInfo.langs.map((item, index) => (
                  <LangItem name={item.skill} value={item.value} key={index} />
                ))}
              </ul>
            </div>

            <div className="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
              <h2 className="box-title">Social Medias</h2>
              <ul className="flex px-1 gap-2 pb-2">
                <li className="text-sm">
                  <a target="_new" className="outline-none">
                    <img src={Icons.LINKEDIN} className="h-8 w-8" alt="linkedin" />
                  </a>
                </li>
                <li className="text-sm">
                  <a className="outline-none" target="_new">
                    <img src={Icons.GITHUB} className="h-8 w-8" alt="github" />
                  </a>
                </li>
                <li className="text-sm">
                  <a className="outline-none" target="_new">
                    <img src={Icons.GITLAB} className="h-8 w-8" alt="gitlab" />
                  </a>
                </li>
              </ul>
            </div>
          </div >
        </aside >

        <main className="flex flex-col gap-3 flex-1 w-full">
          <section className="bg-white rounded p-2 shadow hover:shadow-md">
            <div className="flex items-center justify-between pl-2">
              <h2 className="box-title">PROFESSIONAL EXPERIENCE</h2>
              <a href="#" className="hidden">
                <img src={Icons.EDIT} width="16" height="16" alt="Edit" title="Edit" />
              </a>
            </div>
            {SlugInfo.jobs.length == 0 
              ? <EmptyContent text="No experiences found!" />
              : SlugInfo.jobs.map((item, index) => (
                  <ExperienceItem company={item.company} job={item.job} mode={item.mode} startDate={item.startDate} endDate={item.endDate} key={index} />
              ))
            }
          </section>

          <section className="bg-white rounded p-2 shadow hover:shadow-md">
            <div className="pl-2">
              <h2 className="box-title">PROJECTS</h2>
              <a href="#" className="hidden" aria-hidden="true" title="Edit">
                Edit
              </a>
            </div>
            {SlugInfo.projects.length == 0
              ? <EmptyContent text="No experiences found!" />
              : SlugInfo.projects.map( (item,index) => (
                <ProjectItem name={item.name} description={item.description} stack={item.stack} key={index}/>
               ))
            }
          </section>
        </main>
      </div >

      <FooterPage />
    </div >
  )
}