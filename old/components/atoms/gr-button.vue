<script setup lang="ts">
    defineProps({
        kind: {
            type: String,
            default: 'primary'
        }
    })

    const emit = defineEmits(['onClick']);
</script>

<template>
    <button type="button" :class="kind" @click.prevent="emit('onClick')">
        <slot/>
    </button>
</template>

<style scoped>
.primary {
    @apply text-white text-sm min-w-[100px] font-bold px-4 py-3 rounded-md bg-[#10A9FF] outline-none hover:bg-[#0D81C2] w-full;
}

.outline {
    @apply text-blue-400 text-sm min-w-[100px] font-bold px-4 py-3 border-[#10A9FF] rounded-md outline-none hover:bg-[#0D81C2] w-full;
}
</style>
