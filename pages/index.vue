<script setup lang="ts">
    import { Icons } from '~/lib/icons';
    import GrBadge from '~/components/atoms/gr-badge.vue';
    import InterestItem from '~/components/interest-item.vue';
    import SkillItem from '~/components/skill-item.vue';
    import LangItem from '~/components/lang-item.vue';
    import ExperienceItem from '~/components/experience-item.vue';
    import FooterPage from '~/components/footer-page.vue';
</script>

<template>
    <div class="relative flex flex-col w-full">
        <header class="lg:pt-2 pb-2 sticky -top-2">
            <div class="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded-md px-4 py-2 shadow">
                <div class="flex flex-col gap-4">
                    <div class="flex gap-4">
                        <img :src="Icons.AVATAR"
                            alt="avatar" width="64" height="64"
                            class="rounded-full h-16 w-16" />

                        <div class="flex flex-col tracking-wide">
                            <span class="font-semibold">Abdoral Gusmao</span>
                            <span class="text-sm text-slate-500">Sr. Software Engineer</span>
                            <div class="flex gap-2 text-sm text-slate-500">
                                <img :src="Icons.EMAIL" alt="email" width="16" height="16"/>
                                <span class="text-sm text-slate-500">abdoral.gusmao@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:hidden">
                    <a href="#" title="Share">
                        <img :src="Icons.SHARE" width="22" height="22" alt="share" />
                    </a>
                </div>
            </div>
        </header>

        <div class="flex flex-1 xs:w-full lg:w-[990px] lg:mx-auto gap-4">
            <aside class="w-72 hidden lg:block">
                <div class="flex flex-col gap-2 bg-slate-100p-2">

                    <div class="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
                        <h2 class="box-title">Interests</h2>
                        <ul class="flex flex-col gap-1 pb-2">
                            <InterestItem name="Web Development" />
                            <InterestItem name="Mobile Development" />
                            <InterestItem name="Cloud Development" />
                            <InterestItem name="Microservices" />
                            <InterestItem name="AI/ML" />
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
                        <h2 class="box-title">Skills</h2>
                        <ul class="flex flex-col gap-2 pb-2 items">
                            <SkillItem name="Koa/Express" :value="4" />

                            <SkillItem name="Vue3/Nuxt3" :value="4" />

                            <SkillItem name="TailwindCSS" :value="3" />

                            <SkillItem name="React/NextJS" :value="3" />

                            <SkillItem name="Docker" :value="3" />

                            <SkillItem name="MongoDB" :value="4" />

                            <SkillItem name="PostgreSQL" :value="4" />
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
                        <h2 class="box-title">Languages</h2>
                        <ul class="flex flex-col gap-2 pl-1 pb-2">
                            <LangItem name="Portugues" :value="5" />
                            <LangItem name="English" :value="3" />
                            <LangItem name="French" :value="1" />
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow hover:shadow-md">
                        <h2 class="box-title">Social Medias</h2>
                        <ul class="flex px-1 gap-2 pb-2">
                            <li class="text-sm">
                                <a href="#" target="_new" class="outline-none">
                                    <img :src="Icons.LINKEDIN" class="h-8 w-8" alt="linkedin"/>
                                </a>
                            </li>
                            <li class="text-sm">
                                <a href="#" class="outline-none" target="_new">
                                    <img :src="Icons.GITHUB" class="h-8 w-8" alt="github"/>
                                </a>
                            </li>
                            <li class="text-sm">
                                <a href="#" class="outline-none" target="_new">
                                    <img :src="Icons.GITLAB" class="h-8 w-8" alt="gitlab"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>

            <main class="flex flex-col gap-3 flex-1 w-full">
                <section class="bg-white rounded p-2 shadow hover:shadow-md">
                    <div class="flex items-center justify-between pl-2">
                        <h2 class="box-title">PROFESSIONAL EXPERIENCE</h2>
                        <a href="#" class="hidden" title="Edit">
                            Edit
                        </a>
                    </div>

                    <ExperienceItem company="Acme Inc"
                        job="Engineer Manager"
                        startDate="2023-05-02"
                        endDate=""
                        :mode="1" />

                    <ExperienceItem company="Acme Inc"
                        job="Tech Lead"
                        startDate="2022-02-02"
                        endDate="2023-05-07"
                        :mode="1" />

                    <ExperienceItem company="Activate Inc"
                        job="Senior Engineer"
                        startDate="2021-01-11"
                        endDate="2022-05-07"
                        :mode="1" />

                    <ExperienceItem company="Woods Inc"
                        job="Software Engineer"
                        startDate="2020-04-10"
                        endDate="2021-04-16"
                        :mode="2" />

                    <ExperienceItem company="ShowBox Co"
                        job="Software Engineer"
                        startDate="2018-01-05"
                        endDate="2020-04-15"
                        :mode="1" />
                </section>

                <section class="bg-white rounded p-2 shadow hover:shadow-md">
                    <div class="pl-2">
                        <h2 class="box-title">PROJECTS</h2>
                        <a href="#" class="hidden" aria-hidden="true" title="Edit">
                            Edit
                        </a>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm leading-5 text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <gr-badge name="Express" />
                            <gr-badge name="Vue" />
                            <gr-badge name="TailwindCSS" />
                            <gr-badge name="Nuxt3" />
                            <gr-badge name="MongoDB" />
                            <gr-badge name="Cognito" />
                            <gr-badge name="SES" />
                            <gr-badge name="S3" />
                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <gr-badge name="Fastify" />
                            <gr-badge name="Svelte" />
                            <gr-badge name="TailwindCSS" />
                            <gr-badge name="Postgres" />
                            <gr-badge name="Coginito" />
                            <gr-badge name="Docker" />
                            <gr-badge name="S3" />
                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <gr-badge name="Koa" />
                            <gr-badge name="Vue" />
                            <gr-badge name="TailwindCSS" />
                            <gr-badge name="Firebase" />
                            <gr-badge name="MySQL" />
                            <gr-badge name="TypeORM" />
                            <gr-badge name="Docker" />
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <FooterPage />
    </div>
</template>
