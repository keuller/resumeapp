<script setup lang="ts">
    import shareIcon from '~/assets/share.png';
</script>

<template>
    <div class="relative flex flex-col bg-slate-50 w-full">
        <header class="lg:pt-2 pb-2 sticky -top-2">
            <div class="flex justify-between items-center bg-white xs:w-full lg:w-[990px] lg:mx-auto rounded-md px-4 py-2 shadow-md">
                <div class="flex flex-col gap-4">

                    <div class="flex gap-4">
                        <img src="https://placehold.jp/3d4070/ffffff/150x150.png"
                            alt="avatar" width="64" height="64"
                            class="rounded-full h-16 w-16" />

                        <div class="flex flex-col tracking-wide">
                            <span class="font-semibold">Abdoral Gusmao</span>
                            <span class="text-base">Sr. Software Engineer</span>
                            <span class="text-sm text-slate-500">abdoral.gusmao@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class="block">
                    <a href="#" title="Share">
                        <img :src="shareIcon" width="22" height="22" alt="share" />
                    </a>
                </div>
            </div>
        </header>

    </div>
</template>
