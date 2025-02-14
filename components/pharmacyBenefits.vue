<template>
    <div class="grid grid-cols-2 gap-4">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-3">
            <div class="w-5 h-5 mt-1 text-pharmaBlue-400">
                <svg class="w-5 h-5 text-pharmaBlue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div>
                <h4 class="font-bold text-white">{{ benefit.title }}</h4>
                <p class="text-sm text-gray-300">{{ benefit.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const benefits = [
    {
        title: 'No Insurance Needed',
        description: 'Access affordable medications without insurance'
    },
    {
        title: 'Licensed Pharmacy',
        description: 'Full-service, state-licensed pharmacy'
    },
    {
        title: 'Competitive Pricing',
        description: 'Save up to 95% on generic medications'
    },
    {
        title: 'Discreet Service',
        description: 'Private consultations and discrete packaging'
    }
]
</script>