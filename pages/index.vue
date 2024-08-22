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
    <div class="flex flex-col min-h-screen bg-cream-100">
        <LayoutAppHeader />
        <main class="flex-grow bg-cream-100">
            <div class="relative" ref="heroRef">
                <div :class="[
                    'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
                    'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400'
                ]">
                    <div class="py-2 xl:px-20 px-0 xl:flex-none flex xl:justify-normal justify-center mb-2">
                        <NuxtLink to="/" class="">
                            <img src="~/public/images/logos/secondaryWideLogo.png" alt="Hampshire Pharmacy Logo"
                                class="w-64" />
                        </NuxtLink>
                    </div>
                    <div class="flex flex-col items-center text-center xl:px-0 px-6 justify-center">
                        <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
                        <p class="text-2xl mb-4">
                            Access reliable generic drugs at fair prices,
                            <span class="underline-animation">no insurance needed!</span>
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center mb-4 2xl:mb-6 text-dark-charcoal">
                        <span
                            class="animate-fade-in-left text-md 2xl:text-5xl dark:text-white bg-white/20 p-2 border border-white/40 shadow-lg backdrop-blur-lg rounded-full xl:mb-0 mb-2">How
                            Hampshire Pharmacy Works <span class="text-orange-500">In Just Three
                                Steps</span></span>
                    </div>

                    <HowToCards />
                    <!-- SearchBar positioned absolutely -->
                    <div :class="[
                        'absolute left-1/2 bg-pharmaBlue-400 rounded-bl-full rounded-br-full py-6 transform -translate-x-1/2 mt-6 w-full max-w-4xl px-12',
                        'transition-all duration-1000 ease-out delay-500 shadow-md shadow-pharmaBlue-400',
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    ]">
                        <SearchBar @search="(n) =>handleSubmit(n)"/>
                    </div>
                </div>

                <!-- Spacer div to push content below the search bar -->
                <div class="h-16">

                </div>
              <div>
                <div class="mt-20 w-full flex justify-center items-center gap-4" v-if="filteredMedData.length > 0">
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
                    <label for="">Presentation</label>
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
              <div class="grid mt-4 p-4 grid-cols-4 gap-4 justify-center place-content-center items-center">
                <template v-if="medData">
                  <ResultCard v-for="med in filteredMedData" :key="med.id" :data="med"/>
                </template>
              </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-center mt-8">
                    <div
                        class="max-w-[400px] flex flex-col mx-auto text-left border border-pharmaBlue-400 shadow-lg rounded-md shadow-pharmaBlue-400">
                        <div class="bg-[#ebebeb] p-4 rounded-tl-md rounded-tr-md shadow-inner">
                            <h2 class="text-4xl font-bold leading-tight break-words">Broad Prescription Selection
                            </h2>
                        </div>
                        <div class="bg-[#d9dbe1] p-4 shadow-inner">
                            <p class="text-base">Your go-to pharmacy for a wide selection of trusted
                                prescription
                                medications. From common
                                to specialty medications, we have the prescriptions you need.</p>
                        </div>
                        <div class="flex bg-[#f0f0f0] rounded-bl-md rounded-br-md p-4 shadow-inner">
                            <img class="w-6 h-6" src="/public/images/svg/prescription.svg" alt="">
                            <p class="text-pharmaBlue-400">Hours: Mon-Fri 10am-6pm, Sat 10am-2pm</p>
                        </div>
                    </div>
                    <div class="xl:px-0 px-6">
                        <div
                            class="bg-pharmaBlue-400 py-10 border border-pharmaBlue-400 shadow-lg rounded-3xl shadow-pharmaBlue-400 space-y-2 px-10">
                            <span class="opacity-50">Who are we?</span>
                            <h3 class="text-3xl font-bold">Trusted Community Pharmacy</h3>
                            <p class="font-light">As a trusted community pharmacy for over 10 years we are fed up with
                                the current state of
                                healthcare. We're on a mission to change the game. Unlike anonymous assembly lines,
                                we're your neighbors, and you'll always know who's behind your prescription.</p>
                            <div class="flex items-center">
                                <div class="bg-white rounded-full w-3 h-3"></div>
                                <div class="flex items-center space-x-16">
                                    <div class="flex flex-col ml-2 mt-[6px]">
                                        <span class="opacity-50">Trusted Care</span>
                                        <span class="font-bold drop-shadow-lg">10+ Years</span>
                                    </div>
                                    <button @click="trackButtonInteraction('View Our FAQs', 'click')"
                                        class="bg-orange-400 cursor-pointer p-2 ml-4 rounded-lg hover:bg-orange-600 transition duration-300 shadow-inner drop-shadow-lg border-2 border-orange-400 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                                        View Our FAQs &#8594;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:px-0 px-6">
                        <div
                            class="bg-orange-400 py-10 border border-orange-400 shadow-lg rounded-3xl shadow-orange-400 space-y-2 px-10 h-[400px]">
                            <span class="opacity-50">Convenience</span>
                            <h3 class="text-3xl font-bold">Generic Prescription Lookup Tool</h3>
                            <p class="font-light">Enjoy the flexibility to pick up multiple months' worth of generic
                                medications without
                                long wait times. With efficient service and a streamlined process, you can easily manage
                                your prescriptions, saving time and hassle while prioritizing your health needs.</p>
                            <div class="flex justify-between">
                                <div class="items-center flex">
                                    <div class="bg-white rounded-full w-3 h-3"></div>
                                    <div class="flex flex-col ml-2">
                                        <span class="opacity-50">Prescription Experts</span>
                                        <span class="font-bold drop-shadow-lg">1000s of Generic Alts</span>
                                    </div>
                                </div>
                                <div class="items-center flex">
                                    <img src="/public/images/greenWhitePill.png" alt="" class="w-24 h-8 drop-shadow-xl">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex xl:flex-row flex-col items-center mx-auto max-w-5xl mt-12 mb-12 xl:mb-24 space-y-8">
                    <!-- outer square -->
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
                </div>
            </div>
        </main>
        <LayoutAppFooter />
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gql } from "graphql-tag";
import ParallaxCard from '~/components/parallaxCard.vue'

const medData = ref([]); // Initialize as an empty array

// Define the query to fetch meds
const query = gql`
  query getMeds($name: String) {
    meds(name: $name) {
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

async function handleSubmit(n) {
  const variables = { name: n }; // Replace with the name you want to search for
  const { data } = await useAsyncQuery(query, variables);
  medData.value = data.value.meds;
  console.log(medData.value);
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