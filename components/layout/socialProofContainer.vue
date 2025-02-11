<template>
    <div class="bg-gray-900 py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12">
              <div>
                <h2 class="text-3xl text-white font-bold mb-6">Your Trusted Community Pharmacy</h2>
                <p class="text-gray-300 mb-8">
                  As Hampshire's local pharmacy for over 10 years, we understand that managing your health
                  shouldn't mean choosing between quality and affordability.
                </p>
                <PharmacyBenefits />
              </div>
              <SocialProofStats />
            </div>
          </div>
    </div>
</template>

<script setup>
import PharmacyBenefits from '~/components/pharmacyBenefits.vue';
import SocialProofStats from '~/components/socialProofStats.vue';
</script>