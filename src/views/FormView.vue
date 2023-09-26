<template>
    <div class="h-screen bg-blue-200">
        <div class="container">
            <div class="w-3/5 m-auto flex flex-wrap gap-3 md:gap-0 pt-20">
                <h1 class="md:px-5 basis-full text-xl pb-8 font-semibold">فرم اطلاعات اولیه</h1>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">سن</span>
                    <input v-model="age" id="age" placeholder="سن شما" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" type="text">
                    <span v-if="inputIsRequiredAndInvalid(age)" class="text-red-500">این فیلد اجباری می‌باشد!</span>
                </div>
               
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">دانشگاه محل تحصیل</span>
                    <input v-model="university" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="دانشگاه محل تحصیل شما" type="text">
                    <span v-if="inputIsRequiredAndInvalid(university)" class="text-red-500">این فیلد اجباری می‌باشد!</span>
                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">رشته تحصیلی</span>
                    <input v-model="caseOfStudy" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="رشته تحصیلی شما" type="text">
                    <span v-if="inputIsRequiredAndInvalid(caseOfStudy)"  class="text-red-500">این فیلد اجباری می‌باشد!</span>
                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">شماره تماس</span>
                    <input v-model="phoneNumber" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="شماره تماس شما" type="text">
                    <span v-if="inputIsRequiredAndInvalid(phoneNumber)"  class="text-red-500">این فیلد اجباری می‌باشد!</span>
                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">ایمیل</span>
                    <input v-model="email" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="ایمیل شما(اختیاری)" type="text">
                    <!-- <span class="text-red-500">این فیلد اجباری می‌باشد!</span> -->
                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4 flex flex-wrap gap-4 h-12">
                    <span class="basis-full text-xl">جنسیت</span>
                    <div class="basis-full">
                        <label class="text-lg pb-2" for="gender">زن</label>
                        <input v-model="gender" name="gender" id="gender" class="border border-black rounded-lg bg-yellow-200" type="radio" value="male">
                        <label class="text-lg pb-2 mr-5" for="gender">مرد</label>
                        <input v-model="gender" name="gender" id="gender" class="border border-black rounded-lg bg-yellow-200" type="radio" value="female">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {ref} from 'vue'
const age = ref()
const university = ref()
const caseOfStudy = ref()
const phoneNumber = ref()
const email = ref()
const gender = ref()
const inputIsRequiredAndInvalid = function(variable)
{
    return variable == '' || variable == null
}
</script>

<style lang="scss" scoped>

</style>