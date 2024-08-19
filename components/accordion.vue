<template>
    <div class="flex justify-center items-center mb-8">
        <div class="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <div id="faqAccordion" class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index" class="bg-white border border-gray-200 rounded-lg">
                    <h2>
                        <button
                            class="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
                            @click="toggleAccordion(index)" :aria-expanded="isOpen(index)">
                            {{ faq.question }}
                            <span :class="isOpen(index) ? 'rotate-180' : ''"
                                class="transform transition-transform duration-200">
                                ▼
                            </span>
                        </button>
                    </h2>
                    <div v-if="isOpen(index)" class="p-4">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
    {
        question: 'How do I send my prescription?',
        answer: 'Have your doctor send us your prescription to Hampshire Pharmacy at 262 N State St, Hampshire, IL. We will automatically apply the prices you see online.',
    },
    {
        question: 'Do I need insurance?',
        answer: 'No! We do not use insurance for our cash prescriptions. This allows us to cut out the pharmacy middleman and give you, our patient, the best prices possible.',
    },
    {
        question: 'Where do you get your generic medications from?',
        answer: 'Our generic medications are sourced from vetted high quality suppliers and we fill your prescription in our community pharmacy.',
    },
    {
        question: 'Why is this better for me?',
        answer: 'There are many cases where our pricing may benefit you. If you have a high deductible, use specialty medication not covered by insurance, or are uninsured check our prices to save on prescriptions.',
    },
    {
        question: 'Can I get all my prescriptions at cash prices?',
        answer: 'We currently offer many medications at competitive prices. If you can’t find what you are looking for give us a call at 847-683-2244 and we can help you out!',
    },
    {
        question: 'Can you mail my prescriptions?',
        answer: 'We can currently mail prescriptions to anywhere in Illinois.',
    },
    {
        question: 'Can I get my prescription delivered?',
        answer: 'We currently deliver to our local areas, call us at 847-683-2244 to see if we can deliver to you.',
    },
    {
        question: 'How do I pay for my prescription?',
        answer: 'If you are coming to pick up your prescription you can pay at check out. For deliveries and mailing we ask to keep a credit card on file.',
    },
    {
        question: 'Why are your prices better?',
        answer: 'We do not use insurance, this allows us to cut out the pharmacy middleman and give you, our patient, the best prices possible.',
    },
])

const openIndex = ref(null)

const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index
}

const isOpen = (index) => openIndex.value === index
</script>

<style scoped>
/* Custom styles if needed */
</style>