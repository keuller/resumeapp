<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrInput from '~/components/atoms/gr-input.vue';

    const emit = defineEmits(['doNext', 'doPrevious']);
    const next = () => emit('doNext');
    const previous = () => emit('doPrevious');
</script>

<template>
    <section id="privacy" class="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
        <div class="flex flex-col flex-1 px-5 py-5 gap-4">
            <img class="pb-5" src="/img/breadcrumbs.png" />
            <div class="flex flex-col gap-3 items-center mb-8">
                <img src="/img/quiet.png">
                <h3 class="font-semibold text-base"> We won't tell if you won't</h3>
            </div>
            <div class="flex flex-col gap-4 px-5">
                <div class="flex items-start gap-2">
                    <gr-input id="public" name="privacy" type="radio" kind="radio" />
                    <div class="flex flex-col">
                        <div class="flex gap-2">
                            <label for="public">Public</label>
                            <img src="/img/lock_open.png" class="w-5 h-5">
                        </div>                        
                        <p class="text-xs text-slate-400 font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a
                            condimentum eu, aliquam sit amet sapien. Fusce vel sapien molestie, sagittis enim non, luctus
                            purus.
                        </p>
                    </div>
                </div>

                <div class="flex items-start gap-2">
                    <gr-input id="private" name="privacy" type="radio" kind="radio" />
                    <div class="flex flex-col">
                        <div class="flex gap-2">
                            <label for="private">Private</label>
                            <img src="/img/lock_closed.png" class="w-5 h-5">
                        </div>                        
                        <p class="text-xs text-slate-400 font-normal">
                            Fusce vel sapien molestie, sagittis enim non, luctus purus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Phasellus tortor neque, finibus a condimentum.
                        </p>
                    </div>                    
                </div>
                <a class="text-xs text-[#00A3FF] underline" href="/privacy/en">Privacy Policy</a>
            </div>
        </div>
        <div class="flex w-full items-center px-4 justify-between">
            <div>
                <gr-button @onClick="previous()" kind="outline">Back</gr-button>
            </div>
            <div>
                <gr-button kind="link">Skip</gr-button>
                <gr-button @onClick="next()" kind="primary">Next</gr-button>
            </div>
        </div>
</section>
</template>