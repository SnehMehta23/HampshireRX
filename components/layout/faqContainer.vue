<template>
    <div class="relative py-20">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-orange-500/5 to-pharmaBlue-400/5"></div>

        <div class="relative max-w-3xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div class="space-y-4">
                <div v-for="faq in faqs" :key="faq.question"
                    class="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div class="font-bold mb-2 text-gray-800">{{ faq.question }}</div>
                    <div class="text-gray-600">{{ faq.answer }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const faqs = [
    {
        question: 'How do I transfer my prescription?',
        answer: "Simply click the 'Transfer Prescription' button and fill out our secure form. We'll handle the rest!"
    },
    {
        question: 'Are generic medications as effective?',
        answer: 'Yes! Generic medications contain the same active ingredients and are FDA-approved.'
    }
]
</script>