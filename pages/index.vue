<template>
  <div class="flex flex-col min-h-screen bg-[#F7F7F5]">
    <LayoutAppHeader />
    <main class="flex-grow bg-[#F7F7F5]">
      <div class="relative">
        <div class="mx-auto px-4 bg-[#F7F7F5] mt-4 rounded-bl-3xl rounded-br-3xl pb-16">
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
            class="w-full flex flex-wrap justify-center items-start gap-4 sm:flex-col sm:items-stretch md:flex-row md:items-center">
          </div>
        </div>
        <div class="mt-2 p-4 w-full">
          <div v-if="medData" :class="[
            'flex flex-wrap justify-center gap-4',
            medData.length > 3 ? 'sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center place-items-center' : ''
          ]">
            <ResultCard v-for="med in medData" :key="med.id" :data="med"
              class="w-full sm:w-auto sm:max-w-[300px] flex-grow-0" />
          </div>
        </div>

        <!-- <ShopBy /> -->
        <HomeContentSection />
        <SocialProofContainer />
        <div class="p-8">
          <GoogleReviewsWidget />
        </div>
      </div>
    </main>
    <LayoutAppFooter />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { gql } from "graphql-tag";
import CurvedArrow from '~/components/CurvedArrow.vue';
import { nextTick } from 'vue'
import SocialProofContainer from '~/components/layout/socialProofContainer.vue';
import HomeContentSection from '~/components/layout/homeContentSection.vue';
// import ShopBy from '~/components/shopBy.vue';

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
</script>
