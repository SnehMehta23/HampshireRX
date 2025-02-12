<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="mb-12">
                <span
                    class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full text-blue-700 bg-blue-100 mb-4">
                    FAQs
                </span>
                <h1 class="text-4xl font-bold text-blue-800 mb-8">What can we help you find?</h1>

                <!-- Search Input -->
                <div class="relative">
                    <input type="text" v-model="searchQuery" placeholder="Search"
                        class="w-full max-w-lg px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10" />
                    <span class="absolute left-3 top-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </div>
            </div>

            <!-- FAQ Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <template v-for="(faq, index) in filteredFAQs" :key="index">
                    <div class="border-b border-gray-200 pb-6">
                        <button @click="toggleFAQ(index)" class="flex justify-between items-center w-full text-left">
                            <h3 class="text-lg font-medium text-blue-800">{{ faq.question }}</h3>
                            <span class="ml-6 flex-shrink-0">
                                <svg class="h-6 w-6 transform transition-transform duration-200"
                                    :class="{ 'rotate-180': faq.isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        <div v-show="faq.isOpen" class="mt-4 text-gray-600">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const faqs = ref([
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free 30-minute onboarding call to get you up and running.',
        isOpen: false
    },
    {
        question: 'How does billing work?',
        answer: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
        isOpen: false
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.',
        isOpen: false
    },
    {
        question: 'How do I change my account email?',
        answer: 'You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.',
        isOpen: false
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We understand that things change. You can cancel your plan at any time and we\'ll refund you the difference already paid.',
        isOpen: false
    },
    {
        question: 'How does support work?',
        answer: 'If you\'re having trouble with Untitled UI, we\'re here to try and help via hello@untitledui.com. We\'re a small team, but will get back to soon.',
        isOpen: false
    },
    {
        question: 'Can other info be added to an invoice?',
        answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name manually.',
        isOpen: false
    },
    {
        question: 'Do you provide tutorials?',
        answer: 'Not yet, but we\'re working on it! In the meantime, we\'ve done our best to make it intuitive and we\'re building our documentation page.',
        isOpen: false
    }
])

const filteredFAQs = computed(() => {
    const query = searchQuery.value.toLowerCase()
    if (!query) return faqs.value

    return faqs.value.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    )
})

const toggleFAQ = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>