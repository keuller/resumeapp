<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue'
    import GrSelect from '~/components/atoms/gr-select.vue'
    import GrInput from '~/components/atoms/gr-input.vue'

    const educationLevels = [{key:'HS', value:'High School degree'},
                             {key:'TC', value:'Technical degree'},
                             {key:'TC', value:'Bachelor\'s degree'},
                             {key:'TC', value:'Master\'s degree'},
                             {key:'TC', value:'Doctorate degree'}]
</script>

<template>
    <section id="education" class="relative flex flex-col w-full bg-white min-h-[560px] px-10 py-5">
            <div class="flex flex-col flex-1 gap-4">
                <img class="py-5" src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/education.png">
                    <h3 class="font-semibold text-base"> Show us what you've got :D</h3>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-4">      
                        <gr-select id="education_level" placeholder="Education" :list="educationLevels" />                                                                                                                            
                        <gr-input placeholder="Country" />
                        <gr-input placeholder="Course" /> 
                    </div>
                    <div class="flex gap-4 items-center">
                        <div class="flex-1">
                            <gr-input type="date"/>
                        </div>
                        <div class="flex-1">
                            <input id="show_phone" type="checkbox">
                            <label for="show_phone" class="text-sm"> On going</label>
                        </div>                                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center justify-between">  
                <div>
                    <gr-button kind="outline">Back</gr-button>                     
                </div>
                <div>
                    <gr-button kind="link">Skip</gr-button> 
                    <gr-button kind="primary">Next</gr-button> 
                </div>                
            </div>
        </section>
</template>