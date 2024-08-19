<style>
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in-left {
    animation: fadeInLeft 2.5s ease-out forwards;
}
</style>
<template>
    <div class="flex flex-col min-h-screen bg-cream-100">
        <AppHeader />
        <main class="flex-grow">
            <div class="relative" ref="heroRef">
                <div :class="[
                    'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
                    'transition-all duration-1000 ease-out'
                ]">
                    <div class="py-4 px-20">
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

                    <HowToCards />
                    <!-- SearchBar positioned absolutely -->
                    <div :class="[
                        'absolute left-1/2 bg-pharmaBlue-400 rounded-bl-full rounded-br-full py-6 transform -translate-x-1/2 mt-6 w-full max-w-4xl px-12',
                        'transition-all duration-1000 ease-out delay-500',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    ]">
                        <SearchBar />
                    </div>
                </div>

                <!-- Spacer div to push content below the search bar -->
                <div class="h-16"></div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-center mt-6">
                    <div
                        class="max-w-[400px] flex flex-col mx-auto text-left border border-pharmaBlue-400 shadow-lg rounded-md shadow-pharmaBlue-400">
                        <div class="bg-[#ebebeb] p-4 rounded-tl-md rounded-tr-md shadow-inner">
                            <h2 class="text-4xl font-bold leading-tight break-words">Broad Prescription Selection
                            </h2>
                        </div>
                        <div class="bg-[#d9dbe1] p-4 shadow-inner">
                            <p class="text-base">Your go-to pharmacy for a wide selection of trusted
                                prescription
                                medications. From common
                                to specialty medications, we have the prescriptions you need.</p>
                        </div>
                        <div class="flex bg-[#f0f0f0] rounded-bl-md rounded-br-md p-4 shadow-inner">
                            <img class="w-6 h-6" src="/public/images/svg/prescription.svg" alt="">
                            <p class="text-pharmaBlue-400">Hours: Mon-Fri 10am-6pm, Sat 10am-2pm</p>
                        </div>
                    </div>
                    <div>
                        <div
                            class="bg-pharmaBlue-400 py-10 border border-pharmaBlue-400 shadow-lg rounded-3xl shadow-pharmaBlue-400 space-y-2 px-10">
                            <span class="opacity-50">Who are we?</span>
                            <h3 class="text-3xl font-bold">Trusted Community Pharmacy</h3>
                            <p class="font-light">As a trusted community pharmacy for over 10 years we are fed up with
                                the current state of
                                healthcare. We're on a mission to change the game. Unlike anonymous assembly lines,
                                we're your neighbors, and you'll always know who's behind your prescription.</p>
                            <div class="flex items-center">
                                <div class="bg-white rounded-full w-3 h-3"></div>
                                <div class="flex items-center space-x-16">
                                    <div class="flex flex-col ml-2 mt-[6px]">
                                        <span class="opacity-50">Trusted Care</span>
                                        <span class="font-bold drop-shadow-lg">10+ Years</span>
                                    </div>
                                    <div
                                        class="bg-orange-400 cursor-pointer p-2 ml-4 rounded-lg hover:bg-orange-600 transition duration-300 shadow-inner drop-shadow-lg border-2 border-orange-400 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                                        View Our FAQs &#8594;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            class="bg-orange-400 py-10 border border-orange-400 shadow-lg rounded-3xl shadow-orange-400 space-y-2 px-10 h-[400px]">
                            <span class="opacity-50">Convenience</span>
                            <h3 class="text-3xl font-bold">Generic Prescription Lookup Tool</h3>
                            <p class="font-light">Enjoy the flexibility to pick up multiple months' worth of generic
                                medications without
                                long wait times. With efficient service and a streamlined process, you can easily manage
                                your prescriptions, saving time and hassle while prioritizing your health needs.</p>
                            <div class="flex justify-between">
                                <div class="items-center flex">
                                    <div class="bg-white rounded-full w-3 h-3"></div>
                                    <div class="flex flex-col ml-2">
                                        <span class="opacity-50">Prescription Experts</span>
                                        <span class="font-bold drop-shadow-lg">1000s of Generic Alts</span>
                                    </div>
                                </div>
                                <div class="items-center flex">
                                    <img src="/public/images/image1.png" alt="" class="w-24 h-8 drop-shadow-xl">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center mx-auto max-w-5xl mt-12 mb-24 space-y-8">
                    <!-- outer square -->
                    <div class="">
                        <ParallaxCard />
                    </div>

                    <div class="p-2 text-center">
                        <p>At Hampshire Pharmacy, fostering healthier lives within our communities is more than a
                            mission—it's our unwavering commitment. With every service we offer, every medication we
                            dispense, and every interaction we have, trust is our cornerstone. We're dedicated to your
                            well-being, ensuring that every aspect of our care reflects our deep-rooted values of
                            integrity, compassion, and reliability. When you choose Hampshire Pharmacy, you're choosing
                            a partner in your journey to a healthier, happier life.</p>
                    </div>
                </div>
            </div>
        </main>
        <AppFooter />
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppHeader from '../components/layout/appHeader.vue'
import SearchBar from '../components/searchBar.vue'
import CardComponent from '../components/cardComponent.vue'
import AboutSection from '../components/aboutSection.vue'
import ParallaxCard from '~/components/parallaxCard.vue'
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