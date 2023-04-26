<script setup lang="ts">
    import emptyIcon from '~/assets/empty-folder.svg';

    const props = defineProps({
        text: {
            type: String,
            default: 'No content found!'
        }
    })
</script>

<template>
    <div class="flex flex-col items-center gap-2 py-4">
        <img :src="emptyIcon" alt="empty" width="48" height="48"/>
        <span class="text-sm text-slate-400">{{ props.text }}</span>
    </div>
</template>
