<template>
    <div class="w-full">
        <form @submit.prevent="handleSearch"
            class="flex overflow-hidden rounded-full border border-gray-300 shadow-inner">
            <input v-model="searchValue" type="text" placeholder="Look up prescription cash prices"
                class="w-2/3 px-6 py-4 border-none rounded-l-full focus:outline-none focus:ring-2 focus:ring-pharmaBlue-400 shadow-lg" />
            <button type="submit"
                class="w-1/3 xl:text-sm bg-orange-400 whitespace-nowrap text-black font-semibold py-4 rounded-r-full hover:bg-orange-500">
                <span class="hidden sm:inline">Save on prescriptions</span>
                <span class="sm:hidden">Search</span>
            </button>
        </form>
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
    // console.log(searchValue.value)
}

const emit = defineEmits(['search'])
</script>