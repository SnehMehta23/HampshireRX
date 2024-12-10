<!-- components/landing/FinalCTA.vue -->
<template>
    <div class="bg-gradient-to-r from-orange-400 to-pharmaBlue-400 py-20">
        <div class="max-w-3xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">{{ title }}</h2>
            <p class="text-cream-100 mb-8">{{ subtitle }}</p>
            <button @click="$emit('action')"
                class="bg-white text-gray-800 px-8 py-4 rounded-md hover:bg-cream-100 transition inline-flex items-center gap-2">
                {{ buttonText }}
                <svg v-if="showArrow" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    },
    showArrow: {
        type: Boolean,
        default: false
    }
})

defineEmits(['action'])
</script>