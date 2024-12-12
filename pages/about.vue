<template>
  <AppHeader />
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

      <!-- <HowToCards /> -->
      <!-- SearchBar positioned absolutely -->
      <div :class="[
        'absolute left-1/2 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl xl:rounded-bl-full xl:rounded-br-full py-6 transform -translate-x-1/2 w-full max-w-4xl px-12',
        'transition-all duration-1000 ease-out delay-500 shadow-md shadow-pharmaBlue-400',
        isVisible ? 'xl:opacity-100 xl:translate-y-0' : 'xl:opacity-0 xl:-translate-y-10'
      ]">
        <SearchBar @search="args => handleSubmit(args)" />
      </div>
    </div>
  </div>

  <!-- Spacer div to push content below the search bar -->

  <div class="w-full text-center mt-10">
    <ErrorMessage v-if="errorText" :text="errorText" />

  </div>
  <div>
    <div id="searchResults"
      class="mt-20 w-full flex flex-wrap justify-center items-start gap-4 sm:flex-col sm:items-stretch md:flex-row md:items-center"
      v-if="filteredMedData.length > 0">
      <!-- Dropdown for genericFor -->
      <div class="flex flex-col justify-start items-center">
        <label for="">Generic</label>
        <select class="p-1 bg-gray-300 rounded-md w-[8rem]" v-model="selectedFilters.genericFor">
          <option value="">All</option>
          <option v-for="option in filteredOptions.genericFor" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

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

      <!-- Dropdown for countUnit -->
      <div class="flex flex-col justify-start items-center">
        <label for="">Type</label>
        <select class="p-1 bg-gray-300 rounded-md w-[8rem]" v-model="selectedFilters.countUnit">
          <option value="">All</option>
          <option v-for="option in filteredOptions.countUnit" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <!-- Dropdown for size -->
      <div class="flex flex-col justify-start items-center">
        <label for="">Size</label>
        <select class="p-1 bg-gray-300 rounded-md w-[8rem]" v-model="selectedFilters.size">
          <option value="">All</option>
          <option v-for="option in filteredOptions.size" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <div :class="[
    'mt-4 p-4 gap-4 w-full',
    filteredMedData.length < 4
      ? 'flex justify-center'
      : 'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'
  ]">
    <template v-if="medData">
      <ResultCard v-for="med in filteredMedData" :key="med.id" :data="med" />
    </template>
  </div>

  <div class="p-4 flex justify-center max-w-7xl mx-auto">
    <div class="w-full md:w-10/12">
      <div class="flex flex-wrap items-center">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 p-4">
          <strong class="block text-lg font-bold mb-2">Our Mission</strong>
          <h2 class="text-2xl font-semibold mb-4">
            Empowering Affordable Healthcare: Your Trusted Online Pharmacy
          </h2>
          <p class="text-base leading-relaxed">
            We understand the challenges of navigating the complexities of healthcare costs, which is why
            we've streamlined the process for you. We believe the future of your health should not be
            reliant on your wealth. Our innovative platform features a user-friendly lookup tool designed to
            swiftly identify affordable generic alternatives to brand-name medications. With just a few
            clicks, you can access cost-effective options without compromising quality or efficacy. At our
            Hampshire Pharmacy, we believe everyone deserves access to affordable healthcare solutions, and
            we're committed to making that a new normal for our valued customers. <span class="text-[#0d3d4f]">Come
              visit Hampshire
              Pharmacy open Monday through Friday from 10:00 am to 6:00 pm.</span>
          </p>
        </div>
        <!-- Image -->
        <div class="w-full md:w-1/2 p-4 flex justify-center">
          <img src="../public/images/Tiny_pharmacists_with_prescription_drugs_for_patients-removebg-preview.png"
            alt="Pharmacists with prescription drugs" class="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  </div>

  <AppFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import AppHeader from '../components/layout/appHeader.vue'
import SearchBar from '../components/searchBar.vue'
import AppFooter from '~/components/layout/appFooter.vue';
import { gql } from "graphql-tag";

useHead({
  title: 'About Hampshire Pharmacy | Making Healthcare Affordable',
  meta: [
    {
      name: 'description',
      content: 'Hampshire Pharmacy is committed to making healthcare accessible with affordable generic alternatives to brand-name medications. Our user-friendly platform helps you find cost-effective prescriptions without compromising quality.'
    },
    {
      name: 'keywords',
      content: 'affordable pharmacy, Hampshire IL pharmacy, generic medications, cost-effective prescriptions, local pharmacy, healthcare solutions, prescription savings, affordable healthcare, generic alternatives, community pharmacy, Hampshire Pharmacy mission'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'About Hampshire Pharmacy | Making Healthcare Affordable'
    },
    {
      property: 'og:description',
      content: 'Hampshire Pharmacy is committed to making healthcare accessible with affordable generic alternatives to brand-name medications. Our user-friendly platform helps you find cost-effective prescriptions without compromising quality.'
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'About Hampshire Pharmacy | Making Healthcare Affordable'
    },
    {
      name: 'twitter:description',
      content: 'Hampshire Pharmacy is committed to making healthcare accessible with affordable generic alternatives to brand-name medications. Our user-friendly platform helps you find cost-effective prescriptions without compromising quality.'
    }
  ]
})

const medData = ref([]); // Initialize as an empty array

// Define the query to fetch meds
const errorText = ref('')
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
</script>