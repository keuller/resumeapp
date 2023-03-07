<script setup lang="ts">
</script>

<template>
    <main id="login" class="flex flex-col items-center mt-8 md:mt-28 justify-center bg-slate-50">

        <div class="bg-white rounded-lg shadow-md flex-1 p-2 w-86 md:w-96">
            <div class="px-2">
                <h2 class="text-2xl py-3 font-bold leading-tight text-gray-800 dark:text-gray-100">Welcome!</h2>

                <form id="loginForm" method="POST" action="#" class="flex flex-col gap-3 mt-2 mb-4">
                    <div class="flex flex-col">
                        <label class="text-sm text-slate-400">Username</label>
                        <input type="text" class="bg-transparent border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-600"
                            name="username" maxlength="50" />
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm text-slate-400">Password</label>
                        <input type="password" class="bg-transparent border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-600"
                            name="password" maxlength="50" />
                    </div>

                    <div class="mt-2 text-center">
                        <button class="bg-white transition duration-150 ease-in-out hover:bg-gray-100 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700">Log in</button>
                    </div>

                    <div class="relative my-4 flex items-center justify-center border-t-1">
                        <span class="absolute top-0 -translate-y-[55%] px-2 bg-white text-sm font-semibold">OR</span>
                    </div>

                    <div class="flex flex-col gap-4">
                        <button type="button" class="inline-flex items-center justify-center rounded border px-6 py-2 text-xs w-full hover:bg-gray-100">
                            <img src="/img/github.svg" alt="github" width="36" height="36" />
                            <span>Github</span>
                        </button>

                        <button type="button" class="inline-flex gap-2 items-center justify-center rounded border px-6 py-3 text-xs w-full hover:bg-gray-100">
                            <img src="/img/google.svg" alt="google" width="20" height="20" />
                            <span>Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
