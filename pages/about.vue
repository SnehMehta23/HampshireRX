<template>
    <AppHeader />
    <div class="relative" ref="heroRef">
        <div :class="[
            'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
            'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400'
        ]">
            <div class="py-2 xl:px-20 px-0 xl:flex-none flex xl:justify-normal justify-center mb-2">
                <NuxtLink to="/" class="">
                    <img src="~/public/images/logos/secondaryWideLogo.png" alt="Hampshire Pharmacy Logo" class="w-64" />
                </NuxtLink>
            </div>
            <div class="flex flex-col items-center text-center xl:px-0 px-6 justify-center">
                <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
                <p class="text-2xl mb-4">
                    Access reliable generic drugs at fair prices,
                    <span class="underline-animation">no insurance needed!</span>
                </p>
            </div>

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

    <div class="p-4 flex justify-center max-w-7xl mx-auto">
        <div class="w-full md:w-10/12">
            <div class="flex flex-wrap items-center">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 p-4">
                    <strong class="block text-lg font-bold mb-2">Our Mission</strong>
                    <h2 class="text-2xl font-semibold mb-4">
                        Empowering Affordable Healthcare: Your Trusted Online Pharmacy
                    </h2>
                    <p class="text-base leading-relaxed">
                        We understand the challenges of navigating the complexities of healthcare costs, which is why
                        we've streamlined the process for you. We believe the future of your health should not be
                        reliant on your wealth. Our innovative platform features a user-friendly lookup tool designed to
                        swiftly identify affordable generic alternatives to brand-name medications. With just a few
                        clicks, you can access cost-effective options without compromising quality or efficacy. At our
                        Hampshire Pharmacy, we believe everyone deserves access to affordable healthcare solutions, and
                        we're committed to making that a new normal for our valued customers. <span
                            class="text-pharmaBlue-400">Come visit Hampshire
                            Pharmacy open Monday through Friday from 10:00 am to 6:00 pm.</span>
                    </p>
                </div>
                <!-- Image -->
                <div class="w-full md:w-1/2 p-4 flex justify-center">
                    <img src="../public/images/Tiny_pharmacists_with_prescription_drugs_for_patients-removebg-preview.png"
                        alt="Pharmacists with prescription drugs" class="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
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