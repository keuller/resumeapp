<script setup lang="ts">
    defineProps({
        error: Object
    });

    const goHome = async () => {
        await navigateTo('/');
    }
</script>

<template>
    <NuxtErrorBoundary @error="(err) => clearError()">
        <main id="error_page" class="container">
            <div class="flex flex-col w-[40rem] mx-auto">
                <h2 class="my-2 text-2xl font-semibold">Error!</h2>
                <p>{{ error.message }}</p>
                <button type="button"
                    class="bg-transparent transition duration-150 ease-in-out border border-indigo-700 hover:bg-gray-100 rounded text-indigo-700 px-8 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                    @click.prevent="goHome">HOME</button>
            </div>
        </main>
    </NuxtErrorBoundary>
</template>
