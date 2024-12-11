<!-- components/landing/FloatingCTA.vue -->
<template>
    <div v-show="showFloatingCTA"
        class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 transform transition-transform z-50"
        :class="showFloatingCTA ? 'translate-y-0' : 'translate-y-full'">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex items-center gap-4">
                <span class="font-bold text-xl">{{ headline }}</span>
                <span class="text-gray-600">{{ subtext }}</span>
            </div>
            <button @click="handleClick"
                class="bg-pharmaBlue-400 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    headline: {
        type: String,
        required: true
    },
    subtext: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['click'])

const showFloatingCTA = ref(false)

const handleScroll = () => {
    showFloatingCTA.value = window.scrollY > 500
}

const handleClick = () => {
    emit('click')
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>