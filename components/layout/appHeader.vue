<template>
    <header class="bg-pharmaBlue-400 text-secondary py-4">
        <div class="container mx-auto px-4 flex items-center text-white text-base">
            <nav class="ml-auto flex space-x-6">
                <a v-if="currentRoute !== '/'" href="/"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    Home
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a v-if="currentRoute !== '/about'" href="/about"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    About
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a v-if="currentRoute !== '/privacy'" href="/privacy"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    Privacy
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <a v-if="currentRoute !== '/faq'" href="/faq"
                    class="hover:underline hover:text-orange-500 transition-colors duration-200 relative">
                    FAQ
                    <span
                        class="absolute left-0 bottom-0 h-0.5 bg-orange-500 w-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                <!-- Facebook Icon Link -->
                <a href="https://www.facebook.com/HampshirePharmacy/" target="_blank" rel="noopener noreferrer"
                    class="hover:text-orange-500 transition-colors duration-200">
                    <img class="hover:opacity-75" src="/public/images/logos/Facebook_Logo_Primary.png" alt=""
                        width="24px" height="24px">
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const currentRoute = route.path;
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