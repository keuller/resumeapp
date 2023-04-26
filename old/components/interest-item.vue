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
    <li v-once class="flex items-center gap-1 item">
        <span class="pl-2 text-sm text-gray-700">{{ props.name }}</span>
    </li>
</template>
