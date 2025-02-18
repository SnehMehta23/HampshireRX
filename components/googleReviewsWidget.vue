<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)
const ELFSIGHT_URL = 'https://static.elfsight.com/platform/platform.js'

onMounted(() => {
    const widget = document.querySelector('.elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935')

    if (widget) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadElfsightScript()
                observer.disconnect()
            }
        }, { threshold: 0.1 })

        observer.observe(widget)
    }
})

function loadElfsightScript() {
    if (document.querySelector(`script[src="${ELFSIGHT_URL}"]`)) {
        waitForElfsight()
        return
    }

    const script = document.createElement('script')
    script.src = ELFSIGHT_URL
    script.async = true
    script.defer = true

    script.onload = () => {
        waitForElfsight()
    }

    document.head.appendChild(script)
}

function waitForElfsight() {
    if (window.elfsight && window.elfsight.isInitialized) {
        isLoaded.value = true
        return
    }

    const observer = new MutationObserver((mutations, obs) => {
        const widget = document.querySelector('.elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935')
        if (widget && widget.children.length > 0) {
            isLoaded.value = true
            obs.disconnect()
        }
    })

    observer.observe(document, { childList: true, subtree: true })
}
</script>

<template>
    <div class="relative min-h-[200px]">
        <!-- Loading state -->
        <div v-if="!isLoaded" class="flex items-center justify-center text-gray-500">
            Loading reviews...
        </div>

        <!-- Widget container -->
        <div :class="['elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935', { 'opacity-0': !isLoaded }]"
            data-elfsight-app-lazy></div>
    </div>
</template>
