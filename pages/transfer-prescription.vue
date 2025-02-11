<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GoogleReviewsWidget from '~/components/googleReviewsWidget.vue';
const scriptTag = '<script src="https://form.jotform.com/jsform/250128695343156"><\/script>'
onMounted(async () => {
    const script = document.createElement('script')
    script.src = "https://form.jotform.com/jsform/250128695343156"
})
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
                <div v-html="scriptTag">
                </div>

                <div class="p-8">
                    <GoogleReviewsWidget />
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