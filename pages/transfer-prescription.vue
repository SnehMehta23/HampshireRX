<!-- pages/transfer-prescription.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const form = ref(null)
const isLoading = ref(true)
const hasStartedFilling = ref(false)
const workflowId = "315cf730-85cc-4e7b-90e7-e92fe6ad2c43"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to update URL without page navigation
const updateURL = (path: string) => {
    window.history.replaceState(null, '', path)
}

// Listen for messages from the iframe
const handleMessage = (event) => {
    const data = event.data

    // Only process messages from our workflow
    if (data?.workflowId === workflowId) {
        // console.log('Received message from form:', data)

        // Track height changes as they indicate form interaction
        if (data.type === 'heightChange' && !hasStartedFilling.value) {
            hasStartedFilling.value = true
            updateURL('/transfer-prescription-start')
        }

        // Track form submission
        if (data.type === 'submitSuccess') {
            updateURL('/transfer-prescription-complete')
        }
    }
}

onMounted(async () => {
    // Add message listener
    window.addEventListener('message', handleMessage)

    const script = document.createElement('script')
    script.src = "https://app.hipaatizer.com/shared/hipaatizer-form-renderer.js"
    script.id = `${workflowId}-script`
    form.value.appendChild(script)

    await sleep(2000)
    showForm()
})

onUnmounted(() => {
    window.removeEventListener('message', handleMessage)
})

const showForm = () => {
    const formInstance = new Hipaatizer(
        workflowId,
        false,
        "",
        false
    )

    formInstance.render()
    isLoading.value = false
}
</script>

<template>
    <div class="flex flex-col min-h-screen bg-cream-100">
        <LayoutAppHeader />
        <main class="flex-grow bg-cream-100">
            <div class="relative" ref="heroRef">
                <div :class="[
                    'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
                    'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400'
                ]">
                </div>

                <div v-if="isLoading" class="flex justify-center items-center h-64">
                    <div class="spinner"></div>
                </div>

                <div ref="form" class="w-full outline-none border-none mt-4" :class="{ 'hidden': isLoading }">
                    <!-- Dynamically injected form will appear here -->
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>