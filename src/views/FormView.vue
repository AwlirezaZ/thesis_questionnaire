<template>
    <div class="h-screen bg-blue-200 overflow-y-scroll">
        <div class="container">
            <div class="w-3/5 m-auto flex flex-wrap gap-3 md:gap-0 pt-20">
                <h1 class="md:px-5 basis-full text-xl pb-8 font-semibold">فرم اطلاعات اولیه</h1>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">سن</span>
                    <input v-model="age.model" id="age" placeholder="سن شما" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" type="text">
                    <span v-if="showErrors && ageValidateError.isError" class="text-red-500">{{ageValidateError.errorMassage}}</span>
                </div>
               
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">دانشگاه محل تحصیل</span>
                    <input v-model="university.model" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="دانشگاه محل تحصیل شما" type="text">
                    <span v-if="showErrors&&universityValidateError.isError" class="text-red-500">{{universityValidateError.errorMassage}}</span>

                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">رشته تحصیلی</span>
                    <input v-model="caseOfStudy.model" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="رشته تحصیلی شما" type="text">
                    <span v-if="showErrors && caseOfStudyValidateError.isError" class="text-red-500">{{caseOfStudyValidateError.errorMassage}}</span>

                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">شماره تماس</span>
                    <input v-model="phoneNumber.model" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="شماره تماس شما" type="text">
                    <span v-if="showErrors && phoneNumberValidateError.isError" class="text-red-500">{{phoneNumberValidateError.errorMassage}}</span>

                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4">
                    <span class="text-xl block mb-2">ایمیل</span>
                    <input v-model="email.model" class="border border-black w-full pr-1 focus:outline-none py-1 rounded-lg bg-yellow-200" placeholder="ایمیل شما(اختیاری)" type="text">
                    <span v-if="showErrors&&emailValidateError.isError" class="text-red-500">{{emailValidateError.errorMassage}}</span>

                </div>
                <div class="basis-full md:basis-1/2 md:px-5 md:mb-4 flex flex-wrap gap-4 h-12">
                    <span class="basis-full text-xl">جنسیت</span>
                    <div class="basis-full">
                        <label class="text-lg pb-2" for="gender">زن</label>
                        <input v-model="gender.model" name="gender" id="gender" class="border border-black rounded-lg bg-yellow-200" type="radio" value="female">
                        <label class="text-lg pb-2 mr-5" for="gender">مرد</label>
                        <input v-model="gender.model" name="gender" id="gender" class="border border-black rounded-lg bg-yellow-200" type="radio" value="male">
                    </div>
                </div>
                <button @click="submit" class="p-2 rounded-md my-4 mx-auto bg-yellow-200 duration-200 ease-in hover:scale-105 hover:-translate-y-1">مرحله بعد</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useDataStore } from "../stores/dataStore.js";
const store = useDataStore()
import {ref,computed} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const requiredFieldText = "این فیلد اجباری می‌باشد!"
const showErrors = ref(false)
const invalidFormat = "فرمت ورودی صحیح نمی‌باشد!"
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberRegex =/^-?\d+\.?\d*$/;
const age = ref({
    model:'',
    errorMessage:requiredFieldText
})
const university =ref({
    model:'',
    errorMessage:requiredFieldText
})
const caseOfStudy = ref({
    model:'',
    errorMessage:requiredFieldText
})
const phoneNumber = ref({
    model:'',
    errorMessage:requiredFieldText
})
const email =ref({
    model:'',
    errorMessage:invalidFormat
})
const gender = ref({
    model:'female',
    errorMessage:requiredFieldText
})
const ageValidateError = computed(() => {
    let error = {
        isError: false,
        errorMassage: age.value.errorMessage,
    }
    if (!age.value.model.length) {
        error.isError = true;
    } else if(!age.value.model.match(numberRegex)) {
        error.errorMassage=invalidFormat
        error.isError = true
    }
    else{
        error.isError = false;
    }
    return error
})
const universityValidateError = computed(() => {
    let error = {
        isError: false,
        errorMassage: university.value.errorMessage,
    }
    if (!university.value.model.length) {
        error.isError = true;
    }
    else{
        error.isError = false;

    }
    return error
})
const caseOfStudyValidateError = computed(() => {
    let error = {
        isError: false,
        errorMassage: caseOfStudy.value.errorMessage,
    }
    if (!caseOfStudy.value.model.length) {
        error.isError = true;
    }
    else{
        error.isError = false;

    }
    return error
})
const phoneNumberValidateError = computed(() => {
    let error = {
        isError: false,
        errorMassage: phoneNumber.value.errorMessage,
    }
    if (!phoneNumber.value.model.length) {
        error.isError = true;
    } else if(!phoneNumber.value.model.match(numberRegex)) {
        error.errorMassage=invalidFormat
        error.isError = true
    }
    else{
        error.isError = false;

    }
    return error
})
const emailValidateError = computed(() => {
    let error = {
        isError: false,
        errorMassage: email.value.errorMessage,
    }
    if(email.value.model && !email.value.model.match(emailRegex)) {
        error.errorMassage=invalidFormat
        error.isError = true
    }
    else{
        error.isError = false;

    }
    return error
})

const submit = () => {
    if(validate() === true){
        store.data.userInfo = {age: age.value.model , university: university.value.model,caseOfStudy: caseOfStudy.value.model,phoneNumber: phoneNumber.value.model,email:email.value.model,gender:gender.value.model}
        router.push( {name: 'QuestionView'})
    }
}
const validate = ()=>{
    debugger;
    if(ageValidateError.value.isError || universityValidateError.value.isError || caseOfStudyValidateError.value.isError || phoneNumberValidateError.value.isError 
    || emailValidateError.value.isError){
        showErrors.value = true;
        return false;
    }
    return true
}
</script>

<style lang="scss" scoped>

</style>