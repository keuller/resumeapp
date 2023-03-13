<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <span v-once class="text-xs tracking-wide rounded-xl bg-indigo-200 px-3 py-1">{{ props.name }}</span>
</template>
