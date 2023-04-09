<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrInput from '~/components/atoms/gr-input.vue';
    const emit = defineEmits(['doNext','doPrevious']);
    const next = () => emit('doNext');
    const previous = () => emit('doPrevious');
</script>

<template>
    <section id="availability" class="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
        <div class="flex flex-col flex-1 px-5 py-5 gap-4">
            <img class="pb-5" src="/img/breadcrumbs.png" />
            <div class="flex flex-col gap-3 items-center mb-8">
                <img src="/img/suitcase.png">
                <h3 class="font-semibold text-base"> Are you on the hunt?</h3>
            </div>
            <div class="flex flex-col gap-4 px-5">
                <div class="flex items-start gap-2">
                    <gr-input id="open_to_work" name="privacy" type="radio" kind="radio" />
                    <div class="flex flex-col">
                        <div class="flex gap-2">
                            <label for="open_to_work">Open to work</label>
                            <img src="/img/task_checked.png" class="w-5 h-5">
                        </div>
                        <p class="text-xs text-slate-400 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Fusce vel sapien molestie, sagittis enim non, luctus purus.
                        </p>                        
                    </div>            
                </div>

                <div class="flex items-start gap-2">
                    <gr-input id="unavailable" name="privacy" type="radio" kind="radio" />
                    <div class="flex flex-col">
                        <div class="flex gap-2">
                            <label for="unavailable">Unavailable for now</label>
                            <img src="/img/task_unchecked.png">
                        </div>                        
                        <p class="text-xs text-slate-400 font-normal">
                        Fusce vel sapien molestie, sagittis enim non, luctus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum.
                        </p>
                    </div>                    
                </div>

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