<script setup lang="ts">
const props = defineProps({
    option: {
        type: String,
        default: 'Option'
    }
})
</script>
<template>
    <select required class="w-full h-12 bg-transparent border border-slate-400 rounded-md">
        <option  value="" disabled selected hidden>Select a {{option}}</option>
    </select>
</template>

