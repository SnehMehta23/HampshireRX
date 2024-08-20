<template>
    <div class="w-full">
        <div class="flex">
            <input v-model="searchValue" type="text" placeholder="Browse pharmacy catalog..."
                class="w-3/4 px-6 py-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pharmaBlue-400 shadow-lg" />
            <button @click="handleSearch"
                class="w-1/2 bg-orange-400 text-white font-semibold py-4 rounded-r-full hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-150 ease-in-out shadow-lg">
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