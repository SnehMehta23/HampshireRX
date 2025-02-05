<template>
    <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-1/2">
                <div class="relative aspect-[4/3] rounded-lg">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                        <img src="/images/healtchare-worker.avif" alt="Healthcare worker stock image">
                    </div>

                    <svg class="absolute -right-16 top-1/2 transform -translate-y-1/2 text-orange-400 hidden md:block"
                        width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50C50 50, 80 0, 120 50" stroke="currentColor" stroke-width="4" fill="none"
                            stroke-linecap="round" />
                        <path d="M120 40L110 60Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            <div class="w-full md:w-1/2 space-y-8">
                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
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

                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
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

                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Pay 95% less</h3>
                            <p class="text-gray-600">Order your Sildenafil and Tadalafil for a fraction of the cost.</p>
                        </div>
                    </div>
                </div>

                <a href="/transfer-prescription">
                    <button
                        class="bg-pharmaBlue-400 mt-8 text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition text-lg font-semibold w-full md:w-auto inline-flex items-center justify-center gap-2">
                        Get started
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </a>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>