<script setup lang="ts">
import checkIcon from '~/assets/check.jpg';

const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <li v-once class="flex items-center gap-1">
        <img :src="checkIcon" class="h-4 w-4" />
        <span class="pl-2 text-sm">{{ props.name }}</span>
    </li>
</template>
