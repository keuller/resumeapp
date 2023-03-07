<script setup lang="ts">
    const props = defineProps({
        company: {
            type: String,
            default: ''
        },
        job: {
            type: String,
            default: '',
        },
        period: {
            type: String,
            default: ''
        },
        model: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <div class="flex flex-col p-3 border-t-1">
        <h3 class="font-bold">{{ props.company }}</h3>
        <h4 class="text-sm">{{ props.job }}</h4>
        <div class="text-sm text-slate-500">{{ props.period }} | {{ props.model }}</div>
        <div>

        </div>
    </div>
</template>
