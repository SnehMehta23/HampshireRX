<!-- components/landing/BenefitsSection.vue -->
<template>
    <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <!-- Left Side - Image -->
            <div class="w-full md:w-1/2">
                <div class="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <!-- Image container -->
                    <img v-if="image" :src="image" :alt="imageAlt" class="w-full h-full object-cover" />
                    <div v-else class="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <span class="text-gray-400">Image will be placed here</span>
                    </div>

                    <!-- Decorative Arrow -->
                    <svg class="absolute -right-16 top-1/2 transform -translate-y-1/2 text-orange-400 hidden md:block"
                        width="150" height="100" viewBox="0 0 150 100" fill="none">
                        <path d="M0 50C50 50, 80 0, 120 50" stroke="currentColor" stroke-width="4" fill="none"
                            stroke-linecap="round" />
                        <path d="M120 40L110 60Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <!-- Right Side - Benefits -->
            <div class="w-full md:w-1/2 space-y-8">
                <!-- Section Title -->
                <h2 v-if="title" class="text-3xl font-bold text-gray-900">{{ title }}</h2>

                <!-- Benefits List -->
                <div class="space-y-6">
                    <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-4">
                        <!-- Benefit Icon -->
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <component :is="benefit.icon" class="w-6 h-6 text-orange-500" />
                            </div>
                        </div>

                        <!-- Benefit Content -->
                        <div>
                            <h3 class="text-xl font-bold">{{ benefit.title }}</h3>
                            <p class="text-gray-600">{{ benefit.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Optional CTA Button -->
                <button v-if="showCTA" @click="$emit('action')" class="bg-pharmaBlue-400 text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition 
                   text-lg font-semibold w-full md:w-auto inline-flex items-center justify-center gap-2">
                    {{ ctaText }}
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Benefit {
    title: string;
    description: string;
    icon: any; // You might want to type this more specifically based on your icon system
}

defineProps({
    title: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    imageAlt: {
        type: String,
        default: 'Benefit illustration'
    },
    benefits: {
        type: Array as PropType<Benefit[]>,
        required: true
    },
    showCTA: {
        type: Boolean,
        default: false
    },
    ctaText: {
        type: String,
        default: 'Get started'
    }
})

defineEmits(['action'])
</script>