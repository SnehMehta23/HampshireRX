<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />
        <main class="flex-grow bg-cream-100">
            <div class="container mx-auto px-4">
                <div class="py-8">
                    <NuxtLink to="/" class="inline-block">
                        <img src="~/public/images/logos/HampshireRXLogo.webp" alt="Hampshire Pharmacy Logo"
                            class="w-64" />
                    </NuxtLink>
                </div>
                <SearchBar />
                <div class="flex items-center justify-center mt-12 mb-8">
                    <img src="~/public/images/svg/capsule.svg" alt="Pill Icon" class="w-8 h-8 mr-3" />
                    <h2 class="text-2xl font-semibold">Why Choose Hampshire Pharmacy?</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <CardComponent title="Getting Started Is Simple" :list-items="[
                        'Look up your medication and find your savings.',
                        'Send your prescription to Hampshire Pharmacy at 262 N State St, Hampshire, IL.',
                        'We will send you a text to pick up or get your prescription delivered.'
                    ]" button-text="View our FAQ" button-link="/faq" />
                    <CardComponent title="Convenience"
                        content="Enjoy the flexibility to pick up multiple months' worth of generic medications without long wait times. With efficient service and a streamlined process, you can easily manage your prescriptions, saving time and hassle while prioritizing your health needs."
                        button-text="Learn More" button-link="/about" />
                    <CardComponent title="Who are we?"
                        content="As a trusted community pharmacy for over 10 years we are fed up with the current state of healthcare. We're on a mission to change the game. Unlike anonymous assembly lines, we're your neighbors, and you'll always know who's behind your prescription."
                        button-text="About Us" button-link="/about" />
                </div>
                <AboutSection />
            </div>
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '../components/layout/appHeader.vue'
import SearchBar from '../components/searchBar.vue'
import CardComponent from '../components/cardComponent.vue'
import AboutSection from '../components/aboutSection.vue'
import AppFooter from '../components/layout/appFooter.vue'
</script>