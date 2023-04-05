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
    <section id="education" class="relative flex flex-col w-full bg-white min-h-[560px]">
            <div class="flex flex-col flex-1 px-5 py-5 gap-4">
                <img class="pb-5" src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/education.png">
                    <h3 class="font-semibold text-base"> Show us what you've got :D</h3>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-4">      
                        <gr-select id="education_level" placeholder="Education" :list="educationLevels" />                                                                                                                            
                        <gr-input id="education_country" placeholder="Country" />
                        <gr-input id="education_course" placeholder="Course" /> 
                    </div>
                    <div class="flex gap-4 items-center">                
                        <div class="flex-1">
                            <label for= "education_year" class="font-semibold text-xs text-slate-400">Graduation year</label>
                            <gr-input id="education_year" type="date"/>
                        </div>
                        <div class="flex-1">
                            <input id="education_ongoing" type="checkbox">
                            <label for="education_ongoing" class="text-sm"> On going</label>
                        </div>                                        
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center px-4 justify-between">  
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