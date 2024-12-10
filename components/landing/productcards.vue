<!-- components/landing/ProductCards.vue -->
<template>
    <div class="flex justify-center gap-4">
        <div v-for="product in products" :key="product.name"
            class="max-w-xl bg-white/95 rounded-xl shadow-lg p-6 backdrop-blur-sm">
            <!-- Product Header -->
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-pharmaBlue-400 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.649 3.064a1 1 0 00-1.414 0l-13.5 13.5a1 1 0 001.414 1.414l13.5-13.5a1 1 0 000-1.414zM16.95 14.192a1 1 0 00-1.414 0l-3.536 3.536a1 1 0 101.414 1.414l3.536-3.536a1 1 0 000-1.414z" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800">{{ product.name }}</h3>
                    <p class="text-gray-600">Generic For: {{ product.genericFor }}</p>
                </div>
            </div>

            <!-- Price Display -->
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="border border-gray-200 rounded-lg p-4 bg-green-50">
                    <span class="text-sm text-gray-500">Our Generic Price</span>
                    <div class="font-bold text-green-600">{{ product.price }}</div>
                </div>
            </div>

            <!-- Strength Options -->
            <div class="grid grid-cols-3 gap-4">
                <div v-for="strength in product.strengths" :key="strength.amount" :class="[
                    'border rounded-lg p-3 cursor-pointer transition',
                    strength.selected ?
                        'border-pharmaBlue-400 bg-pharmaBlue-400/5' :
                        'border-gray-200 hover:bg-gray-50'
                ]" @click="handleStrengthSelect(product.id, strength.amount)">
                    <div class="text-center">
                        <div class="font-bold">{{ strength.amount }}</div>
                        <div class="text-sm text-gray-500">{{ strength.price }}</div>
                    </div>
                </div>
            </div>

            <!-- CTA Button -->
            <button @click="$emit('transfer', { productId: product.id })"
                class="w-full mt-4 bg-pharmaBlue-400 text-white py-3 rounded-md hover:bg-opacity-90 transition">
                Transfer Your Prescription Now
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Strength {
    amount: string;
    price: string;
    selected?: boolean;
}

interface Product {
    id: string;
    name: string;
    genericFor: string;
    price: string;
    strengths: Strength[];
}

const props = defineProps({
    products: {
        type: Array as PropType<Product[]>,
        required: true
    }
})

const emit = defineEmits(['strengthSelect', 'transfer'])

const handleStrengthSelect = (productId: string, strength: string) => {
    emit('strengthSelect', { productId, strength })
}
</script>