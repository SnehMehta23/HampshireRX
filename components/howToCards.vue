<template>
    <div class="xl:px-36 px-4" :class="{ 'overflow-hidden': isOpen }">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6 space-y-2">
                <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center mx-auto justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 class="text-xl text-center font-semibold mb-2">Send or Transfer Prescription:</h3>
                <p class="text-center text-gray-600">Easily transfer your prescription online or have your doctor send
                    it directly to us.</p>
                <a href="/transfer-prescription"
                    class="block w-full bg-orange-400 text-center cursor-pointer p-2 rounded-lg hover:bg-orange-600 transition duration-300 shadow-inner drop-shadow-lg border-2 border-orange-400 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 xl:mt-0 mt-2">
                    Transfer my prescription
                </a>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="bg-green-100 rounded-full w-16 h-16 flex items-center mx-auto justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <h3 class="text-xl text-center font-semibold mb-2">Confirmation Call:</h3>
                <p class="text-center text-gray-600">Our team will contact you to verify prescription details and answer
                    any questions.</p>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="bg-red-100 rounded-full w-16 h-16 flex items-center mx-auto justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                </div>
                <h3 class="text-xl text-center font-semibold mb-2">Delivery or Pickup:</h3>
                <p class="text-gray-600 text-center">Choose convenient home delivery or pick up your medication at our
                    store.
                <div class="flex items-center justify-center font-bold ml-2 mt-4">
                    <img class="w-6 h-6" src="/public/images/svg/prescription.svg" alt="Prescription pill bottle icon">
                    <p class="text-sm ml-2">Hours: Mon-Fri 10am-6pm, Sat 10am-2pm</p>
                </div>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const gtm = useGTM();
const isOpen = ref(false);

onMounted(() => {

})

const trackButtonClick = () => {
    gtm.event({
        event: 'open_form',
        action: 'click',
        category: 'Transfer My Prescription',
        label: 'Transfer My Prescription'
    });
};


</script>
