<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue'
</script>
<template>
    <section id="contact" class="relative flex flex-col bg-white min-h-[560px] px-10 py-5">
            <div class="flex flex-col flex-1 gap-4">
                <img class="py-5" src="~/assets/breadcrumbs.png" />
                <div class="flex flex-col gap-4 items-center mb-12">
                    <img src="~/assets/phone.png">
                    <h3 class="font-semibold"> Want to add you phone number? </h3>
                </div>
                <div class="flex flex-col gap-2">
                    <div>
                        <label class="font-semibold text-sm text-slate-400">(Optional)</label>
                        <input type="number" id="phone_number" placeholder="Phone number" class="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300">
                    </div>
                    <div>
                        <input id="show_phone" type="checkbox">
                        <label for="showPhone" class="text-sm"> Show my number in my resume</label>
                    </div>
                    <div>
                        <label class="text-slate-500 text-sm"> By sending this form with this box marked, you confirm you
                            are the primary user of the phone number stated and complies to receiving phone calls from
                            companies that use Get Rezume</label>
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center justify-end">        
                <gr-button kind="link">Skip</gr-button> 
                <gr-button kind="primary">Next</gr-button> 
            </div>
        </section>
</template>