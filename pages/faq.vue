<style scoped>
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in-left {
    animation: fadeInLeft 2.5s ease-out forwards;
}

.underline-animation {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-bottom: -7px;
    /* Adjust this value as needed */
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
    </div>


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

    <div class="mt-2">
        <Accordion />
    </div>

    <AppFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import AppHeader from '../components/layout/appHeader.vue'
import SearchBar from '../components/searchBar.vue'
import AppFooter from '~/components/layout/appFooter.vue';
import { gql } from "graphql-tag";

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

const medData = ref([]); // Initialize as an empty array

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
    //   console.log(variables);

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
</script>