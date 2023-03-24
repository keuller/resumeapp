<script setup lang="ts">
    import { Icons } from '~/lib/icons';
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrCircleButton from '~/components/atoms/gr-circle-button.vue';
    import TopBar from '~/components/top-bar.vue';
    import FooterPage from '~/components/footer-page.vue';
</script>

<template>
    <div class="relative flex flex-col w-full">
        <top-bar />

        <section id="register" class="relative flex flex-col items-center justify-center bg-gray-100 min-h-[620px] px-10">
            <div class="bg-hero"></div>

            <form id="register" class="absolute inset-0 z-20 px-10 flex-1 flex flex-col gap-2 justify-center w-full">
                <input type="text" name="full_name"
                    placeholder="Full name" maxlength="50"
                    class="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <input id="email" type="email" name="full_name"
                    placeholder="E-mail" maxlength="120"
                    class="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <input id="password" type="password" name="password"
                    placeholder="Password" maxlength="40"
                    class="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <input id="conf_pass" type="password" name="conf_pass"
                    placeholder="Repeat Password" maxlength="40"
                    class="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <div class="mt-2">
                    <gr-button kind="primary">
                        <span>Register</span>
                    </gr-button>
                </div>

                <div class="relative flex flex-col mt-3 mb-3 px-10">
                    <div class="flex items-center justify-center">
                        <div class="flex-1 border h-0 border-gray-400">&nbsp;</div>
                        <div class="text-sm px-2">OR</div>
                        <div class="flex-1 border h-0 border-gray-400">&nbsp;</div>
                    </div>
                </div>

                <div class="flex gap-4 items-center justify-center">
                    <gr-circle-button url="#">
                        <img :src="Icons.GOOGLE" alt="edit" width="23" />
                    </gr-circle-button>

                    <gr-circle-button url="#">
                        <img :src="Icons.GITHUB" alt="edit" width="23" />
                    </gr-circle-button>
                </div>
            </form>
        </section>

        <section id="steps" class="flex flex-col gap-8 items-center justify-center bg-[#CCEDFF] min-h-[760px]">
            <div class="flex flex-col items-center gap-2">
                <div class="flex items-center justify-center bg-white w-20 h-20 rounded-full shadow-lg">
                    <img :src="Icons.USER_BLUE" alt="user" width="33" />
                </div>
                <h2 class="font-semibold">Step 1</h2>
                <span>Create an account</span>
            </div>

            <div class="flex flex-col items-center gap-2">
                <div class="flex items-center justify-center bg-white w-20 h-20 rounded-full shadow-lg">
                    <img :src="Icons.EDIT_BLUE" alt="edit" width="33" />
                </div>
                <h2 class="font-semibold">Step 2</h2>
                <span>Fill out your resume</span>
            </div>

            <div class="flex flex-col gap-2 items-center">
                <div class="flex items-center justify-center bg-white w-20 h-20 rounded-full shadow-lg">
                    <img :src="Icons.SHARE_BLUE" alt="share" width="33" />
                </div>
                <h2 class="font-semibold">Step 3</h2>
                <span>Share away</span>
            </div>

            <div class="mt-2">
                <span class="leading-10 text-4xl">That simple</span>
            </div>
        </section>

        <section id="story" class="flex flex-col gap-10 bg-slate-100 min-h-[600px] px-9 py-8">
            <h2 class="text-4xl font-normal leading-10">Our Story</h2>

            <article>
                <h3 class="font-bold text-base leading-6 pb-4">Founded on a wish</h3>
                <p>Fusce vel sapien molestie, sagittis enim non, luctus purus. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. </p>
            </article>

            <article>
                <h3 class="font-bold text-base leading-6 pb-4">Out of the head</h3>
                <p>Fusce vel sapien molestie, sagittis enim non, luctus purus. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. </p>
            </article>

            <article>
                <h3 class="font-bold text-base leading-6 pb-4">Making it true</h3>
                <p>Fusce vel sapien molestie, sagittis enim non, luctus purus. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. </p>
            </article>

            <div class="bg-white border border-blue-400 text-blue-400 rounded-xl text-center shadow-xl py-3">
                <p>We're just getting started!</p>
                <p>Be a part of our next chapter.</p>
            </div>

            <gr-button kind="primary">
                <span>Register</span>
            </gr-button>
        </section>

        <footer-page />
    </div>
</template>

<style scoped>
.bg-hero {
    @apply absolute inset-0 z-10 bg-[url('/img/hero-desktop.webp')] opacity-75 blur-sm bg-cover bg-center;
}
</style>
