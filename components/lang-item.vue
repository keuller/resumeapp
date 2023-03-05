<script setup lang="ts">
    const values: Record<number, string> = {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Advanced',
        4: 'Fluent'
    }

    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 3
        }
    })
</script>

<template>
<li class="flex flex-col">
    <span class="text-sm">{{ props.name }}</span>
    <span class="text-sm text-slate-400">{{ values[props.value] }}</span>
</li>
</template>
