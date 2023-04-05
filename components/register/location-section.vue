<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrSelect from '~/components/atoms/gr-select.vue';
    import GrInput from '~/components/atoms/gr-input.vue';

    type CountryView = Record<string,string>;
    const {data} = useFetch<CountryView>('/api/countries');
</script>

<template>
    <section id="location" class="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
            <div class="flex flex-col flex-1 px-5 py-5 gap-4">
                <img class="pb-5" src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/earth.png">
                    <h3 class="font-semibold text-base"> Where are you? :)</h3>
                </div>
                <div class="flex flex-col gap-4">
                    <div>      
                        <gr-select id="country" placeholder="Country" :list="data" />                                           
                    </div>
                    <div class="flex flex-col">
                        <gr-input id="city" kind="primary" type="text" placeholder="City" />                                      
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center px-4 justify-between">        
                <gr-button kind="outline">Back</gr-button> 
                <gr-button kind="primary">Next</gr-button> 
            </div>
        </section>
</template>