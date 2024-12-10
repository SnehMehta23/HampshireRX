<!-- components/landing/HowItWorks.vue -->
<template>
    <div class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">{{ title }}</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(step, index) in steps" :key="index" class="text-center">
                    <!-- Step Number Circle -->
                    <div
                        class="w-16 h-16 bg-pharmaBlue-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl font-bold text-pharmaBlue-400">{{ index + 1 }}</span>
                    </div>

                    <!-- Step Content -->
                    <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                    <p class="text-gray-600">{{ step.description }}</p>
                </div>
            </div>

            <!-- Optional Bottom CTA -->
            <div v-if="showCTA" class="text-center mt-12">
                <button @click="$emit('action')"
                    class="bg-pharmaBlue-400 text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition">
                    {{ ctaText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Step {
    title: string;
    description: string;
    icon?: string;
}

defineProps({
    title: {
        type: String,
        default: 'How It Works'
    },
    steps: {
        type: Array as PropType<Step[]>,
        required: true
    },
    showCTA: {
        type: Boolean,
        default: false
    },
    ctaText: {
        type: String,
        default: 'Get Started Now'
    }
})

defineEmits(['action'])
</script>

<style scoped>
/* Optional: Add step connector lines */
@media (min-width: 768px) {
    .grid>div:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 2rem;
        right: -2rem;
        width: 4rem;
        height: 2px;
        background: theme('colors.pharmaBlue.400 / 0.1');
    }
}
</style>