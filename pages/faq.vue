<template>
    <AppHeader />
    <div class="relative" ref="heroRef">
        <div :class="[
            'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
            'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400'
        ]">
            <div class="py-2 px-20 mb-2">
                <NuxtLink to="/" class="">
                    <img src="~/public/images/image2.png" alt="Hampshire Pharmacy Logo" class="w-64" />
                </NuxtLink>
            </div>
            <div class="flex flex-col items-center jusitfy-center">
                <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
                <p class="text-2xl mb-4">Access reliable generic drugs at fair prices, no insurance needed!</p>
            </div>
            <div class="flex flex-col items-center justify-center mb-4 2xl:mb-6 text-dark-charcoal">
                <span
                    class="animate-fade-in-left text-md 2xl:text-5xl dark:text-white bg-white/20 p-2 border border-white/40 shadow-lg backdrop-blur-lg rounded-full">How
                    Hampshire Pharmacy Works <span class="text-orange-500">In Just Three
                        Steps</span></span>
            </div>

            <!-- TODO if we're on the privacy/faq and about page make a toggle to reveal easy steps -->
            <!-- <HowToCards /> -->

            <!-- SearchBar positioned absolutely -->
            <div :class="[
                'absolute left-1/2 bg-pharmaBlue-400 rounded-bl-full rounded-br-full py-6 transform -translate-x-1/2 mt-6 w-full max-w-4xl px-12',
                'transition-all duration-1000 ease-out delay-500 shadow-md shadow-pharmaBlue-400',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            ]">
                <SearchBar />
            </div>
        </div>
    </div>

    <!-- Spacer div to push content below the search bar -->
    <div class="h-16"></div>

    <div class="mt-8">
        <Accordion />
    </div>

    <AppFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppHeader from '../components/layout/appHeader.vue'
import SearchBar from '../components/searchBar.vue'
import AppFooter from '~/components/layout/appFooter.vue';

const isVisible = ref(false);
const heroRef = ref(null);

let observer = null;

onMounted(() => {
    // Delay the animation start by 1 second
    setTimeout(() => {
        observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                isVisible.value = true;
                observer.disconnect();  // Stop observing once visible
            }
        }, { threshold: 0.1 });  // Trigger when 10% of the element is visible

        if (heroRef.value) {
            observer.observe(heroRef.value);
        }
    }, 250);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>