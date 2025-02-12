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
        <div class="mx-auto px-4 bg-[#F7F7F5] mt-4 rounded-bl-3xl rounded-br-3xl pb-16">
            <div class="flex flex-col items-center text-center xl:px-0 px-6 justify-center">
                <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
                <p class="text-2xl mb-4">
                    Access reliable generic drugs at fair prices,
                    <span class="underline-animation">no insurance needed!</span>
                </p>
            </div>
        </div>
    </div>

    <div class="mt-2">
        <Accordion />
    </div>

    <AppFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gql } from "graphql-tag";
import AppHeader from '../components/layout/appHeader.vue'
import AppFooter from '~/components/layout/appFooter.vue';

useHead({
    title: 'Frequently Asked Questions | Hampshire Pharmacy',
    meta: [
        {
            name: 'description',
            content: 'Find answers about prescription transfers, insurance-free pricing, delivery options, pharmacy hours, and medication pricing at Hampshire Pharmacy. Learn how to save on prescriptions with our reliable generic alternatives.'
        },
        {
            name: 'keywords',
            content: 'pharmacy FAQ, prescription transfer process, cash pharmacy prices, medication delivery, pharmacy hours Hampshire IL, no insurance needed pharmacy, generic medication pricing, prescription pickup, pharmacy questions, Hampshire Pharmacy help'
        },
        // Open Graph
        {
            property: 'og:title',
            content: 'Frequently Asked Questions | Hampshire Pharmacy'
        },
        {
            property: 'og:description',
            content: 'Find answers about prescription transfers, insurance-free pricing, delivery options, pharmacy hours, and medication pricing at Hampshire Pharmacy. Learn how to save on prescriptions with our reliable generic alternatives.'
        },
        // Twitter
        {
            name: 'twitter:title',
            content: 'Frequently Asked Questions | Hampshire Pharmacy'
        },
        {
            name: 'twitter:description',
            content: "Find answers about prescription transfers, insurance-free pricing, delivery options, pharmacy hours, and medication pricing at Hampshire Pharmacy. Learn how to save on prescriptions with our reliable generic alternatives."
        }
    ]
})

const isVisible = ref(false);
const heroRef = ref(null);
let observer = null;

onMounted(() => {
    setTimeout(() => {
        observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                isVisible.value = true;
                observer.disconnect();
            }
        }, { threshold: 0.1 });

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

const medData = ref([]);
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