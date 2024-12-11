<!-- components/landing/TrustSection.vue -->
<template>
    <div class="bg-gray-900 py-20">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Left Side - Text and Benefits -->
                <div>
                    <h2 class="text-3xl text-white font-bold mb-6">{{ title }}</h2>
                    <p class="text-gray-300 mb-8">{{ description }}</p>
                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-3">
                            <div class="w-5 h-5 mt-1 text-pharmaBlue-400">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-white">{{ benefit.title }}</h4>
                                <p class="text-sm text-gray-300">{{ benefit.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Stats -->
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="stat in stats" :key="stat.title" class="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div class="text-3xl font-bold text-pharmaBlue-400">{{ stat.value }}</div>
                        <div class="text-sm text-gray-600">{{ stat.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    benefits: {
        type: Array as PropType<{
            title: string;
            description: string;
        }[]>,
        required: true
    },
    stats: {
        type: Array as PropType<{
            title: string;
            value: string;
        }[]>,
        required: true
    }
})
</script>