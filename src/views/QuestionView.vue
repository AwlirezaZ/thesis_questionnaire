<template>
    <div>
        <div class="text-center m-auto w-[700px] mt-[20px]">
            <p class="text-xl font-semibold">در ادامه واژه‌هایی را مشاهده خواهید کرد که احساسات و هیجانات مختلف را توصیف
                می‌کند. از شما می‌خواهیم هر یک از عبارات را با دقت خوانده و مشخص کنید به طور معمول و در حالت کلی، هریک از
                احساسات زیر را به چه میزانی تجربه می‌کنید.</p>
        </div>
        <ol class="flex flex-wrap mt-10">
            <li class="basis-1/2 px-2 flex items-center ">
                <p class="basis-1/2">علاقه‌مندم</p>
                <slider v-model="testValue" :min="1" :max="5" :flipTooltip="true" :tooltipText="toolTipValue" :handleScale="3" :tooltip="true" :alwaysShowHandle="true" :sticky="true" :formatTooltip="testToolTip(testValue)"  color="green" track-color="yellow"/>
            </li>
            <li class="basis-1/2 px-2 flex items-center ">
                <p class="basis-1/2">علاقه‌مندم</p>
                <slider :min="1" :max="5" :tooltip="true" :handleScale="3" :sticky="true"  color="green" track-color="yellow"/>
            </li>
        </ol>

    </div>
</template>

<script setup>
const testValue = ref(2)
const testToolTip = (value) => {
    if (value == 3) {
        return 'text'
    }
}
const toolTipValue = computed(()=>{
    let state =''
    switch (testValue.value){
        case 1: state ='خیلی کم'
                break;
        case 2: state = 'کم'
                break;
        case 3: state ='متوسط'
                break;
        case 4: state ='زیاد'
                break;
        case 5: state ='خیلی زیاد'
                break;
            }
    return state;


}) 
// import Slider from '@vueform/slider'
import slider from "vue3-slider"
import { useDataStore } from "../stores/dataStore.js";
const store = useDataStore()
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(store.data.userInfo)
</script>

<style scoped>

</style>
<!-- <style src="@vueform/slider/themes/default.css"></style> -->