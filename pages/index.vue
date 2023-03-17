<script setup lang="ts">
    import shareIcon from '~/assets/share.png';
    import linkedin from '~/assets/linkedin.png';
    import github from '~/assets/github.webp';
    import gitlab from '~/assets/gitlab.png';
    import avatar from '~/assets/avatar-placeholder.webp';
</script>

<template>
    <div class="relative flex flex-col w-full">
        <header class="lg:pt-2 pb-2 sticky -top-2">
            <div class="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded-md px-4 py-2 shadow">
                <div class="flex flex-col gap-4">

                    <div class="flex gap-4">
                        <img :src="avatar"
                            alt="avatar" width="64" height="64"
                            class="rounded-full h-16 w-16" />

                        <div class="flex flex-col tracking-wide">
                            <span class="font-semibold">Abdoral Gusmao</span>
                            <span class="text-base">Sr. Software Engineer</span>
                            <span class="text-sm text-slate-500">abdoral.gusmao@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class="lg:hidden">
                    <a href="#" title="Share">
                        <img :src="shareIcon" width="22" height="22" alt="share" />
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
                                    <img :src="linkedin" class="h-8 w-8" alt="linkedin"/>
                                </a>
                            </li>
                            <li class="text-sm">
                                <a href="#" class="outline-none" target="_new">
                                    <img :src="github" class="h-8 w-8" alt="github"/>
                                </a>
                            </li>
                            <li class="text-sm">
                                <a href="#" class="outline-none" target="_new">
                                    <img :src="gitlab" class="h-8 w-8" alt="gitlab"/>
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
                            <Badge name="Express" />
                            <Badge name="Vue" />
                            <Badge name="TailwindCSS" />
                            <Badge name="Nuxt3" />
                            <Badge name="MongoDB" />
                            <Badge name="Cognito" />
                            <Badge name="SES" />
                            <Badge name="S3" />
                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <Badge name="Fastify" />
                            <Badge name="Svelte" />
                            <Badge name="TailwindCSS" />
                            <Badge name="Postgres" />
                            <Badge name="Coginito" />
                            <Badge name="Docker" />
                            <Badge name="S3" />
                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <Badge name="Koa" />
                            <Badge name="Vue" />
                            <Badge name="TailwindCSS" />
                            <Badge name="Firebase" />
                            <Badge name="MySQL" />
                            <Badge name="TypeORM" />
                            <Badge name="Docker" />
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <FooterPage />
    </div>
</template>
