<template>
  <div class="w-full flex flex-col">
    <form @submit.prevent="handleSearch" class="flex overflow-hidden rounded-full border border-gray-300 shadow-inner ">
      <div class="w-full flex flex-col">
        <input v-model="searchValue" type="text" placeholder="Look up prescription cash prices"
          class="w-full px-6 py-4 border-none rounded-l-full focus:outline-none focus:ring-2 focus:ring-pharmaBlue-400 shadow-lg" />
      </div>
      <button type="submit"
        class="w-1/3 xl:text-sm bg-orange-400 whitespace-nowrap text-black font-semibold py-4 rounded-r-full hover:bg-orange-500">
        <span class="hidden sm:inline">Save on prescriptions</span>
        <span class="sm:hidden">Search</span>
      </button>
    </form>
    <template>
      <div class="relative">
        <div class="p-3 mt-2 shadow-2xl shadow-slate-600 z-[9999] bg-white rounded absolute top-full left-0 w-full"
          v-if="medSuggestions.length > 0">
          <span class="px-1">Suggestions based on: {{ searchValue }} - {{ medSuggestions.length }} {{
            medSuggestions.length
              === 1 ? 'match' : 'matches' }}</span>
          <div @click="handleSearch(med.name)"
            class="text-md font-semibold w-full py-2 hover:bg-zinc-200 cursor-pointer px-2 flex justify-start items-center gap-2 my-4 mx-1 rounded"
            v-for="med in medSuggestions" :key="med.id">
            <img src="/images/svg/prescription.svg" alt="">
            {{ med.name }} - ({{ med.genericFor }})

          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gql } from "graphql-tag";

const gtm = useGTM()
const medList = ref([])
const medSuggestions = ref([])


const trackSearchQuery = (searchQuery) => {
  gtm.trackEvent({
    event: 'search_bar_input_query',
    searchQuery: searchQuery
  })
}

const searchValue = ref('')


watch(searchValue, async (newValue, oldValue) => {
  if (newValue.length >= 3) {
    medSuggestions.value = medList.value.filter(med =>
      med.name.toLowerCase().includes(newValue.toLowerCase()) || med.genericFor.toLowerCase().includes(newValue.toLowerCase()),
    )
    console.log(medSuggestions.value)
  } else {
    medSuggestions.value = []
  }


})

const query = gql`
  query getMeds($searchTerm: String) {
    meds(searchTerm: $searchTerm) {
      name
      genericFor
    }
  }
`;

// Bro I was about to increase our cost tenfold with this jesus christ.
// watch(searchValue, async (value) => {
//   if (value.length >= 3) {
//     const variables = {searchTerm: value};
//     const {data} = await useAsyncQuery(query, variables);
//     console.log(data)
//   }
// })
async function queryMeds() {
  const allQuery = gql`
  query{
    allMeds {
    name
    genericFor
    }
}
`
  const { data } = await useLazyAsyncQuery(allQuery)

  function processMedData(data) {
    // Ensure we're working with the array of medications
    const allMeds = data.allMeds || data;

    // Use a Set to keep track of unique combinations
    const uniqueCombos = new Set();

    // Use map to create a new array with only name and genericFor
    // Then filter to keep only unique combinations
    const result = allMeds
      .map(med => ({
        name: med.name,
        genericFor: med.genericFor
      }))
      .filter(med => {
        const combo = `${med.name}|${med.genericFor}`;
        if (!uniqueCombos.has(combo)) {
          uniqueCombos.add(combo);
          return true;
        }
        return false;
      });

    return result;
  }

  medList.value = processMedData(data.value);

}

await queryMeds();

const handleSearch = (n) => {
  // Track the search query

  if (typeof (n) === "string") {
    searchValue.value = n
  }

  trackSearchQuery(searchValue.value)

  // Handle the search logic here
  emit('search', searchValue.value)
  searchValue.value = ''
  // console.log(searchValue.value)
}

const emit = defineEmits(['search'])
</script>