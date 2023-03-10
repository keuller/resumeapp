<script setup lang="ts">
    const dateFormat = new Intl.DateTimeFormat('en-US');

    const props = defineProps({
        company: {
            type: String,
            default: ''
        },
        job: {
            type: String,
            default: '',
        },
        startDate: {
            type: String,
            default: ''
        },
        endDate: {
            type: String as PropType<string | null>,
            default: '',
        },
        mode: {
            type: Number,
            default: ''
        }
    });

    const period = computed(() => {
        const start = dateFormat.format(new Date(props.startDate));
        let end = 'Current';
        if (props.endDate) {
            end = dateFormat.format(new Date(props.endDate));
        }
        return `${start} - ${end}`;
    });

    function modeType(value: number): string {
        switch(value) {
            case 1: return 'Full-time';
            case 2: return 'Part-Time';
            case 3: return 'Freelancer';
            default: return 'Contract';
        }
    }
</script>

<template>
    <div class="flex flex-col p-3 border-t-1 leading-6">
        <h3 class="font-bold tracking-wide">{{ props.company }}</h3>
        <h4 class="text-sm tracking-wide">{{ props.job }}</h4>
        <div class="text-sm text-slate-500 tracking-wide">{{ period }} | {{ modeType(props.mode) }}</div>
        <div></div>
    </div>
</template>
