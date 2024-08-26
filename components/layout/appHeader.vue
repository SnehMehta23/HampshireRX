<template>
    <header class="bg-pharmaBlue-400 text-secondary py-4">
        <div class="container mx-auto px-4 flex items-center text-white text-base">
            <div class="hidden sm:flex ml-2">
                <img class="w-6 h-6" src="/public/images/svg/prescription.svg" alt="">
                <p class="text-white ml-2">Hours: Mon-Fri 10am-6pm, Sat 10am-2pm</p>
            </div>

            <!-- Desktop Navigation -->
            <nav class="ml-auto hidden sm:flex space-x-6">
                <NuxtLink v-if="currentRoute !== '/'" to="/" @click="handleNavClick('Home', '/')"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    Home
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NuxtLink>
                <NuxtLink v-if="currentRoute !== '/about'" to="/about" @click="handleNavClick('About', '/about')"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    About
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NuxtLink>
                <NuxtLink v-if="currentRoute !== '/privacy'" to="/privacy"
                    @click="handleNavClick('Privacy', '/privacy')"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    Privacy
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NuxtLink>
                <NuxtLink v-if="currentRoute !== '/faq'" to="/faq" @click="handleNavClick('FAQ', '/faq')"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    FAQ
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NuxtLink>
                <NuxtLink v-if="currentRoute !== '/prescription-transfer'" to="/prescription-transfer"
                    @click="handleNavClick('About', '/about')"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    Prescription Transfer
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </NuxtLink>
                <!-- Facebook Icon Link -->
                <NuxtLink to="https://www.facebook.com/HampshirePharmacy/" target="_blank" rel="noopener noreferrer"
                    @click="handleNavClick('Facebook', 'https://www.facebook.com/HampshirePharmacy/')"
                    class="hover:text-orange-500 transition-colors duration-200">
                    <img class="hover:opacity-75" src="/public/images/logos/Facebook_Logo_Primary.png" alt="Facebook"
                        width="24" height="24">
                </NuxtLink>
            </nav>

            <!-- Hamburger Menu Icon for Mobile -->
            <button @click="toggleMobileMenu" class="ml-auto sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-pharmaBlue-400 z-50">
            <div class="flex flex-col items-center justify-center h-full">
                <button @click="toggleMobileMenu" class="absolute top-4 right-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav class="flex flex-col space-y-4">
                    <NuxtLink to="/" @click="handleNavClick('Home', '/')"
                        class="text-white hover:text-orange-500 transition-colors duration-200">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/about" @click="handleNavClick('About', '/about')"
                        class="text-white hover:text-orange-500 transition-colors duration-200">
                        About
                    </NuxtLink>
                    <NuxtLink to="/privacy" @click="handleNavClick('Privacy', '/privacy')"
                        class="text-white hover:text-orange-500 transition-colors duration-200">
                        Privacy
                    </NuxtLink>
                    <NuxtLink to="/faq" @click="handleNavClick('FAQ', '/faq')"
                        class="text-white hover:text-orange-500 transition-colors duration-200">
                        FAQ
                    </NuxtLink>
                    <NuxtLink to="/about" @click="handleNavClick('Prescription Transfer', '/prescription-transfer')"
                        class="text-white hover:text-orange-500 transition-colors duration-200">
                        Prescription Transfer
                    </NuxtLink>
                    <NuxtLink to="https://www.facebook.com/HampshirePharmacy/" target="_blank" rel="noopener noreferrer"
                        @click="handleNavClick('Facebook', 'https://www.facebook.com/HampshirePharmacy/')"
                        class="text-white hover:text-orange-500 transition-colors duration-200">
                        Facebook
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const gtm = useGTM()

const route = useRoute();
const currentRoute = route.path;
const isMobileMenuOpen = ref(false);

const trackNavigationInteraction = (linkName, navigatingTo, navigatingFrom) => {
    gtm.trackEvent({
        event: 'navigation_interaction',
        linkName: linkName,
        navigatingTo: navigatingTo,
        navigatingFrom: navigatingFrom
    })
}

const handleNavClick = (linkName, navigatingTo) => {
    trackNavigationInteraction(linkName, navigatingTo, currentRoute)
    isMobileMenuOpen.value = false;
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<style scoped>
a {
    position: relative;
}

a:hover span {
    transform: scaleX(1);
}

a span {
    transform: scaleX(0);
    transition: transform 0.3s ease;
}
</style>