<template>
    <!-- Shop by Condition Section -->
    <div class="max-w-7xl mx-auto px-4 mb-16">
        <!-- Header with Navigation -->
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-4">
                <h2 class="text-2xl font-semibold">Shop by Condition</h2>
                <NuxtLink to="/conditions" class="text-blue-500 hover:text-blue-600">See All</NuxtLink>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex gap-2">
                <button
                    class="w-8 h-8 flex items-center justify-center rounded-full border border-pharmaBlue-400 hover:bg-pharmaBlue-400/50 transition-colors"
                    @click="scrollLeft">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    class="w-8 h-8 flex items-center justify-center rounded-full border border-pharmaBlue-400 hover:bg-pharmaBlue-400/50 transition-colors"
                    @click="scrollRight">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Carousel Items -->
        <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide" ref="carouselRef">
            <div v-for="condition in conditions" :key="condition.name" class="flex-none w-48 snap-start">
                <NuxtLink :to="condition.link" class="block">
                    <div class="aspect-square rounded-2xl overflow-hidden mb-3">
                        <img :src="condition.image" :alt="condition.name" class="w-full h-full object-cover" />
                    </div>
                    <h3 class="text-center font-medium">{{ condition.name }}</h3>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const carouselRef = ref(null)

const conditions = [
    {
        name: 'Pain',
        image: 'https://placehold.co/24x24',
        link: '/conditions/abortion'
    },
    {
        name: 'Depression',
        image: 'https://placehold.co/24x24',
        link: '/conditions/depression'
    },
    {
        name: 'Anxiety',
        image: 'https://placehold.co/24x24',
        link: '/conditions/anxiety'
    },
    {
        name: 'Hypothyroidism',
        image: 'https://placehold.co/24x24',
        link: '/conditions/hypothyroidism'
    },
    {
        name: 'Erectile Dysfunction',
        image: 'https://placehold.co/24x24',
        link: '/conditions/erectile-dysfunction'
    },
    {
        name: 'Hair Loss',
        image: 'https://placehold.co/24x24',
        link: '/conditions/hair-loss'
    },
    {
        name: 'Hair Loss',
        image: 'https://placehold.co/24x24',
        link: '/conditions/hair-loss'
    },
    {
        name: 'Hair Loss',
        image: 'https://placehold.co/24x24',
        link: '/conditions/hair-loss'
    },
    {
        name: 'Hair Loss',
        image: 'https://placehold.co/24x24',
        link: '/conditions/hair-loss'
    }
]

const scrollLeft = () => {
    if (carouselRef.value) {
        carouselRef.value.scrollBy({ left: -200, behavior: 'smooth' })
    }
}

const scrollRight = () => {
    if (carouselRef.value) {
        carouselRef.value.scrollBy({ left: 200, behavior: 'smooth' })
    }
}
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>