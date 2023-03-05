<script setup lang="ts">
    import { Client } from 'appwrite';
    import checkIcon from '~/assets/check.jpg';
    import linkedin from '~/assets/linkedin.png';
    import github from '~/assets/github.webp';
    import gitlab from '~/assets/gitlab.png';
    import shareIcon from '~/assets/share.png';

    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('resumeapp');

    let shareEnabled = false;
    onMounted(() => {
        shareEnabled = ("share" in navigator);
    });

    const doShare = async () => {
        const shareLink = {
            title: 'Abdoral Resume',
            url: 'https://resume.app/abdoral.gusmao'
        }
        await navigator.share(shareLink);
    }
</script>

<template>
    <div class="relative flex flex-col bg-slate-50 w-full">
        <header class="pt-2 pb-2 sticky -top-2">
            <div class="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded-md px-4 py-2 shadow-md">
                <div class="flex gap-4">
                    <div>
                        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" width="70" height="70" class="rounded-full" />
                    </div>

                    <div class="flex flex-col tracking-wide">
                        <span>Abdoral Gusmao</span>
                        <span>Sr. Software Engineer</span>
                        <span>abdoral.gusmao@gmail.com</span>
                    </div>
                </div>

                <div class="block">
                    <a v-if="shareEnabled" href="#" title="Share" @click.prevent="doShare">
                        <img :src="shareIcon" width="22" alt="share" />
                    </a>
                </div>
            </div>
        </header>

        <div class="flex flex-1 xs:w-full lg:w-[990px] lg:mx-auto gap-4">
            <aside class="w-72 hidden lg:block">
                <div class="flex flex-col gap-2 bg-slate-100p-2">
                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="font-bold text-base p-1">Interest</h2>
                        <ul class="flex flex-col gap-1 pb-2">
                            <li class="flex items-center gap-1">
                                <img :src="checkIcon" class="h-4 w-4" />
                                <span>Web Development</span>
                            </li>
                            <li class="flex items-center gap-1">
                                <img :src="checkIcon" class="h-4 w-4" />
                                <span>Mobile Development</span>
                            </li>
                            <li class="flex items-center gap-1">
                                <img :src="checkIcon" class="h-4 w-4" />
                                <span>Microservices</span>
                            </li>
                            <li class="flex items-center gap-1">
                                <img :src="checkIcon" class="h-4 w-4" />
                                <span>AI/ML</span>
                            </li>
                            <li class="flex items-center gap-1">
                                <img :src="checkIcon" class="h-4 w-4" />
                                <span>Cloud Development</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white px-3 py-2 rounded-md shadow-sm hover:shadow-md">
                        <h2 class="font-bold text-base p-1">Networks</h2>
                        <ul class="flex px-1 gap-2 pb-2">
                            <li class="text-sm">
                                <img :src="linkedin" class="h-8 w-8" />
                            </li>
                            <li class="text-sm">
                                <img :src="github" class="h-8 w-8" />
                            </li>
                            <li class="text-sm">
                                <img :src="gitlab" class="h-8 w-8" />
                            </li>
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
                            <LangItem name="Portugues" :value="4" />
                            <LangItem name="English" :value="3" />
                            <LangItem name="French" :value="1" />
                        </ul>
                    </div>
                </div>
            </aside>

            <main class="flex flex-col gap-3 flex-1 w-full">
                <section class="bg-white rounded p-2 shadow-sm hover:shadow-md">
                    <h2 class="p-3 font-semibold text-lg">EXPERIENCE</h2>

                    <div class="flex flex-col p-3">
                        <h3 class="font-bold">Acme Inc</h3>
                        <h4 class="text-sm">Senior Engineer</h4>
                        <div class="text-sm text-slate-400">May 2023 - Current | Full-time</div>
                        <div>

                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Acme Inc</h3>
                        <h4 class="text-sm">Engineer Manager</h4>
                        <div class="text-sm text-slate-400">May 2022 - Current | Full-time</div>
                        <div>

                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Acme Inc</h3>
                        <h4 class="text-sm">Tech Lead</h4>
                        <div class="text-sm text-slate-400">Jan 2021 - May 2022 | Full-time</div>
                        <div>

                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Acme Inc</h3>
                        <h4 class="text-sm">Senior Engineer</h4>
                        <div class="text-sm text-slate-400">Apr 2020 - Jan 2021 | Full-time</div>
                        <div>

                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Acme Inc</h3>
                        <h4 class="text-sm">Mid Senior Engineer</h4>
                        <div class="text-sm text-slate-400">Jan 2018 - Apr 2020 | Full-time</div>
                        <div>

                        </div>
                    </div>
                </section>

                <section class="bg-white rounded p-2 shadow-sm hover:shadow-md">
                    <h2 class="p-3 font-semibold text-lg">PROJECTS</h2>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Express</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Vue</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">TailwindCSS</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Nuxt3</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">MongoDB</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Cognito</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">S3</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">SES</span>
                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Express</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Vue</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">TailwindCSS</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Nuxt3</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">MySQL</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Cognito</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">S3</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Docker</span>
                        </div>
                    </div>

                    <div class="flex flex-col p-3 border-t-1">
                        <h3 class="font-bold">Project Name</h3>
                        <div class="text-sm text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        <div class="flex flex-wrap gap-2 py-2">
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Koa</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Vue</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">TailwindCSS</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">MySQL</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Firebase</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">TypeORM</span>
                            <span class="text-xs rounded-xl bg-lime-200 px-3 py-1">Docker</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <div class="flex items-center justify-between w-full lg:w-[990px] mx-auto text-center mt-4 border-t-1">
            <span class="p-3 text-sm">
                Copyright 2023. &copy;
            </span>
            <span class="p-3 text-sm">
            Made with love!</span>
        </div>
    </div>

</template>
