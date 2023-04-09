<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue'
    import GrInput from '~/components/atoms/gr-input.vue'

    const emit = defineEmits(['doNext','doPrevious']);
    const next = () => emit('doNext');
    const previous = () => emit('doPrevious');
    
</script>
<template>
    <section id="contact" class="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
            <div class="flex flex-col flex-1 px-5 py-5 gap-4">
                <img class="pb-5" src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/phone.png">
                    <h3 class="font-semibold text-base"> Want to add you phone number? </h3>
                </div>
                <div class="flex flex-col gap-2">
                    <div>
                        <label class="font-semibold text-sm text-slate-400">(Optional)</label>
                        <gr-input id="phone_number" placeholder="Phone number" type="number" />
                    </div>
                    <div>
                        <input id="show_phone" type="checkbox">
                        <label for="show_phone" class="text-sm"> Show my number in my resume</label>
                    </div>
                    <div>
                        <label class="text-slate-500 text-sm"> By sending this form with this box marked, you confirm you
                            are the primary user of the phone number stated and complies to receiving phone calls from
                            companies that use Get Rezume</label>
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center px-4 justify-end">        
                <gr-button kind="link">Skip</gr-button> 
                <gr-button @onClick="next()" kind="primary">Next</gr-button> 
            </div>
        </section>
</template>