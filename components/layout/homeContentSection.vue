<template>
    <!-- Parent container for both sections -->
    <div class="space-y-16 max-w-7xl mx-auto px-4 mb-8">
        <!-- First Banner Section -->
        <div class="relative">
            <div class="relative h-[400px] rounded-3xl overflow-hidden">
                <!-- Background Image -->
                <img src="/public/images/pharmacist-handshake.jpg" alt="Pharmacist shaking hands"
                    class="absolute inset-0 w-full h-full object-cover" />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/30"></div>

                <!-- Card Overlay -->
                <div class="relative z-10 h-full flex items-center justify-end px-8">
                    <div
                        class="max-w-lg w-full bg-white/95 backdrop-blur flex flex-col border border-pharmaBlue-400 shadow-lg rounded-3xl shadow-pharmaBlue-400 p-6 space-y-4">
                        <span class="opacity-75 font-semibold">Who are we?</span>
                        <h3 class="text-3xl font-bold">Trusted Community Pharmacy</h3>
                        <p class="font-medium">
                            As a trusted community pharmacy for over 10 years we are fed up with the current
                            state of healthcare. We're on a mission to change the game. Unlike anonymous assembly lines,
                            we're
                            your
                            neighbors, and you'll always know who's behind your prescription.
                        </p>
                        <div>
                            <NuxtLink to="/faq" @click="trackNuxtLinkInteraction('View Our FAQs', 'click')"
                                class="inline-block bg-orange-400 cursor-pointer p-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300 shadow-inner drop-shadow-lg border-2 border-orange-400 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 font-bold text-white">
                                View Our FAQs
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Second Section -->
        <div class="relative">
            <div class="relative h-[300px] rounded-3xl overflow-hidden">
                <!-- Orange Background -->
                <div class="absolute inset-0 bg-orange-50"></div>

                <!-- Content -->
                <div class="relative z-10 h-full flex items-center">
                    <div
                        class="max-w-lg w-full bg-white/95 backdrop-blur flex flex-col border border-orange-400 shadow-lg rounded-3xl shadow-orange-400 p-6 space-y-4">
                        <span class="block opacity-75 font-semibold mb-2">Convenience</span>
                        <h3 class="text-3xl font-bold mb-4">Generic Prescription Lookup Tool</h3>
                        <p class="font-medium">
                            Enjoy the flexibility to pick up multiple months' worth of generic medications
                            without long wait times. With efficient service and a streamlined process, you can easily
                            manage
                            your
                            prescriptions, saving time and hassle while prioritizing your health needs.
                        </p>
                    </div>

                    <!-- Decorative Element -->
                    <div class="absolute right-0 top-0 h-full w-1/3 bg-orange-400/20 rounded-l-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>