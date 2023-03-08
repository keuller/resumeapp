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
        <main id="error_page" class="flex flex-col">
            <h2>Error!</h2>
            <p>{{ error.message }}</p>
            <button type="button" @click.prevent="goHome" class="">HOME</button>
        </main>
    </NuxtErrorBoundary>
</template>
