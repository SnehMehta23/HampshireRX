<!-- ElfsightReviews.vue -->
<template>
    <div class="relative" ref="widgetContainer">
        <!-- Loading state -->
        <div v-if="!isVisible || !isLoaded" class="min-h-[200px] flex items-center justify-center">
            <div class="text-gray-500">
                Loading reviews...
            </div>
        </div>

        <!-- Widget container -->
        <div :class="[
            'elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935',
            { 'opacity-0': !isLoaded }
        ]" data-elfsight-app-lazy></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isLoaded = ref(false)
const isVisible = ref(false)
const widgetContainer = ref(null)
const ELFSIGHT_URL = 'https://static.elfsight.com/platform/platform.js'

// Intersection Observer to detect when widget is in viewport
let observer = null

onMounted(() => {
    // Set up intersection observer for lazy loading
    observer = new IntersectionObserver(
        (entries) => {
            const [entry] = entries
            if (entry.isIntersecting) {
                isVisible.value = true
                loadScript()
                observer.disconnect()
            }
        },
        {
            root: null,
            rootMargin: '100px', // Load slightly before widget comes into view
            threshold: 0
        }
    )

    if (widgetContainer.value) {
        observer.observe(widgetContainer.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

function loadScript() {
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
    script.setAttribute('data-use-service-core', '') // Enable service worker for better performance

    script.onload = () => {
        waitForElfsight()
    }

    document.head.appendChild(script)
}

function waitForElfsight() {
    // Check if Elfsight platform is ready
    if (window.elfsight && window.elfsight.isInitialized) {
        isLoaded.value = true
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