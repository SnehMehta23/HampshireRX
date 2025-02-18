<template>
  <div class="flex flex-col min-h-screen bg-[#F7F7F5]">
    <LayoutAppHeader />
    <main class="flex-grow bg-[#F7F7F5]">
      <div class="relative">
        <div class="mx-auto px-4 bg-[#F7F7F5] mt-4 rounded-bl-3xl rounded-br-3xl pb-16">
          <div class="flex flex-col items-center text-center xl:px-0 px-6 justify-center">
            <h1 class="text-5xl font-bold mb-4">
              Affordable Medications, Trusted Service
            </h1>
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
            medData.length > 3
              ? 'sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center place-items-center'
              : '',
          ]">
            <ResultCard v-for="med in medData" :key="med.name" :data="med"
              class="w-full sm:w-auto sm:max-w-[300px] flex-grow-0" />
          </div>
        </div>

        <!-- <ShopBy /> -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <!-- Header section -->
          <div class="mb-8">
            <h2 class="text-2xl sm:text-3xl font-medium text-center sm:text-left text-gray-900">
              Savings on Popular Medications
            </h2>
            <p class="mt-2 text-gray-600 text-sm sm:text-base text-center sm:text-left">
              Transfer your prescriptions and start saving today with our
              competitive pricing
            </p>
          </div>

          <!-- Cards grid with adjusted widths -->
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div class="flex justify-center" v-for="medicine in topMeds.body[0].topMedications" :key="medicine.index">
              <FeaturedCards class="w-[360px] sm:w-full" :name="medicine.name" :price="medicine.startingAt" />
            </div>
          </div>
        </div>
        <LayoutHomeContentSection />
        <LayoutSocialProofContainer />
        <!-- <div class="p-8">
          <GoogleReviewsWidget />
        </div> -->
      </div>
    </main>
    <LayoutAppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import CurvedArrow from "~/components/CurvedArrow.vue";
import { nextTick } from "vue";

const topMeds = ref("");

const { data: topFiveCache } = useNuxtData("topFive");

if (topFiveCache) {
  topMeds.value = topFiveCache.value;
}

const { data: topFive } = await useFetch("/api/medications/getTopFive", {
  key: "topFive",
});

topMeds.value = topFive.value;

const errorText = ref("");
const medData = ref([]); // Initialize as an empty array

async function handleSubmit(searchTerm) {
  if (searchTerm.length < 3) {
    errorText.value = "Please input at least 3 characters";
    return;
  }

  errorText.value = "";

  const res = await $fetch("/api/medications/findMed", {
    query: { searchTerm },
    method: "GET",
  });

  if (res.length === 0) {
    errorText.value =
      "Sorry, we couldn't find your medication, please call us at (847)-683-2244";
    medData.value = [];
    return;
  }
  medData.value = res;
  nextTick(() => {
    const resultsElement = document.getElementById("searchResults");
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

const gtm = useGTM();
const trackButtonInteraction = (
  buttonName,
  actionType,
  additionalData = {},
) => {
  gtm.trackEvent({
    event: "button_interaction",
    buttonName: buttonName,
    actionType: actionType,
    ...additionalData,
  });
};

const isVisible = ref(false);
const heroRef = ref(null);

let observer = null;
onMounted(() => {
  // Delay the animation start by 1 second
  setTimeout(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 },
    ); // Trigger when 10% of the element is visible

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
</script>
