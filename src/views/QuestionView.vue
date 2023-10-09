<template>
    <div class="bg-blue-200 h-screen overflow-y-scroll lg:px-10">
        <div class="text-center m-auto w-full p-2 lg:w-[700px] mt-[20px]">
            <p class="text-base lg:text-xl font-semibold">در ادامه واژه‌هایی را مشاهده خواهید کرد که احساسات و هیجانات مختلف را توصیف
                می‌کند. از شما می‌خواهیم هر یک از عبارات را با دقت خوانده و مشخص کنید به طور معمول و در حالت کلی، هریک از
                احساسات زیر را به چه میزانی تجربه می‌کنید.</p>
        </div>
        <ol class="flex flex-wrap mt-10">
            <li v-for="question in questions" :key="question.question" class="basis-full lg:basis-1/2 px-2 mb-2 lg:mb-6">
                <div class="flex flex-wrap gap-14 lg:gap-0 items-center border border-yellow-400 rounded-xl lg:h-24 p-4 lg:p-2 hover:border-yellow-800 duration-300">
                    <p class="basis-full lg:basis-1/3 text-base text-center lg:text-start lg:text-lg font-bold">{{question.question}}</p>
                    <!-- <slider v-model="question.answer" :min="1" :max="5" :flipTooltip="true" :tooltipText="toolTipValue(question.answer)" :handleScale="3" :tooltip="true" :alwaysShowHandle="true" :sticky="true"   color="green" track-color="yellow"/> -->
                    <div class="grow pr-3 pl-6 relative">
                        <div class="w-full relative">
                            <div class="absolute flex w-full left-0 right-0 -top-2.5 h-7 pointer-events-none text-xs lg:text-base">
                                <div class="basis-1/4 h-full border-l-2 border-r-2 relative border-black after:absolute after:-left-2.5 lg:after:-left-3.5 after:font-semibold after:-top-7 after:content-['زیاد'] before:absolute before:-right-4 lg:before:-right-6 before:font-semibold before:-top-7 before:content-['خیلی‌زیاد']"></div>
                                <div class="basis-1/4 h-full border-l-2 relative border-black after:absolute after:-left-4 lg:after:-left-6 after:font-semibold after:-top-7 after:content-['متوسط']"></div>
                                <div class="basis-1/4 h-full border-l-2 relative border-black after:absolute after:-left-2 lg:after:-left-3 after:font-semibold after:-top-7 after:content-['کم']"></div>
                                <div class="basis-1/4 h-full border-l-2 relative border-black after:absolute after:-left-4 lg:after:-left-6 after:font-semibold after:-top-7 after:content-['خیلی‌کم']"></div>
                            </div>
                            <slider v-model="question.answer" :min="1" :max="5" :flipTooltip="true" :tooltipText="toolTipValue" :handleScale="3" :tooltip="false" :alwaysShowHandle="true" :sticky="true"   color="green" track-color="yellow"/>
                        </div>
                    </div>
                </div>
            </li> 
        </ol>
        <button @click="submit" class="p-2 block rounded-md my-4 mx-auto gap-3 bg-yellow-200 duration-200 ease-in hover:scale-105 hover:-translate-y-1">مرحله بعد</button>
    </div>
</template>

<script setup>
import slider from "vue3-slider"
import { useDataStore } from "../stores/dataStore.js";
const store = useDataStore()
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const submit = () => {
        store.data.questions = questions.value
}
const questions = ref([{
question : 'علاقه‌مندم',
answer: 0,
},
{
question : 'پریشان و مضطربم ',
answer: 0,
},
{
question : 'ذوق زده‌ام ',
answer: 0,
},
{
question : 'آشفته و ناراحتم',
answer: 0,
},
{
question : 'محکم و نیرومندم',
answer: 0,
},
{
question : 'مقصر و گناهکارم',
answer: 0,
},
{
question : 'وحشت زده‌ام',
answer: 0,
},
{
question : 'احساس خصمانه ای نسبت به دیگران دارم',
answer: 0,
},
{
question : 'مشتاقم و شور و شوق دارم',
answer: 0,
},
{
question : 'احساس سربلندی، غرور و افتخار می‌کنم',
answer: 0,
},
{
question : 'زودرنج و تحریک پذیرم',
answer: 0,
},
{
question : 'هوشیار و زیرکم',
answer: 0,
},
{
question : 'شرمسار و سرافکنده‌ام',
answer: 0,
},
{
question : 'خوش ذوق و با انگیزه‌ام',
answer: 0,
},
{
question : 'نا آرام و بی قرارم',
answer: 0,
},
{
question : 'مصمم و بااراده‌ام',
answer: 0,
},
{
question : 'آدم دقیقی هستم',
answer: 0,
},
{
question : 'عصبی هستم',
answer: 0,
},
{
question : 'فعال و پر جنب و جوشم',
answer: 0,
},
{
question : 'هراسان هستم',
answer: 0,
}
])

</script>

<style scoped>

</style>
<!-- <style src="@vueform/slider/themes/default.css"></style> -->