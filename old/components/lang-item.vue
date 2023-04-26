<script setup lang="ts">
    const values: Record<number, string> = {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Advanced',
        4: 'Fluent',
        5: 'Native'
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
    <li v-once class="flex item">
        <div class="flex flex-col">
            <span class="text-sm text-gray-800">{{ props.name }}</span>
            <span class="text-sm text-slate-500">{{ values[props.value] }}</span>
        </div>
    </li>
</template>
