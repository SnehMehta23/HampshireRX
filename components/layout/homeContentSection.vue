<template>
    <div class="space-y-8 sm:space-y-12 max-w-7xl mx-auto px-4 mb-8"">
        <!-- First Banner Section -->
        <div class=" relative">
        <div class="relative h-[500px] sm:h-[400px] rounded-3xl overflow-hidden">
            <!-- Image with responsive positioning -->
            <img src="/public/images/pharmacist-handshake.jpg" alt="Pharmacist shaking hands"
                class="absolute inset-0 w-full h-full object-cover"
                style="object-position: center var(--image-y-position, 40%)" :class="[
                    'sm:object-center',
                    'mobile-image-position'
                ]" />
            <div class="absolute inset-0 bg-black/30"></div>

            <!-- Content container -->
            <div class="relative z-10 h-full flex flex-col sm:flex-row sm:items-center sm:justify-end p-4 sm:px-8">
                <div class="max-w-lg w-full bg-[#F8FAFC]/95 backdrop-blur flex flex-col border border-pharmaBlue-400 
                      shadow-lg rounded-3xl shadow-pharmaBlue-400 p-6 space-y-4
                      mb-auto sm:mb-0">
                    <span class="opacity-75 font-semibold">Who are we?</span>
                    <h3 class="text-2xl sm:text-3xl font-bold">Trusted Community Pharmacy</h3>
                    <p class="font-medium text-sm sm:text-base">
                        As a trusted community pharmacy for over 10 years we are fed up with the current
                        state of healthcare. We're on a mission to change the game. Unlike anonymous assembly lines,
                        we're your neighbors, and you'll always know who's behind your prescription.
                    </p>
                    <div>
                        <NuxtLink to="/faq" @click="trackNuxtLinkInteraction('View Our FAQs', 'click')"
                            class="inline-block bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-lg font-bold text-black">
                            View Our FAQs
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Second Section - Keeping original styling -->
    <div class="relative px-4 sm:px-0">
        <div class="relative min-h-[350px] sm:h-[250px] rounded-3xl overflow-hidden">
            <div class="absolute inset-0 bg-[#F7F7F5]"></div>
            <div class="relative z-10 h-full flex items-center p-4 sm:p-0">
                <div class="w-full bg-[#F7F7F5] backdrop-blur flex flex-col border border-orange-400 
                      shadow-lg rounded-3xl shadow-orange-400 p-6 space-y-4">
                    <span class="block opacity-75 font-semibold">Convenience</span>
                    <h3 class="text-2xl sm:text-3xl font-bold">Generic Prescription Lookup Tool</h3>
                    <p class="font-medium text-sm sm:text-base leading-relaxed">
                        Enjoy the flexibility to pick up multiple months' worth of generic medications
                        without long wait times. With efficient service and a streamlined process, you can easily
                        manage your prescriptions, saving time and hassle while prioritizing your health needs.
                    </p>
                </div>
            </div>
        </div>

        <!-- Smaller decorative element -->
        <div class="hidden sm:block absolute right-0 top-0 h-full w-1/4 bg-orange-400/20 rounded-l-full"></div>
    </div>
    <!-- Third Section - Delivery Card -->
    <div class="relative rounded-3xl overflow-hidden shadow-lg bg-white">
        <!-- Content wrapper -->
        <div class="flex flex-col sm:flex-row min-h-[700px] sm:min-h-[400px]">
            <!-- Text content -->
            <div class="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-center space-y-6 bg-white">
                <h3 class="text-2xl sm:text-3xl font-bold text-gray-900">
                    Fast, Discreet Delivery
                </h3>

                <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Bringing quality service right to your door. Our professional delivery
                    covers all locations with the privacy and reliability you need.
                </p>

                <!-- Features list -->
                <ul class="space-y-4">
                    <li class="flex items-center text-base sm:text-lg text-gray-800">
                        <span class="mr-3 text-xl">🔒</span>
                        Secure Packaging
                    </li>
                    <li class="flex items-center text-base sm:text-lg text-gray-800">
                        <span class="mr-3 text-xl">📍</span>
                        Service throughout Illinois
                    </li>
                    <li class="flex items-center text-base sm:text-lg text-gray-800">
                        <span class="mr-3 text-xl">💬</span>
                        Direct communication with pharmacy
                    </li>
                </ul>

                <button class="mt-4 w-full sm:w-auto px-6 py-3 bg-pharmaBlue-400/90 hover:bg-pharmaBlue-400
                     text-white font-semibold rounded-lg transition-colors">
                    Transfer Prescription
                </button>
            </div>

            <!-- Image section -->
            <div class="w-full sm:w-1/2 relative h-[300px] sm:h-auto">
                <img src="/public/images/illinoisSuburbs.jpg" alt="Illinois suburban area"
                    class="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.mobile-image-position {
    --image-y-position: 60%;
    /* Adjust this value to move image down (higher percentage) or up (lower percentage) */
}

@media (min-width: 640px) {
    .mobile-image-position {
        --image-y-position: center;
        /* Reset for desktop */
    }
}
</style>