<template>
    <div class="bg-blue-200 h-screen overflow-y-scroll">
        <div class="text-center m-auto w-[700px] mt-[20px]">
            <p class="text-xl font-semibold">در ادامه واژه‌هایی را مشاهده خواهید کرد که احساسات و هیجانات مختلف را توصیف
                می‌کند. از شما می‌خواهیم هر یک از عبارات را با دقت خوانده و مشخص کنید به طور معمول و در حالت کلی، هریک از
                احساسات زیر را به چه میزانی تجربه می‌کنید.</p>
        </div>
        <ol class="flex flex-wrap mt-10">
            <li v-for="question in questions" :key="question.question" class="basis-1/2 px-2 flex items-center my-4 ">
                <p class="basis-1/2 text-lg font-bold">{{question.question}}</p>
                <!-- <slider v-model="question.answer" :min="1" :max="5" :flipTooltip="true" :tooltipText="toolTipValue(question.answer)" :handleScale="3" :tooltip="true" :alwaysShowHandle="true" :sticky="true"   color="green" track-color="yellow"/> -->
                <slider v-model="testValue" :min="1" :max="5" :flipTooltip="true" :tooltipText="toolTipValue" :handleScale="3" :tooltip="true" :alwaysShowHandle="true" :sticky="true"   color="green" track-color="yellow"/>
            
            </li>
        </ol>

    </div>
</template>

<script setup>
const testValue = ref(2)
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
import slider from "vue3-slider"
import { useDataStore } from "../stores/dataStore.js";
const store = useDataStore()
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const questions = ref([{
question : 'علاقه‌مندم',
answer:''
},
{
question : 'پریشان و مضطربم ',
answer:''
},
{
question : 'ذوق زده‌ام ',
answer:''
},
{
question : 'آشفته و ناراحتم',
answer:''
},
{
question : 'محکم و نیرومندم',
answer:''
},
{
question : 'مقصر و گناهکارم',
answer:''
},
{
question : 'وحشت زده‌ام',
answer:''
},
{
question : 'احساس خصمانه ای نسبت به دیگران دارم',
answer:''
},
{
question : 'مشتاقم و شور و شوق دارم',
answer:''
},
{
question : 'احساس سربلندی، غرور و افتخار می‌کنم',
answer:''
},
{
question : 'زودرنج و تحریک پذیرم',
answer:''
},
{
question : 'هوشیار و زیرکم',
answer:''
},
{
question : 'شرمسار و سرافکنده‌ام',
answer:''
},
{
question : 'خوش ذوق و با انگیزه‌ام',
answer:''
},
{
question : 'نا آرام و بی قرارم',
answer:''
},
{
question : 'مصمم و بااراده‌ام',
answer:''
},
{
question : 'آدم دقیقی هستم',
answer:''
},
{
question : 'عصبی هستم',
answer:''
},
{
question : 'فعال و پر جنب و جوشم',
answer:''
},
{
question : 'هراسان هستم',
answer:''
}
])
</script>

<style scoped>

</style>
<!-- <style src="@vueform/slider/themes/default.css"></style> -->