<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue'
    import GrSelect from '~/components/atoms/gr-select.vue'
</script>

<template>
    <section id="location" class="relative flex flex-col bg-white min-h-[560px] px-10 py-5">
            <div class="flex flex-col flex-1 gap-4">
                <img class="py-5" src="~/assets/breadcrumbs.png" />
                <div class="flex flex-col gap-4 items-center mb-12">
                    <img src="~/assets/earth.png">
                    <h3 class="font-semibold"> Where are you? :)</h3>
                </div>
                <div class="flex flex-col gap-8">
                    <div>      
                        <gr-select id="countries" option="Country"/>                                           
                    </div>
                    <div class="flex flex-row gap-2">
                        <gr-select id="states" option="State"/>                                           
                        <gr-select id="cities" option="City"/>                                           
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center justify-between">        
                <gr-button kind="outline">Back</gr-button> 
                <gr-button kind="primary">Next</gr-button> 
            </div>
        </section>
</template>