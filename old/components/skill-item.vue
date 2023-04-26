<script setup lang="ts">
    const values: Record<number, string> = {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Advanced',
        4: 'Expert',
        5: 'N/A'
    }

    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 1
        }
    });
</script>

<template>
<li v-once class="flex px-1 item">
    <div class="flex flex-col w-full">
        <span class="text-sm tracking-wider text-gray-800">{{ props.name }}</span>
        <span class="text-sm tracking-wider text-slate-500">{{ values[props.value] }}</span>
    </div>
</li>
</template>
