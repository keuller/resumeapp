<script setup lang="ts">
    type Project = {
        name: string,
        description: string,
        stack: string[]
    }

    const props = defineProps({
        data: {
            type: Object as PropType<Project>,
            default: {}
        }
    })
</script>

<template>
    <div class="flex flex-col p-3 border-t-1">
        <h3 class="font-bold">{{ props.data.name }}</h3>
        <div class="text-sm text-slate-500">{{ props.data.description }}</div>
        <div class="flex flex-wrap gap-2 py-2">
            <Badge v-for="item in props.data.stack" :name="item" />
        </div>
    </div>
</template>
