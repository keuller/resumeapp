<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrSelect from '~/components/atoms/gr-select.vue';
    import GrInput from '~/components/atoms/gr-input.vue';

    const workSchedules = [{key:'FT', value:'Full-time'},
                             {key:'PT', value:'Part-time'},
                             {key:'IT', value:'Internship'},
                             {key:'FL', value:'Freelancer'}]
</script>

<template>
    <section id="location" class="relative flex flex-col w-full bg-white min-h-[560px] px-10 py-5 gap-8">
            <div class="flex flex-col flex-1 gap-4">
                <img src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/experience.png">
                    <h3 class="font-semibold text-base"> Tell us your story *-*</h3>
                </div>
                <div class="flex flex-col gap-4">
                    <gr-input id="company" placeholder="Company" />
                    <gr-input id="job_title" placeholder="Job title"/>
                    <div class="flex gap-4 items-center">
                        <div class="min-w-0 flex-1">
                            <label for= "start_date" class="font-semibold text-xs text-slate-400">Start date</label>
                            <gr-input id="start_date" type="date"/>
                        </div>
                        <div class="min-w-0 flex-1">
                            <label for= "end_date" class="font-semibold text-xs text-slate-400">End date</label>
                            <gr-input id="end_date" type="date"/>
                        </div>  
                    </div>
                    <div class=" flex flex-1 gap-4">
                            <input id="education_ongoing" type="checkbox">
                            <label for="education_ongoing" class="text-sm ">Present Job</label>
                        </div>    
                    <gr-select id="work_schedule" placeholder="Select a work schedule" :list="workSchedules"/>
                    <textarea class="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300 w-full h-40 resize-none" placeholder="Description"></textarea>
                    <gr-button kind="add">SAVE AND ADD NEW EXPERIENCE</gr-button>
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