<template>
  <div class="w-full flex flex-col max-w-4xl mx-auto">
    <form
      @submit.prevent="handleSearch"
      class="flex items-center rounded-full bg-white shadow-lg overflow-hidden"
    >
      <!-- Search Input -->
      <input
        v-model="searchValue"
        type="text"
        placeholder="Look up prescription cash prices"
        class="flex-1 px-6 py-4 border-none focus:outline-none text-gray-700 placeholder-gray-400"
      />

      <!-- Desktop Button -->
      <button
        type="submit"
        class="hidden sm:flex px-8 text-black bg-orange-400 hover:bg-orange-500 transition-colors duration-200 whitespace-nowrap font-semibold py-4 items-center justify-center gap-2 min-w-[180px]"
      >
        Save on prescriptions
      </button>

      <!-- Mobile Search Button -->
      <button
        type="submit"
        class="sm:hidden flex items-center justify-center transition-colors duration-200 h-full px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>

    <!-- Suggestions Dropdown -->
    <div class="relative">
      <div
        v-if="medSuggestions.length > 0"
        class="suggestions-container p-3 mt-2 shadow-xl border border-gray-100 z-[9999] bg-white rounded-2xl absolute top-full left-0 w-full"
      >
        <div class="px-3 py-2 text-sm text-gray-500 border-b border-gray-100">
          Suggestions based on:
          <span class="font-medium text-gray-700">{{ searchValue }}</span>
          <span class="ml-1 text-gray-400"
            >({{ medSuggestions.length }}
            {{ medSuggestions.length === 1 ? "match" : "matches" }})</span
          >
        </div>

        <div
          v-for="med in medSuggestions"
          :key="med.id"
          @click="handleSearch(med.name)"
          class="flex items-center gap-3 px-3 py-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
        >
          <img src="/images/svg/prescription.svg" alt="" class="w-5 h-5" />
          <div>
            <div class="font-medium text-gray-900">{{ med.name }}</div>
            <div class="text-sm text-gray-500">
              Generic for {{ med.genericFor }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.suggestions-container {
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.suggestions-container::-webkit-scrollbar {
  width: 6px;
}

.suggestions-container::-webkit-scrollbar-track {
  background: transparent;
}

.suggestions-container::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 3px;
}
</style>

<script setup>
import { ref } from "vue";
import { gql } from "graphql-tag";

const gtm = useGTM();
const medList = ref([]);
const medSuggestions = ref([]);

const { dataLayer } = useScriptGoogleTagManager({});

// noop in development, ssr
// // just works in production, client
// dataLayer.push({ event: "conversion-step", value: 1 });
// function sendConversion() {
//   dataLayer.push({ event: "search_bar_input_query", value: 1 });
// }

const trackSearchQuery = (searchQuery) => {
  gtm.trackEvent({
    event: "search_bar_input_query",
    searchQuery: searchQuery,
  });
};

const searchValue = ref("");

watch(searchValue, async (newValue, oldValue) => {
  if (newValue.length >= 3) {
    medSuggestions.value = medList.value.filter(
      (med) =>
        med.name.toLowerCase().includes(newValue.toLowerCase()) ||
        med.genericFor.toLowerCase().includes(newValue.toLowerCase()),
    );
    console.log(medSuggestions.value);
  } else {
    medSuggestions.value = [];
  }
});

const temp = ref([]);

const { data } = await useFetch("/api/meds/all", {
  server: false,
  key: "meds",
});

watch(data, async (newValue, oldValue) => {
  medList.value = processMedData(data);
});

function processMedData(data) {
  // Ensure we're working with the array of medications
  const allMeds = data.value;
  // Use a Set to keep track of unique combinations
  const uniqueCombos = new Set();

  // Use map to create a new array with only name and genericFor
  // Then filter to keep only unique combinations
  return allMeds
    .map((med) => ({
      name: med.name,
      genericFor: med.genericFor,
    }))
    .filter((med) => {
      const combo = `${med.name}|${med.genericFor}`;
      if (!uniqueCombos.has(combo)) {
        uniqueCombos.add(combo);
        return true;
      }
      return false;
    });
}

const handleSearch = (n) => {
  // Track the search query

  if (typeof n === "string") {
    searchValue.value = n;
  }

  // trackSearchQuery(searchValue.value);
  dataLayer.push({
    event: "search_bar_input_query",
    value: searchValue.value,
    text: "test",
  });
  // sendConversion();

  // Handle the search logic here
  emit("search", searchValue.value);
  searchValue.value = "";
  // console.log(searchValue.value)
};

const emit = defineEmits(["search"]);
</script>
