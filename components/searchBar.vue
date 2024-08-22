<template>
    <div class="w-full">
        <div class="flex overflow-hidden rounded-tl-full rounded-bl-full border border-gray-300 shadow-inner">
            <input v-model="searchValue" type="text" placeholder="Browse pharmacy catalog..."
                class="w-3/4 px-6 py-4 border border-gray-300 rounded-l-lg xl:rounded-l-full focus:outline-none focus:ring-2 focus:ring-pharmaBlue-400 shadow-lg" />
            <button @click="handleSearch" class="w-1/2 bg-orange-400 text-white font-semibold py-4 rounded-r-full xl:rounded-r-full
               hover:bg-orange-500">
                Save on prescriptions
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const gtm = useGTM()

const trackSearchQuery = (searchQuery) => {
    gtm.trackEvent({
        event: 'search_bar_input_query',
        searchQuery: searchQuery
    })
}

const searchValue = ref('')

const handleSearch = () => {
    // Track the search query
    trackSearchQuery(searchValue.value)

    // Handle the search logic here
    emit('search', searchValue.value)
    console.log(searchValue.value)
}

const emit = defineEmits(['search'])

</script>