<template>
  <div class="flex flex-col min-h-screen bg-cream-100">
    <LayoutAppHeader />
    <main class="flex-grow bg-cream-100">
      <div class="relative" ref="heroRef">
        <div :class="[
          'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
          'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400'
        ]">
          <div class="flex flex-col items-center text-center xl:px-0 px-6 justify-center">
            <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
            <p class="text-2xl mb-4 relative">
              Compare our prices to your copays
              <CurvedArrow />
            </p>
          </div>
          <div class="max-w-4xl px-12 mx-auto">
            <SearchBar @search="(n) => handleSubmit(n)" />
          </div>
          <div>
            <MedicationGrid @med-selected="(n) => handleSubmit(n)" />
          </div>

          <div class="mt-6">
            <HowToCards />
          </div>
        </div>

        <div>
          <div class="w-full text-center mt-10">
            <ErrorMessage v-if="errorText" :text="errorText" />
          </div>
          <div id="searchResults"
            class="w-full flex flex-wrap justify-center items-start gap-4 sm:flex-col sm:items-stretch md:flex-row md:items-center"
            v-if="filteredMedData.length > 0">

            <div class="flex flex-col justify-start items-center">
              <label for="">Count</label>
              <select class="p-1 bg-gray-300 rounded-md w-[8rem]" v-model="selectedFilters.count">
                <option value="">All</option>
                <option v-for="option in filteredOptions.count" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>

            <div class="flex flex-col justify-start items-center">
              <label for="">Strength</label>
              <select class="p-1 bg-gray-300 rounded-md w-[8rem]" v-model="selectedFilters.size">
                <option value="">All</option>
                <option v-for="option in filteredOptions.size" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="mt-10 p-4 w-full">
          <div v-if="medData" :class="[
            'flex flex-wrap justify-center gap-4',
            filteredMedData.length > 3 ? 'sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center place-items-center' : ''
          ]">
            <ResultCard v-for="med in filteredMedData" :key="med.id" :data="med"
              class="w-full sm:w-auto sm:max-w-[300px] flex-grow-0" />
          </div>
        </div>

        <HomeContentSection />
        <SocialProofContainer />
      </div>
    </main>
    <LayoutAppFooter />
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gql } from "graphql-tag";
import CurvedArrow from '~/components/CurvedArrow.vue';
import { nextTick } from 'vue'
import SocialProofContainer from '~/components/layout/socialProofContainer.vue';
import HomeContentSection from '~/components/layout/homeContentSection.vue';

const errorText = ref('')
const medData = ref([]);
const query = gql`
  query getMeds($searchTerm: String) {
    meds(searchTerm: $searchTerm) {
      id
      name
      size
      count
      countUnit
      genericFor
      price
    }
  }
`;

async function handleSubmit(searchTerm) {
  errorText.value = '';
  selectedFilters.value = { genericFor: "", count: "", countUnit: "", size: "" };
  const variables = { searchTerm: searchTerm };
  const { data } = await useLazyAsyncQuery(query, variables);

  if (data.value.meds.length === 0) {
    errorText.value = "Sorry, we couldn't find your medication, please call us at (847)-683-2244";
    medData.value = [];
    return;
  }

  medData.value = data.value.meds;
  nextTick(() => {
    const resultsElement = document.getElementById('searchResults');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

const gtm = useGTM()
const trackButtonInteraction = (buttonName, actionType, additionalData = {}) => {
  gtm.trackEvent({
    event: 'button_interaction',
    buttonName: buttonName,
    actionType: actionType,
    ...additionalData
  })
}

const isVisible = ref(false);
const heroRef = ref(null);

let observer = null;
onMounted(() => {
  // Delay the animation start by 1 second
  setTimeout(() => {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();  // Stop observing once visible
      }
    }, { threshold: 0.1 });  // Trigger when 10% of the element is visible

    if (heroRef.value) {
      observer.observe(heroRef.value);
    }
  }, 250);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const selectedFilters = ref({
  genericFor: "",
  count: "",
  countUnit: "",
  size: ""
});

const filteredOptions = computed(() => {
  const options = {
    genericFor: new Set(),
    count: new Set(),
    countUnit: new Set(),
    size: new Set()
  };

  medData.value.forEach(med => {
    if (
      (!selectedFilters.value.genericFor || med.genericFor === selectedFilters.value.genericFor) &&
      (!selectedFilters.value.count || med.count == selectedFilters.value.count) &&
      (!selectedFilters.value.countUnit || med.countUnit === selectedFilters.value.countUnit) &&
      (!selectedFilters.value.size || med.size === selectedFilters.value.size)
    ) {
      options.genericFor.add(med.genericFor);
      options.count.add(med.count);
      options.countUnit.add(med.countUnit);
      options.size.add(med.size);
    }
  });

  return {
    genericFor: Array.from(options.genericFor),
    count: Array.from(options.count),
    countUnit: Array.from(options.countUnit),
    size: Array.from(options.size)
  };
});

const filteredMedData = computed(() => {
  return medData.value.filter(med => {
    return (
      (!selectedFilters.value.genericFor || med.genericFor === selectedFilters.value.genericFor) &&
      (!selectedFilters.value.count || med.count == selectedFilters.value.count) &&
      (!selectedFilters.value.countUnit || med.countUnit === selectedFilters.value.countUnit) &&
      (!selectedFilters.value.size || med.size === selectedFilters.value.size)
    );
  });
});
</script>
