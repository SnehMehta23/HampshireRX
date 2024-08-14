<template>
    <div class="text-center mb-12 bg-cream-200 py-8 mx-auto">
        <h1 class="text-4xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
        <p class="text-xl mb-8">Access reliable generic drugs at fair prices, no insurance needed</p>
        <div class="flex justify-center">
            <input v-model="searchValue" type="text" placeholder="Search the entire pharmacy here..."
                class="w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pharmaBlue-400" />
            <button @click="handleSearch"
                class="bg-orange-400 text-white font-semibold px-6 py-2 rounded-r-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-150 ease-in-out">
                Save on prescriptions
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const searchValue = ref('')

const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for:', searchValue.value)
}
</script>