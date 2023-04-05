<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrSelect from '~/components/atoms/gr-select.vue';

    const skills = [{key:'JAVA', value:'Java'},
                    {key:'JAVASCRIPT', value:'JavaScript'},
                    {key:'PHP', value:'PhP'},
                    {key:'KOTLIN', value:'Kotlin'},
                    {key:'VS', value:'Visual Studio'}]    
</script>

<template>
    <section id="location" class="relative flex flex-col w-full bg-white min-h-[560px] px-5 py-5 gap-9">
            <div class="flex flex-col flex-1 gap-4">
                <img class="pb-5" src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/skills.png">
                    <h3 class="font-semibold text-base"> What can you do?</h3>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-2">      
                        <gr-select id="skill" placeholder="Select a skill" :list="skills"/>            
                        <gr-button kind="add" />                                              
                    </div>
                    <div class="flex flex-col items-start gap-4">
                        <h3>Suggested Skills</h3>
                        <li v-for="item in skills" class="list-none">
                            <gr-button :value="item.key" kind="add">{{item.value}}</gr-button>
                        </li> 
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