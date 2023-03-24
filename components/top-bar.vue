<script setup lang="ts">
    import { Icons } from '~/lib/icons';
</script>

<template>
    <header class="flex bg-white sticky -top-1 shadow-md py-2 z-50">
        <div class="flex flex-1 items-center px-3 lg:px-16 justify-between">
            <NuxtLink to="/">
                <img :src="Icons.LOGO" alt="logo" />
            </NuxtLink>

            <a href="#" class="flex items-center gap-1 w-[70px]">
                <img :src="Icons.USER" alt="user" width="24" height="24" />
                <span class="text-sm">Log in</span>
            </a>
        </div>
    </header>
</template>
