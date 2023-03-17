<script setup lang="ts">
    import linkedin from '~/assets/linkedin.png';
    import github from '~/assets/github.webp';
    import gitlab from '~/assets/gitlab.png';
    import shareIcon from '~/assets/share.png';
    import editIcon from '~/assets/edit.svg';
    import emailIcon from '~/assets/email-icon.svg';

    const route = useRoute();
    const fullName = ref<string>('');
    const mailTo = ref<string>('');

    const { data, pending } = useAsyncData('resume', () => $fetch(`/api/people/${route.params.slug}`));

    const doShare = async () => {
        const shareLink = {
            title: `CV ${fullName.value}`,
            url: `https://getrezume.com/${route.params.slug}`
        }
        if ("share" in navigator) {
            await navigator.share(shareLink);
        }
    }

    watch(data, (val) => {
        mailTo.value = `mailto:${val?.email}`;
        fullName.value = `${val?.firstName} ${val?.lastName}`;
    });
</script>

<template>
    <div class="relative flex flex-col bg-slate-50 w-full">
        <div id="spinner" v-if="pending">
            <div class="absolute inset-0 bg-slate-200 opacity-50 z-30">&nbsp;</div>
            <div class="absolute flex items-center justify-center inset-0 z-50">
                <Loader/>
            </div>
        </div>

        <header class="lg:pt-2 pb-2 sticky top-0" style="min-height:100px;">
            <div class="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded-md px-4 py-2 shadow-md">
                <div class="flex flex-col gap-4">
                    <div class="flex gap-4 items-center">
                        <img :src="data?.avatar"
                            alt="avatar" width="64" height="64"
                            class="rounded-full h-16 w-16" />

                        <div v-if="!pending" class="flex flex-col tracking-wide">
                            <span class="font-semibold">{{ data?.firstName }} {{ data?.lastName }}</span>
                            <span class="text-base">{{ data?.jobTitle }}</span>
                            <div class="flex gap-2 text-sm text-slate-500">
                                <img :src="emailIcon" alt="email" width="16" height="16"/>
                                <span><a :href="mailTo">{{ data?.email }}</a></span>
                            </div>
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

                <div class="flex items-center justify-center w-8 h-8 lg:hidden">
                    <a href="#" title="Share" @click.prevent="doShare">
                        <img :src="shareIcon" width="22" height="22" alt="share" />
                    </a>
                </div>
            </div>
        </header>

        <div class="flex flex-1 xs:w-full lg:w-[990px] lg:mx-auto gap-4">
            <aside class="w-72 hidden lg:block">
                <div class="flex flex-col gap-2 bg-slate-100p-2">
                    <div  class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="box-title">Social Medias</h2>
                        <ul v-if="!pending" class="flex px-1 gap-2 pb-2">
                            <li v-if="data?.linkedin !== null" class="text-sm">
                                <a :href="data?.linkedin" target="_new" class="outline-none">
                                    <img :src="linkedin" class="h-8 w-8" alt="linkedin"/>
                                </a>
                            </li>
                            <li v-if="data?.github !== null" class="text-sm">
                                <a :href="data?.github" class="outline-none" target="_new">
                                    <img :src="github" class="h-8 w-8" alt="github" />
                                </a>
                            </li>
                            <li v-if="data?.gitlab !== null" class="text-sm">
                                <a :href="data?.gitlab" class="outline-none" target="_new">
                                    <img :src="gitlab" class="h-8 w-8" alt="gitlab" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="box-title">Interests</h2>
                        <ul class="flex flex-col gap-1 pb-2">
                            <template v-for="interest in data?.interests">
                                <InterestItem :name="interest" />
                            </template>
                        </ul>
                    </div>

                    <div v-if="!pending" class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="box-title">Skills</h2>
                        <ul class="flex flex-col gap-2 pb-2">
                            <SkillItem v-for="skill in data?.skills"
                                :name="skill.name"
                                :value="Number(skill.value)" />

                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="box-title">Languages</h2>
                        <ul class="flex flex-col gap-2 pb-2 pl-1">
                            <LangItem v-for="lang in data?.langs"
                                :name="lang.name"
                                :value="Number(lang.value)" />
                        </ul>
                    </div>
                </div>
            </aside>

            <main class="flex flex-col gap-3 flex-1 w-full">
                <section v-if="!pending" class="bg-white rounded p-2 shadow-sm hover:shadow-md">
                    <div class="flex items-center justify-between pl-2">
                        <h2 class="box-title">PROFESSIONAL EXPERIENCE</h2>
                        <a href="#" class="hidden">
                            <img :src="editIcon" width="16" height="16" alt="Edit" title="Edit" />
                        </a>
                    </div>

                    <ExperienceItem v-for="job in data?.jobs"
                        :company="job.company"
                        :job="job.jobTitle"
                        :startDate="job.startDate"
                        :endDate="job.endDate"
                        :mode="job.mode" />

                    <EmptyContent v-if="data?.jobs.length == 0"
                        text="No experiences found!" />
                </section>

                <section class="bg-white rounded p-2 shadow-sm hover:shadow-md">
                    <div class="pl-2">
                        <h2 class="box-title">PROJECTS</h2>
                        <a href="#" class="hidden" aria-hidden="true" title="Edit">
                            Edit
                        </a>
                    </div>

                    <EmptyContent v-if="data?.projects.length == 0"
                        text="No projects found!" />

                    <ProjectItem v-for="prj in data?.projects" :data="prj" />
                </section>
            </main>
        </div>

        <FooterPage />
    </div>

</template>
