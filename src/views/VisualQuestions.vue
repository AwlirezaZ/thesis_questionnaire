<template>
    <div class="bg-blue-200 h-screen">
        <div class="container m-auto" v-if="selfConditions">
            <span class="text-6xl pt-[200px] text-center block font-bold" v-show="showStage">{{ currentStage
            }}</span>
            <Transition name="bounce">
                <div class="w-1/2 m-auto pt-[100px]" v-show="showImage">
                    <img class="w-full h-[500px] object-cover" :src="imageRoute+selfConditions[currentImageIndex].picture" alt="">
                </div>
            </Transition>
            <div class="w-1/2 m-auto pt-[450px]" v-show="showSlider">
                <slider v-model="selfConditions[currentImageIndex].answer" :height="15" :min="-100" :max="100" :flipTooltip="true"
                    :handleScale="3" :tooltip="true" :alwaysShowHandle="true" :sticky="false" color="green"
                    track-color="yellow" />
                <button @click="nextPic"
                    class="w-32 h-16 block rounded-md mt-32 mx-auto gap-3 bg-yellow-200 duration-200 ease-in hover:scale-105 hover:-translate-y-1">مرحله
                    بعد</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import slider from "vue3-slider"
import { ref, onMounted } from 'vue';
const stages = ref(['مرحله اول', 'مرحله دوم', 'مرحله سوم', 'مرحله چهارم'])
const currentStage = ref(stages.value[0])

const showStage = ref(true)
const imageRoute= "http://localhost:5089/app-images/"
const showImage = ref(false)
const showSlider = ref(false)
const getImages = async () => {
    const url = 'http://localhost:5089/api/SelfCondition'
    const response = await fetch(url);
    selfConditions.value = await response.json();
    selfConditions.value.forEach(function (element) {
    element.answer = 0;
});
}
const selfConditions = ref(null)

const currentImageIndex = ref(0)

const startFirstStage = onMounted(() => {
    getImages()
    setTimeout(() => {
        showStage.value = false;
        currentStage.value = stages.value[1];
        showImage.value = true;
    }, 2000)
    waitForImage()
})
const nextPic = () => {
    showSlider.value = false
    showImage.value = true
    currentImageIndex.value++
    waitForImage()

}
const waitForImage = () => {
    setTimeout(() => {
        showImage.value = false;
        showSlider.value = true;
    }, 6000)
}

</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}</style>