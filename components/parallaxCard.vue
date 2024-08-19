<template>
    <div class="relative w-[229px] h-[201px]" ref="cardRef">
        <!-- Staggered background cards -->
        <div :class="[
            'absolute inset-0 drop-shadow-lg mx-auto rounded-3xl z-20 w-[205px] h-[101px] bg-[#EBEBEB]',
            'transition-all duration-500 ease-out',
            isVisible ? 'opacity-100 translate-y-32' : 'opacity-0 translate-y-24'
        ]"></div>
        <div :class="[
            'absolute inset-0 drop-shadow-lg rounded-3xl mx-auto w-[165px] h-[101px] z-10 bg-[#F0F0F0]',
            'transition-all duration-500 ease-out delay-100',
            isVisible ? 'opacity-100 translate-y-36' : 'opacity-0 translate-y-28'
        ]"></div>

        <!-- Main card -->
        <div
            class="absolute inset-0 translate-y-3 drop-shadow-lg bg-[#D9DBE1] z-30 rounded-3xl p-4 flex flex-col border-[#D9DBE1] shadow-lg">
            <div class="flex justify-between items-start mb-auto">
                <span class="inline-block bg-white px-3 py-1 rounded-full text-sm">Generic</span>
                <div class="w-4 h-4 bg-white rounded-full"></div>
            </div>

            <div class="flex-grow flex items-center justify-center">
                <div class="transform rotate-[30deg]">
                    <img src="/public/images/image3.png" alt="Medication capsule"
                        class="w-24 h-12 object-contain drop-shadow-xl" />
                </div>
            </div>

            <div class="flex justify-between items-end mt-auto">
                <span class="text-md font-light">1000+ Medications</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const cardRef = ref(null);

let observer = null;

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            isVisible.value = true;
            observer.disconnect();  // Stop observing once visible
        }
    }, { threshold: 0.9 });  // Trigger when 10% of the element is visible

    if (cardRef.value) {
        observer.observe(cardRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>