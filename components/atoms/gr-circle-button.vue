<script setup lang="ts">
    defineProps({
        url: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <a :href="url" class="outline-none">
        <div class="flex flex-col items-center gap-2">
            <div class="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-lg">
                <slot />
            </div>
        </div>
    </a>
</template>
