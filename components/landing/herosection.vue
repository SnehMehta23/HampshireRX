<!-- components/landing/HeroSection.vue -->
<template>
    <div class="bg-gradient-to-br from-orange-400 via-orange-500 to-pharmaBlue-400 pt-20 pb-32">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <!-- Main Title and Subtitle -->
                <h1 class="text-5xl font-bold text-white mb-4">
                    {{ title }}
                </h1>
                <h2 class="text-2xl text-cream-100 mb-8">
                    {{ subtitle }}
                </h2>

                <!-- CTA Buttons -->
                <div class="flex justify-center gap-4">
                    <button v-for="button in buttons" :key="button.text" @click="$emit('click', button.action)" :class="[
                        'px-8 py-3 rounded-md transition text-lg font-semibold',
                        button.primary ?
                            'bg-pharmaBlue-400 text-white hover:bg-opacity-90' :
                            'bg-white text-gray-800 hover:bg-cream-100'
                    ]">
                        {{ button.text }}
                    </button>
                </div>

                <!-- Feature Indicators -->
                <div class="flex justify-center gap-8 mt-8 text-white">
                    <div v-for="feature in features" :key="feature.text" class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="feature.icon === 'shield'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            <path v-if="feature.icon === 'lock'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            <path v-if="feature.icon === 'dollar'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{{ feature.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Button {
    text: string;
    action: string;
    primary?: boolean;
}

interface Feature {
    icon: 'shield' | 'lock' | 'dollar';
    text: string;
}

defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    buttons: {
        type: Array as PropType<Button[]>,
        required: true
    },
    features: {
        type: Array as PropType<Feature[]>,
        required: true
    }
})

defineEmits(['click'])
</script>