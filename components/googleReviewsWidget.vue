<!-- ElfsightReviews.vue -->
<template>
    <div class="relative" ref="widgetContainer">
        <!-- Loading state -->
        <div v-if="loading" class="min-h-[200px] flex items-center justify-center">
            <div class="text-gray-500">Loading reviews...</div>
        </div>

        <!-- Error state -->
        <div v-if="error" class="min-h-[200px] flex items-center justify-center text-red-500">
            <div>
                <p>Unable to load reviews</p>
                <button @click="retryLoad" class="mt-2 text-blue-500 underline">Retry</button>
            </div>
        </div>

        <!-- Widget container -->
        <div v-show="!loading && !error" class="elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935"
            data-elfsight-app-lazy></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const loading = ref(true)
const error = ref(false)
const loadAttempts = ref(0)
const MAX_ATTEMPTS = 3
const TIMEOUT_MS = 10000 // 10 seconds timeout
const ELFSIGHT_URL = 'https://static.elfsight.com/platform/platform.js'

let loadTimeout = null

const loadScript = () => {
    loading.value = true
    error.value = false

    // Clear any existing timeout
    if (loadTimeout) {
        clearTimeout(loadTimeout)
    }

    // Set new timeout
    loadTimeout = setTimeout(() => {
        if (loading.value && loadAttempts.value < MAX_ATTEMPTS) {
            retryLoad()
        } else if (loading.value) {
            error.value = true
            loading.value = false
        }
    }, TIMEOUT_MS)

    try {
        // Remove any existing script
        const existingScript = document.querySelector(`script[src="${ELFSIGHT_URL}"]`)
        if (existingScript) {
            existingScript.remove()
        }

        // Create new script
        const script = document.createElement('script')
        script.src = ELFSIGHT_URL
        script.defer = true
        script.setAttribute('data-use-service-core', '')

        // Success handler
        script.onload = () => {
            const checkWidget = setInterval(() => {
                const widget = document.querySelector('.elfsight-app-c793700b-bf3a-4527-a556-7c86f6c6d935')
                if (widget && widget.children.length > 0) {
                    clearInterval(checkWidget)
                    clearTimeout(loadTimeout)
                    loading.value = false
                    error.value = false
                }
            }, 500)

            // Clear check after 10 seconds if widget hasn't loaded
            setTimeout(() => {
                clearInterval(checkWidget)
            }, TIMEOUT_MS)
        }

        // Error handler
        script.onerror = () => {
            if (loadAttempts.value < MAX_ATTEMPTS) {
                retryLoad()
            } else {
                error.value = true
                loading.value = false
            }
        }

        document.head.appendChild(script)
        loadAttempts.value++
    } catch (err) {
        console.error('Error loading Elfsight widget:', err)
        error.value = true
        loading.value = false
    }
}

const retryLoad = () => {
    if (loadAttempts.value < MAX_ATTEMPTS) {
        loadScript()
    }
}

onMounted(() => {
    loadScript()
})

onUnmounted(() => {
    if (loadTimeout) {
        clearTimeout(loadTimeout)
    }
})
</script>