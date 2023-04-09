<script setup lang="ts">
    import GrButton from '~/components/atoms/gr-button.vue';
    import GrInput from '~/components/atoms/gr-input.vue';
    import GrSelect from '~/components/atoms/gr-select.vue';

    const skills = [{key:'JAVA', value:'Java'},
                    {key:'JAVASCRIPT', value:'JavaScript'},
                    {key:'PHP', value:'PhP'},
                    {key:'KOTLIN', value:'Kotlin'},
                    {key:'VS', value:'Visual Studio'}];
                    
    const emit = defineEmits(['doNext','doPrevious']);
    const next = () => emit('doNext');
    const previous = () => emit('doPrevious');                        
</script>

<template>
    <section id="skills" class="relative flex flex-col w-full bg-white min-h-[560px] px-5 py-5 gap-9">
            <div class="flex flex-col flex-1 gap-4">
                <img class="pb-5" src="/img/breadcrumbs.png" />
                <div class="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/skills.png">
                    <h3 class="font-semibold text-base"> What can you do?</h3>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-2">      
                        <gr-input id="skill" placeholder="Type a skill" type="text"/>            
                        <gr-button kind="add" />                                              
                    </div>
                    <div class="flex flex-col items-start gap-4">
                        <h3 class="font-semibold">Registered Skills</h3>
                        <li v-for="item in skills" class="list-none text-[#00A3FF]">
                            {{item.value}}
                        </li> 
                    </div>
                </div>
            </div>
            <div class="flex w-full items-center justify-between">  
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