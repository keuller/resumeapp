<script setup lang="ts">
defineProps({
    placeholder: {
        type: String,
        default: 'Select an option'
    },
    list:{
        type: Array as PropType<Record<string,string>[]>,
        default: []
    },
    value:{
        type: String,
        default: ''
    }
})
</script>
<template>
    <select :value="value" class="gr-select">
        <option  value="" disabled selected hidden>{{placeholder}}</option>
        <option v-for="item in list" :value="item.key">{{item.value}}</option> 
    </select>
</template>

<style scoped>
.gr-select {
    position: relative;
    display: block;
    cursor: pointer;
    appearance: none;
    background-color: white;
    line-height: inherit;
    padding: 10px;
    background-image: url('/img/select-arrow.png');
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid #C1C1C1;
    border-radius: 5px;
}
</style>