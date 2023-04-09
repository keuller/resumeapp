<script setup lang="ts">
    import ContactSection from "~/components/register/contact-section.vue"
    import LocationSection from "~/components/register/location-section.vue"
    import EducationSection from "~/components/register/education-section.vue"
    import ExperienceSection from "~/components/register/experience-section.vue"
    import SkillsSection from "~/components/register/skills-section.vue"
    import PrivacySection from  "~/components/register/privacy-section.vue"
    import Availability from  "~/components/register/availability-section.vue"
    import TopBar from "~/components/top-bar.vue"

    const step = ref<number>(1);
    const increment = () => step.value = step.value +1;
    const decrement = () => step.value = step.value -1;
</script>

<template>
    <top-bar />
    <contact-section v-if="step===1" @doNext="increment()"/>    
    <location-section v-if="step===2" @doNext="increment()" @doPrevious="decrement()"/>
    <education-section v-if="step===3" @doNext="increment()" @doPrevious="decrement()"/>
    <experience-section v-if="step===4" @doNext="increment()" @doPrevious="decrement()"/>
    <skills-section v-if="step===5" @doNext="increment()" @doPrevious="decrement()"/>
    <privacy-section v-if="step===6" @doNext="increment()" @doPrevious="decrement()"/>
    <availability v-if="step===7" @doNext="increment()" @doPrevious="decrement()"/>
</template>