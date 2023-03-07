<script setup lang="ts">
    import starBlack from '~/assets/star-black.png';
    import starYellow from '~/assets/star-yellow.png';

    const MAX_LIMIT = 5;

    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 1
        }
    })

    const blacks = computed(() => MAX_LIMIT - props.value);
</script>

<template>
<li v-once class="px-1">
    <span class="text-sm tracking-wider">{{ props.name }}</span>
    <div class="flex gap-1">
        <img v-for="(_, key) in props.value" :key="key" :src="starYellow" width="18" height="18" alt="starYellow"/>
        <img v-for="(_, key2) in blacks" :key="key2" :src="starBlack" width="18" height="18" alt="starBlack"/>
    </div>
</li>
</template>
