<!-- pages/transfer-prescription-complete.vue -->
<script setup>
import { onMounted } from 'vue'
import { navigateTo } from '#imports'

onMounted(() => {
    // Wait 3 seconds before redirecting
    setTimeout(async () => {
        await navigateTo('/')
    }, 3000)
})
</script>

<template>
    <div class="flex flex-col min-h-screen bg-cream-100">
        <LayoutAppHeader />
        <main class="flex-grow bg-cream-100 flex items-center justify-center">
            <div class="text-center p-8">
                <h1 class="text-3xl font-bold text-pharmaBlue-400 mb-4">
                    Thank You!
                </h1>
                <p class="text-gray-600 mb-4">
                    Your prescription transfer request has been submitted successfully.
                </p>
                <p class="text-sm text-gray-500">
                    Redirecting you to the home page in a few seconds...
                </p>
            </div>
        </main>
    </div>
</template>