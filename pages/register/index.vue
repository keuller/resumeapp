<script setup lang="ts">
    import ContactSection from "~/components/register/contact-section.vue"
    import LocationSection from "~/components/register/location-section.vue"
    import EducationSection from "~/components/register/education-section.vue"
    import ExperienceSection from "~/components/register/experience-section.vue"
    import SkillsSection from "~/components/register/skills-section.vue"
    import PrivacySection from  "~/components/register/privacy-section.vue"
    import Availability from  "~/components/register/availability-section.vue"
    import TopBar from "~/components/top-bar.vue"
</script>

<template>
    <top-bar />
    <!-- <contact-section />    
    <location-section />
    <education-section/>
    <experience-section />
    <skills-section />
    <privacy-section /> -->
    <availability />
</template>