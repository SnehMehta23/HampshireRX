<template>
  <div class="min-h-screen">
    <!-- Floating CTA -->
    <div v-show="showFloatingCTA"
      class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 transform transition-transform z-50"
      :class="showFloatingCTA ? 'translate-y-0' : 'translate-y-full'">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="font-bold text-base md:text-xl">Save Up To 95% Today</span>
          <!-- Hide on mobile -->
          <span class="hidden md:block text-gray-600">Transfer Your Prescription Now</span>
        </div>
        <button @click="navigateTo('/transfer-prescription', {
          open: {
            target: '_blank'
          }
        })" class="bg-pharmaBlue-400 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
          Transfer Prescription
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pharmaBlue-400/10">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center flex-1">
            <NuxtLink to="/">
              <img src="/images/logos/primaryWideLogo.webp" alt="Hampshire Pharmacy" class="hidden md:block h-10" />
              <img src="/images/logos/smallLogo.png" alt="Hampshire Pharmacy" class="md:hidden h-10" />
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center justify-center gap-6 flex-1">
            <NuxtLink v-for="link in navLinks" :key="link.text" :to="link.url"
              class="text-gray-700 hover:text-pharmaBlue-400 transition-colors duration-200 whitespace-nowrap">
              {{ link.text }}
            </NuxtLink>
          </div>

          <!-- Rx Lookup Button -->
          <div class="flex justify-end flex-1">
            <NuxtLink to="/" class="bg-pharmaBlue-400 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
              Check Med Prices
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <div class="w-full text-center p-2 bg-pharmaBlue-400 text-xl font-semibold text-white "> Free shipping on all ED
      medications </div>

    <div class="bg-gradient-to-br from-orange-400 via-orange-500 to-pharmaBlue-400 pt-20 pb-32">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-white mb-4">
            Same ED Medication, Lower Prices
          </h1>
          <h2 class="text-2xl text-cream-100 mb-8">
            Pay 95% less by switching to Hampshire Pharmacy
          </h2>
          <div class="flex justify-center gap-4">
            <button
              class="bg-pharmaBlue-400 text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition text-lg font-semibold">
              Transfer A Prescription
            </button>
          </div>
          <div class="flex justify-center gap-8 mt-8 text-white">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Licensed Pharmacy</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Discreet Service</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No Insurance Needed</span>
            </div>
          </div>
        </div>

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
                <p class="text-gray-600">Generic For: Erectile Dysfunction</p>
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
                    ${{ (data.meds.find(item => item.size == '25 mg')).price }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ (data.meds.find(item => item.size == '25 mg')).count }}
                    {{ (data.meds.find(item => item.size == '25 mg')).countUnit }}
                  </div>
                </div>
              </div>

              <div @click="selectedDosageMedOne = '50mg'" :class="selectedDosageMedOne === '50mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">50mg</div>
                  <div class="text-sm font-bold">
                    ${{ (data.meds.find(item => item.size == '50 mg')).price }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ (data.meds.find(item => item.size == '50 mg')).count }}
                    {{ (data.meds.find(item => item.size == '50 mg')).countUnit }}
                  </div>
                </div>
              </div>

              <div @click="selectedDosageMedOne = '100mg'" :class="selectedDosageMedOne === '100mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">100mg</div>
                  <div class="text-sm font-bold">
                    ${{ (data.meds.find(item => item.size == '100 mg')).price }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ (data.meds.find(item => item.size == '100 mg')).count }}
                    {{ (data.meds.find(item => item.size == '100 mg')).countUnit }}
                  </div>
                </div>
              </div>
            </div>
            <button @click="navigateTo(`/transfer-prescription?input_4px4=Sildenafil ${selectedDosageMedOne}`, {
              open: {
                target: '_blank'
              }
            })" class="w-full mt-4 bg-pharmaBlue-400 text-white py-3 rounded-md hover:bg-opacity-90 transition">
              Transfer Your Prescription Now
            </button>
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
                <p class="text-gray-600">Generic For: Erectile Dysfunction</p>
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
                    ${{ (med2.meds.find(item => item.size == '5 mg'))?.price }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ (med2.meds.find(item => item.size == '5 mg'))?.count }}
                    {{ (med2.meds.find(item => item.size == '5 mg'))?.countUnit }}
                  </div>
                </div>
              </div>
              <div @click="selectedDosageMedTwo = '10mg'" :class="selectedDosageMedTwo === '10mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">10mg</div>
                  <div class="text-sm font-bold">
                    ${{ (med2.meds.find(item => item.size == '10 mg'))?.price }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ (med2.meds.find(item => item.size == '10 mg'))?.count }}
                    {{ (med2.meds.find(item => item.size == '10 mg'))?.countUnit }}
                  </div>
                </div>
              </div>
              <div @click="selectedDosageMedTwo = '20mg'" :class="selectedDosageMedTwo === '20mg'
                ? 'border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5'
                : 'border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50'">
                <div class="text-center">
                  <div class="font-bold">20mg</div>
                  <div class="text-sm font-bold">
                    ${{ (med2.meds.find(item => item.size == '20 mg'))?.price }}
                  </div>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ (med2.meds.find(item => item.size == '20 mg'))?.count }}
                    {{ (med2.meds.find(item => item.size == '20 mg'))?.countUnit }}
                  </div>
                </div>
              </div>

            </div>
            <button @click="navigateTo(`/transfer-prescription?input_4px4=Tadalafil ${selectedDosageMedTwo}`, {
              open: {
                target: '_blank'
              }
            })" class="w-full mt-4 bg-pharmaBlue-400 text-white py-3 rounded-md hover:bg-opacity-90 transition">
              Transfer Your Prescription Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div class="w-16 h-16 bg-pharmaBlue-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-pharmaBlue-400">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Welcome Section with Image and Benefits -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <!-- Left Side - Image Placeholder -->
        <div class="w-full md:w-1/2">
          <div class="relative aspect-[4/3] rounded-lg">
            <!-- Placeholder for your image -->
            <div class="absolute inset-0 flex items-center justify-center text-gray-400">
              <img src="/public/images/healtchare-worker.avif" alt="Healthcare worker stock image">
            </div>

            <!-- Decorative curved arrow - similar to the example -->
            <svg class="absolute -right-16 top-1/2 transform -translate-y-1/2 text-orange-400 hidden md:block"
              width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Simple curved path with a more natural arc -->
              <path d="M0 50C50 50, 80 0, 120 50" stroke="currentColor" stroke-width="4" fill="none"
                stroke-linecap="round" />
              <!-- Simple triangular arrowhead -->
              <path d="M120 40L110 60Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <!-- Right Side - Benefits -->
        <div class="w-full md:w-1/2 space-y-8">
          <div class="space-y-6">
            <!-- Benefit 1 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold">No pharmacy visits</h3>
                <p class="text-gray-600">Get your prescription delivered discreetly to your door. No
                  waiting in line, no hassle.</p>
              </div>
            </div>

            <!-- Benefit 2 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold">FDA approved medication</h3>
                <p class="text-gray-600">Get generic Viagra and Cialis that's safe and reliable, fully
                  FDA approved.</p>
              </div>
            </div>

            <!-- Benefit 3 -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold">Pay 95% less</h3>
                <p class="text-gray-600">Order generic Sildenafil and get the same effectiveness as
                  Viagra®, for a fraction of the cost.</p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <NuxtLink to="/transfer-prescription"
            class="bg-pharmaBlue-400 text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition text-lg font-semibold w-full md:w-auto inline-flex items-center justify-center gap-2">
            Get started
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl text-white font-bold mb-6">Your Trusted Community Pharmacy</h2>
            <p class="text-gray-300 mb-8">
              As Hampshire's local pharmacy for over 10 years, we understand that managing your health
              shouldn't mean choosing between quality and affordability.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-3">
                <div class="w-5 h-5 mt-1 text-pharmaBlue-400">
                  <svg class="w-5 h-5 text-pharmaBlue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white">{{ benefit.title }}</h4>
                  <p class="text-sm text-gray-300">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in stats" :key="stat.title" class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="text-3xl font-bold text-pharmaBlue-400">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center gap-2 mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p class="text-gray-600 mb-4">"Saved over 70% on my prescription. The transfer process was
                        simple and private."</p>
                    <p class="font-semibold">- John, 52</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center gap-2 mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p class="text-gray-600 mb-4">"Great service and incredible savings. The staff is professional
                        and discreet."</p>
                    <p class="font-semibold">- Michael, 48</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center gap-2 mb-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p class="text-gray-600 mb-4">"Easy transfer process and the best prices I've found. Highly
                        recommended."</p>
                    <p class="font-semibold">- Robert, 55</p>
                </div>
            </div>
        </div>
    </div> -->

    <!-- FAQ Section -->
    <!-- <div class="relative py-20">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-orange-500/5 to-pharmaBlue-400/5"></div>

        <div class="relative max-w-3xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div class="space-y-4">
                <div v-for="faq in faqs" :key="faq.question"
                    class="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div class="font-bold mb-2 text-gray-800">{{ faq.question }}</div>
                    <div class="text-gray-600">{{ faq.answer }}</div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-orange-400 to-pharmaBlue-400 py-20">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Saving?</h2>
        <p class="text-cream-100 mb-8">
          Join hundreds of satisfied customers who trust Hampshire Pharmacy
        </p>
        <button @click="navigateTo('/transfer-prescription', {
          open: {
            target: '_blank'
          }
        })" class="bg-white text-gray-800 px-8 py-4 rounded-md hover:bg-cream-100 transition">
          Transfer Your Prescription Now
        </button>
      </div>
    </div>

    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/public/images/logos/smallLogoWhite.png" alt="Hampshire Pharmacy" class="h-8 mb-4" />
            <p class="text-gray-400 mb-4">Your trusted community pharmacy since 2014</p>
            <!-- LegitScript Seal -->
            <div v-html="legitScriptTag"></div>
          </div>
          <div>
            <h4 class="font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="link in footerLinks" :key="link.text">
                <NuxtLink :to="link.url" class="text-gray-400 hover:text-white">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="tel:+18476832244" class="flex items-center gap-2 hover:text-white">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (847) 683-2244
                </a>
              </li>
              <li>
                <a href="mailto:hampshirepharmacy@gmail.com" class="flex items-center gap-2 hover:text-white">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hampshirepharmacy@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=262+N+State+St,+Hampshire,+IL" target="_blank"
                  rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  262 N State St, Hampshire, IL
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Hours</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Mon-Fri: 10am - 6pm</li>
              <li>Saturday: 10am - 2pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 pb-20">
          <!-- Copyright and credits with adjusted spacing -->
          <div class="space-y-4">
            <p class="text-center text-gray-400">
              &copy; 2024 Hampshire Pharmacy. All rights reserved.
            </p>
            <div class="text-sm text-gray-500 text-center">
              Built by the
              <NuxtLink @click="handleNavClick('AgencyClickout', 'TheWebAgencyWebsite')"
                class="text-pharmaBlue-400 underline" to="https://thewebagency.app">
                TheWebAgency
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

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

const legitScriptTag = '<script src="https://static.legitscript.com/seals/316843.js"><\/script>'

// Floating CTA State
const showFloatingCTA = ref(false)

// Mounted Lifecycle Hook
onMounted(() => {
  window.addEventListener('scroll', () => {
    showFloatingCTA.value = window.scrollY > 500
  })
})

// State
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

// Navigation Links
const navLinks = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Privacy', url: '/privacy' },
  { text: 'FAQs', url: '/faq' },
  { text: 'Prescription Transfer', url: '/transfer-prescription' }
]

// Content Data
const steps = [
  {
    title: 'Transfer Your Prescription',
    description: 'Transfer or send your prescription to us'
  },
  {
    title: 'Awaiting Confirmation',
    description: "We will confirm the details and send you our secure payment portal"
  },
  {
    title: 'Receive Prescription',
    description: 'Get your prescription directly to your door for'
  }
]

const benefits = [
  {
    title: 'No Insurance Needed',
    description: 'Access affordable medications without insurance'
  },
  {
    title: 'Licensed Pharmacy',
    description: 'Full-service, state-licensed pharmacy'
  },
  {
    title: 'Competitive Pricing',
    description: 'Save up to 95% on generic medications'
  },
  {
    title: 'Discreet Service',
    description: 'Private consultations and discrete packaging'
  }
]

const stats = [
  { title: 'Satisfied Customers', value: '100+' },
  { title: 'Years of Service', value: '10+' },
  { title: 'Medications Available', value: '1000+' },
  { title: 'Google Rating', value: '4.7★' }
]

const faqs = [
  {
    question: 'How do I transfer my prescription?',
    answer: "Simply click the 'Transfer Prescription' button and fill out our secure form. We'll handle the rest!"
  },
  {
    question: 'Are generic medications as effective?',
    answer: 'Yes! Generic medications contain the same active ingredients and are FDA-approved.'
  }
]

const footerLinks = [
  { text: 'Home', url: '/' },
  { text: 'About Us', url: '/about' },
  { text: 'Privacy Policy', url: '/privacy' },
  { text: 'FAQs', url: '/faq' }
]

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

const { data } = await useLazyAsyncQuery(query, { searchTerm: 'Sildenafil' });
const { data: med2 } = await useLazyAsyncQuery(query, { searchTerm: 'Tadalafil' });
console.log(med2.value)


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
