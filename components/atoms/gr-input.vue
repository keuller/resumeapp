<script setup lang="ts">
 defineProps({
    placeholder:{
        type: String
    },
    type:{
        type: String,
        default: "text"
    },
    kind:{
        type: String,
        default: "primary"
    }
 })

</script>

<template>
    <input :placeholder="placeholder" :type="type" :class="kind">                                      
</template>

<style scoped>
.primary {
    @apply border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300 w-full h-[40px]
}

.underlined {
    @apply  px-2 py-0 outline-none border-b border-b-black focus:border-b-[#00A3FF] w-full h-[40px]
}
</style>