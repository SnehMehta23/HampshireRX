<template>
    <div
        class="mt-10 grid grid-cols-1 gap-6 place-content-center lg:grid-cols-2 px-4 max-w-7xl mx-auto items-center mb-12">
        <div
            class="flex flex-col mx-auto border border-pharmaBlue-400 shadow-lg rounded-3xl shadow-pharmaBlue-400 bg-pharmaBlue-400 bg-opacity-20 p-6 space-y-4 w-full max-w-lg">
            <span class="opacity-75 font-semibold">Who are we?</span>
            <h3 class="text-3xl font-bold">Trusted Community Pharmacy</h3>
            <p class="font-medium">As a trusted community pharmacy for over 10 years we are fed up with the current
                state of
                healthcare. We're on a mission to change the game. Unlike anonymous assembly lines, we're your
                neighbors,
                and
                you'll always know who's behind your prescription.</p>
            <div class="flex items-center justify-between">
                <NuxtLink to="/faq" @click="trackNuxtLinkInteraction('View Our FAQs', 'click')"
                    class="bg-orange-400 cursor-pointer p-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300 shadow-inner drop-shadow-lg border-2 border-orange-400 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 font-bold text-white">
                    View Our FAQs
                </NuxtLink>
            </div>
        </div>

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
</template>

<script setup>

</script>