<script setup lang="ts">
    import { usePeople } from '~/composables/use-people';
    import linkedin from '~/assets/linkedin.png';
    import github from '~/assets/github.webp';
    import gitlab from '~/assets/gitlab.png';
    import shareIcon from '~/assets/share.png';
    import editIcon from '~/assets/edit.svg';
    import heartIcon from '~/assets/heart-icon.png';

    definePageMeta({
        validate: async ({ params }) => {
            const peopleSvc = usePeople();
            await peopleSvc.findPerson(params.slug as string);
            return (peopleSvc.person.email !== '');
        }
    });

    const route = useRoute();
    const people = usePeople();

    const doShare = async () => {
        const shareLink = {
            title: `CV ${people.person.firstName} ${people.person.lastName}`,
            url: `https://getrezume.com/${route.params.slug}`
        }
        if ("share" in navigator) {
            await navigator.share(shareLink);
        }
    }

    const showMedias = computed(() => {
        const { github, gitlab, linkedin } = people.person;
        return (github !== '' || gitlab !== '' || linkedin !== '');
    });
</script>

<template>
    <div class="relative flex flex-col bg-slate-50 w-full">
        <header class="lg:pt-2 pb-2 sticky top-0">
            <div class="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded-md px-4 py-2 shadow-md">
                <div class="flex flex-col gap-4">
                    <div class="flex gap-4 items-center">
                        <img :src="people.person.avatar"
                            alt="avatar" width="64" height="64" class="rounded-full h-16 w-16" />

                        <div class="flex flex-col tracking-wide">
                            <span class="font-semibold">{{ people.person.firstName }} {{ people.person.lastName }}</span>
                            <span class="text-base">{{ people.person.jobTitle }}</span>
                            <span class="text-sm text-slate-500">{{ people.person.email }}</span>
                        </div>
                    </div>

                    <div class="items-center justify-end gap-2 w-full hidden">
                        <div class="bg-slate-200 text-xs rounded-full p-2">
                            PT
                        </div>
                        <div class="bg-slate-200 text-xs rounded-full p-2">
                            EN
                        </div>
                        <div class="bg-slate-200 text-xs rounded-full p-2">
                            DE
                        </div>
                        <div class="bg-slate-200 text-xs rounded-full p-2">
                            FR
                        </div>
                        <div class="bg-slate-200 text-xs rounded-full p-2">
                            ES
                        </div>
                        <div class="flex items-center bg-slate-200 text-xs rounded-full p-2">
                            ...
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center w-8 h-8">
                    <a href="#" title="Share" @click.prevent="doShare">
                        <img :src="shareIcon" width="22" height="22" alt="share" />
                    </a>
                </div>
            </div>
        </header>

        <div class="flex flex-1 xs:w-full lg:w-[990px] lg:mx-auto gap-4">
            <aside class="w-72 hidden lg:block">
                <div class="flex flex-col gap-2 bg-slate-100p-2">
                    <div v-if="showMedias" class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="font-bold text-base p-1">Social Midias</h2>
                        <ul class="flex px-1 gap-2 pb-2">
                            <li v-if="people.person.linkedin !== ''" class="text-sm">
                                <a :href="people.person.linkedin" target="_new" class="outline-none">
                                    <img :src="linkedin" class="h-8 w-8" alt="linkedin"/>
                                </a>
                            </li>
                            <li v-if="people.person.github !== ''" class="text-sm">
                                <a :href="people.person.github" class="outline-none" target="_new">
                                    <img :src="github" class="h-8 w-8" alt="github"/>
                                </a>
                            </li>
                            <li v-if="people.person.gitlab !== ''" class="text-sm">
                                <a :href="people.person.gitlab" class="outline-none" target="_new">
                                    <img :src="gitlab" class="h-8 w-8" alt="gitlab"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="font-bold text-base p-1">Interest</h2>
                        <ul class="flex flex-col gap-1 pb-2">
                            <InterestItem name="Web Development" />
                            <InterestItem name="Mobile Development" />
                            <InterestItem name="Cloud Development" />
                            <InterestItem name="Microservices" />
                            <InterestItem name="AI/ML" />
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="font-bold text-base p-1">Skills</h2>
                        <ul class="flex flex-col gap-2 pb-2">
                            <SkillItem name="Koa/Express" :value="5" />

                            <SkillItem name="Vue3/Nuxt3" :value="4" />

                            <SkillItem name="TailwindCSS" :value="3" />

                            <SkillItem name="React/NextJS" :value="3" />

                            <SkillItem name="Docker" :value="5" />

                            <SkillItem name="MongoDB" :value="4" />

                            <SkillItem name="PostgreSQL" :value="4" />
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="font-bold text-base py-1">Languages</h2>
                        <ul class="flex flex-col gap-2 pb-2">
                            <LangItem name="Portugues" :value="5" />
                            <LangItem name="English" :value="3" />
                            <LangItem name="French" :value="1" />
                        </ul>
                    </div>
                </div>
            </aside>

            <main class="flex flex-col gap-3 flex-1 w-full">
                <section class="bg-white rounded p-2 shadow-sm hover:shadow-md">
                    <div class="flex items-center justify-between">
                        <h2 class="p-3 font-semibold text-lg">EXPERIENCES</h2>
                        <a href="#" class="hidden">
                            <img :src="editIcon" width="16" height="16" alt="Edit" title="Edit" />
                        </a>
                    </div>

                    <ExperienceItem company="Acme Inc"
                        job="Engineer Manager"
                        period="May 2023 - Current"
                        model="Full-time" />

                    <ExperienceItem company="Acme Inc"
                        job="Tech Lead"
                        period="Feb 2022 - May 2023"
                        model="Full-time" />

                    <ExperienceItem company="Activate Inc"
                        job="Senior Engineer"
                        period="Jan 2021 - May 2022"
                        model="Full-time" />

                    <ExperienceItem company="Woods Inc"
                        job="Software Engineer"
                        period="Apr 2020 - Apr 2021"
                        model="Full-time" />

                    <ExperienceItem company="ShowBox Co"
                        job="Software Engineer"
                        period="Jan 2018 - Apr 2020"
                        model="Full-time" />
                </section>

                <section class="bg-white rounded p-2 shadow-sm hover:shadow-md">
                    <h2 class="p-3 font-semibold text-lg">PROJECTS</h2>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
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

        <div class="flex items-center justify-between w-full lg:w-[990px] mx-auto text-center mt-6 py-2 border-t-1">
            <span class="p-3 text-sm text-slate-400">
                Copyright 2023. &copy;
            </span>
            <span class="inline-flex gap-1 text-slate-400 p-3 text-sm">
            Made with <img :src="heartIcon" alt="heart" width="18" height="18" />
            </span>
        </div>
    </div>

</template>
