<template>
    <div class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(step, index) in steps" :key="index" class="text-center">
                    <div
                        class="w-16 h-16 bg-pharmaBlue-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl font-bold text-pharmaBlue-400">{{ index + 1 }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                    <p class="text-gray-600">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const steps = [
    {
        title: 'Transfer Your Prescription',
        description: 'Transfer or send your prescription to us'
    },
    {
        title: 'Awaiting Confirmation',
        description: "We will confirm the details and send you our secure payment portal"
    },
    {
        title: 'Receive Prescription',
        description: 'Get your prescription directly to your door for'
    }
]
</script>