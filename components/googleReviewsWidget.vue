<!-- ElfsightReviews.vue -->
<template>
    <div class="relative">
        <!-- Loading state -->
        <div v-if="!isLoaded" class="min-h-[200px] flex items-center justify-center">
            <div class="text-gray-500">
                Loading reviews...
            </div>
        </div>

        <!-- Widget container -->
        <div :class="['elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935',
            { 'opacity-0': !isLoaded }]"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const ELFSIGHT_URL = 'https://static.elfsight.com/platform/platform.js'

onMounted(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${ELFSIGHT_URL}"]`)

    if (existingScript) {
        // If script exists, wait for platform to be ready
        waitForElfsight()
        return
    }

    // Load script if not already present
    const script = document.createElement('script')
    script.src = ELFSIGHT_URL
    script.async = true
    script.defer = true

    script.onload = () => {
        waitForElfsight()
    }

    document.head.appendChild(script)
})

function waitForElfsight() {
    // Check if Elfsight platform is ready
    if (window.elfsight && window.elfsight.isInitialized) {
        isLoaded.ref(true)
        return
    }

    // If not ready, wait for platform initialization
    const observer = new MutationObserver((mutations, obs) => {
        const widget = document.querySelector('.elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935')
        if (widget && widget.children.length > 0) {
            isLoaded.value = true
            obs.disconnect()
        }
    })

    observer.observe(document, {
        childList: true,
        subtree: true
    })
}
</script>

<style scoped>
.opacity-0 {
    opacity: 0;
}
</style>
