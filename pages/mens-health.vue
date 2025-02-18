<template>
  <div class="min-h-screen">
    <div v-show="showFloatingCTA"
      class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 transform transition-transform z-50"
      :class="showFloatingCTA ? 'translate-y-0' : 'translate-y-full'">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="font-bold text-base md:text-xl">Save Up To 95% Today</span>
          <span class="hidden md:block text-gray-600">Transfer Your Prescription Now</span>
        </div>
        <button @click="handleFloatingCTA"
          class="bg-pharmaBlue-400 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">Transfer
          Prescription</button>
      </div>
    </div>

    <MedLandingNavigation />
    <DiscountBanner />

    <div class="bg-gradient-to-br from-orange-400 via-orange-500 to-pharmaBlue-400 pt-20 pb-32">
      <div class="max-w-7xl mx-auto px-4">
        <MedLandingHeroSectionContent />

        <div class="flex flex-col md:flex-row justify-center gap-4">
          <div class="w-full md:max-w-xl bg-white/95 rounded-xl shadow-lg p-6 backdrop-blur-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-pharmaBlue-400 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="8" width="18" height="8" rx="4" stroke-width="2" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Sildenafil</h3>
                <p class="text-gray-600">Generic For: Viagra</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="border border-gray-200 rounded-lg p-4 bg-green-50">
                <span class="text-sm text-gray-500">Our Generic Price</span>
                <div class="font-bold text-green-600">${{ currentPriceMedOne }}</div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div @click="selectedDosageMedOne = '25mg'" :class="selectedDosageMedOne === '25mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">25mg</div>
                  <div class="text-sm font-bold">
                    ${{(data.meds.find(item => item.size == '25 mg')).price}}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{(data.meds.find(item => item.size == '25 mg')).count}}
                    {{(data.meds.find(item => item.size == '25 mg')).countUnit}}
                  </div>
                </div>
              </div>

              <div @click="selectedDosageMedOne = '50mg'" :class="selectedDosageMedOne === '50mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">50mg</div>
                  <div class="text-sm font-bold">
                    ${{(data.meds.find(item => item.size == '50 mg')).price}}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{(data.meds.find(item => item.size == '50 mg')).count}}
                    {{(data.meds.find(item => item.size == '50 mg')).countUnit}}
                  </div>
                </div>
              </div>

              <div @click="selectedDosageMedOne = '100mg'" :class="selectedDosageMedOne === '100mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">100mg</div>
                  <div class="text-sm font-bold">
                    ${{(data.meds.find(item => item.size == '100 mg')).price}}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{(data.meds.find(item => item.size == '100 mg')).count}}
                    {{(data.meds.find(item => item.size == '100 mg')).countUnit}}
                  </div>
                </div>
              </div>
            </div>
            <a href="/transfer-prescription">
              <button class="w-full mt-4 bg-pharmaBlue-400 text-white py-3 rounded-md hover:bg-opacity-90 transition">
                Transfer Your Prescription Now
              </button>
            </a>
          </div>

          <div class="w-full md:max-w-xl bg-white/95 rounded-xl shadow-lg p-6 backdrop-blur-sm">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-pharmaBlue-400 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="8" width="18" height="8" rx="4" stroke-width="2" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Tadalafil</h3>
                <p class="text-gray-600">Generic For: Cialis</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="border border-gray-200 rounded-lg p-4 bg-green-50">
                <span class="text-sm text-gray-500">Our Generic Price</span>
                <div class="font-bold text-green-600">${{ currentPriceMedTwo }}</div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div @click="selectedDosageMedTwo = '5mg'" :class="selectedDosageMedTwo === '5mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">5mg</div>
                  <div class="text-sm font-bold">
                    ${{(med2.meds.find(item => item.size == '5 mg'))?.price}}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{(med2.meds.find(item => item.size == '5 mg'))?.count}}
                    {{(med2.meds.find(item => item.size == '5 mg'))?.countUnit}}
                  </div>
                </div>
              </div>
              <div @click="selectedDosageMedTwo = '10mg'" :class="selectedDosageMedTwo === '10mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">10mg</div>
                  <div class="text-sm font-bold">
                    ${{(med2.meds.find(item => item.size == '10 mg'))?.price}}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{(med2.meds.find(item => item.size == '10 mg'))?.count}}
                    {{(med2.meds.find(item => item.size == '10 mg'))?.countUnit}}
                  </div>
                </div>
              </div>
              <div @click="selectedDosageMedTwo = '20mg'" :class="selectedDosageMedTwo === '20mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">20mg</div>
                  <div class="text-sm font-bold">
                    ${{(med2.meds.find(item => item.size == '20 mg'))?.price}}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{(med2.meds.find(item => item.size == '20 mg'))?.count}}
                    {{(med2.meds.find(item => item.size == '20 mg'))?.countUnit}}
                  </div>
                </div>
              </div>
            </div>
            <a href="/transfer-prescription">
              <button class="w-full mt-4 bg-pharmaBlue-400 text-white py-3 rounded-md hover:bg-opacity-90 transition">
                Transfer Your Prescription Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <MedLandingHowItWorksContainer />
    <MedLandingBenefitsContainer />
    <SocialProofContainer />
    <!-- <TestimonialsContainer /> -->
    <!-- <FaqContainer /> -->
    <AboveFooterCTAContainer />
    <NewFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SocialProofContainer from '~/components/layout/socialProofContainer.vue';
import FaqContainer from '~/components/layout/faqContainer.vue';
import TestimonialsContainer from '~/components/layout/testimonialsContainer.vue';
import AboveFooterCTAContainer from '~/components/layout/medLanding/aboveFooterCTAContainer.vue';
import NewFooter from '~/components/layout/newFooter.vue';
import MedLandingBenefitsContainer from '~/components/layout/medLanding/medLandingBenefitsContainer.vue';
import MedLandingHowItWorksContainer from '~/components/layout/medLanding/medLandingHowItWorksContainer.vue';
import MedLandingNavigation from '~/components/layout/medLanding/medLandingNavigation.vue';
import DiscountBanner from '~/components/discountBanner.vue';
import MedLandingHeroSectionContent from '~/components/layout/medLanding/medLandingHeroSectionContent.vue';
const router = useRouter()

const handlePrescriptionTransfer = (medication = '') => {
  router.push({
    path: '/transfer-prescription-start',
    query: medication ? { medication } : undefined
  })
}

const handleFloatingCTA = () => {
  handlePrescriptionTransfer()
}

useHead({
  title: "Men's Health Solutions | Hampshire Pharmacy",
  meta: [
    {
      name: 'description',
      content: "Affordable, FDA-approved medications for men's health and ED treatment. Discreet service from your trusted local pharmacy with competitive pricing on generic alternatives."
    },
    {
      name: 'keywords',
      content: "men's health, ED medication, generic ED treatment, affordable ED medicine, erectile dysfunction treatment, male health pharmacy, prescription alternatives, FDA approved generics, confidential pharmacy service, ED generic medication"
    },
    // Open Graph
    {
      property: 'og:title',
      content: "Men's Health Solutions | Hampshire Pharmacy"
    },
    {
      property: 'og:description',
      content: "Affordable, FDA-approved medications for men's health and ED treatment. Discreet service from your trusted local pharmacy with competitive pricing on generic alternatives."
    },
    // Twitter
    {
      name: 'twitter:title',
      content: "Men's Health Solutions | Hampshire Pharmacy"
    },
    {
      name: 'twitter:description',
      content: "Affordable, FDA-approved medications for men's health and ED treatment. Discreet service from your trusted local pharmacy with competitive pricing on generic alternatives."
    }
  ]
})

const showFloatingCTA = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    showFloatingCTA.value = window.scrollY > 500
  })
})

const selectedDosageMedOne = ref('50mg')
const selectedDosageMedTwo = ref('10mg')

const currentPriceMedOne = computed(() => {
  const dosage = selectedDosageMedOne.value.replace('mg', ' mg')
  return data.value?.meds.find(item => item.size === dosage)?.price
})

const currentPriceMedTwo = computed(() => {
  const dosage = selectedDosageMedTwo.value.replace('mg', ' mg')
  return med2.value?.meds.find(item => item.size === dosage)?.price
})

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

const { data } = await useLazyAsyncQuery(query, { searchTerm: 'Sildenafil' });
const { data: med2 } = await useLazyAsyncQuery(query, { searchTerm: 'Tadalafil' });
</script>

<style scoped>
a {
  position: relative;
}

a:hover span {
  transform: scaleX(1);
}

a span {
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
</style>