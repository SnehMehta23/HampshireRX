<style scoped>
.underline-animation {
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-bottom: -7px;
}

.underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom left;
  animation: underlineExpand 0.9s ease-out forwards;
  animation-delay: 1s;
}

@keyframes underlineExpand {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}
</style>
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
            <p class="text-2xl mb-4">
              Access reliable generic drugs at fair prices,
              <span class="underline-animation">no insurance needed!</span>
            </p>
          </div>
          <!-- <div class="flex flex-col items-center justify-center mb-4 2xl:mb-6 text-dark-charcoal">
            <span
                class="animate-fade-in-left text-md 2xl:text-5xl dark:text-white bg-white/20 p-2 border border-white/40 shadow-lg backdrop-blur-lg rounded-full xl:mb-0 mb-2">Getting
              started in three easy steps</span>
          </div> -->
          <div class="max-w-4xl px-12 mx-auto">
            <SearchBar @search="(n) => handleSubmit(n)" />
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

            <!-- Dropdown for count -->
            <div class="flex flex-col justify-start items-center">
              <label for="">Count</label>
              <select class="p-1 bg-gray-300 rounded-md w-[8rem]" v-model="selectedFilters.count">
                <option value="">All</option>
                <option v-for="option in filteredOptions.count" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>

            <!-- Dropdown for size -->
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

        <div
          class="mt-10 grid grid-cols-1 gap-6 place-content-center lg:grid-cols-2 px-4 max-w-7xl mx-auto items-center mb-12">
          <!-- Who are we container -->
          <div
            class="flex flex-col mx-auto border border-pharmaBlue-400 shadow-lg rounded-3xl shadow-pharmaBlue-400 bg-pharmaBlue-400 bg-opacity-20 p-6 space-y-4 w-full max-w-lg">
            <span class="opacity-75 font-semibold">Who are we?</span>
            <h3 class="text-3xl font-bold">Trusted Community Pharmacy</h3>
            <p class="font-medium">As a trusted community pharmacy for over 10 years we are fed up with the current
              state of
              healthcare. We're on a mission to change the game. Unlike anonymous assembly lines, we're your neighbors,
              and
              you'll always know who's behind your prescription.</p>
            <div class="flex items-center justify-between">
              <NuxtLink to="/faq" @click="trackNuxtLinkInteraction('View Our FAQs', 'click')"
                class="bg-orange-400 cursor-pointer p-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300 shadow-inner drop-shadow-lg border-2 border-orange-400 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 font-bold text-white">
                View Our FAQs
              </NuxtLink>
            </div>
          </div>

          <!-- Convenience Container -->
          <div
            class="flex flex-col mx-auto border border-orange-400 shadow-lg rounded-3xl shadow-orange-400 bg-orange-400 bg-opacity-20 p-6 space-y-4 w-full max-w-lg">
            <span class="opacity-75 font-semibold">Convenience</span>
            <h3 class="text-3xl font-bold">Generic Prescription Lookup Tool</h3>
            <p class="font-medium">Enjoy the flexibility to pick up multiple months' worth of generic medications
              without long
              wait times. With efficient service and a streamlined process, you can easily manage your prescriptions,
              saving
              time and hassle while prioritizing your health needs.</p>
          </div>
        </div>


        <!-- <div class="flex xl:flex-row flex-col items-center mx-auto max-w-5xl mt-12 mb-12 xl:mb-24 space-y-8">
          <div class="xl:mb-0 mb-12">
            <ParallaxCard />
          </div>

          <div class="p-2 text-center xl:px-0 px-4">
            <p>At Hampshire Pharmacy, fostering healthier lives within our communities is more than a
              mission—it's our unwavering commitment. With every service we offer, every medication we
              dispense, and every interaction we have, trust is our cornerstone. We're dedicated to your
              well-being, ensuring that every aspect of our care reflects our deep-rooted values of
              integrity, compassion, and reliability. When you choose Hampshire Pharmacy, you're choosing
              a partner in your journey to a healthier, happier life.</p>
          </div>
        </div> -->
      </div>
    </main>
    <LayoutAppFooter />
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gql } from "graphql-tag";
// import ParallaxCard from '~/components/parallaxCard.vue'
import { nextTick } from 'vue'

const errorText = ref('')

const medData = ref([]); // Initialize as an empty array

// Define the query to fetch meds
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
  // console.log(variables);

  const { data } = await useAsyncQuery(query, variables);

  if (data.value.meds.length === 0) {
    console.log('lol')
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

// Get unique options for each dropdown, filtered by selected filters
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