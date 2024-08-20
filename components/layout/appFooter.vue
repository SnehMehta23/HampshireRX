<script setup lang="ts">

</script>

<template>
    <footer class="xl:bg-pale-gray bg-orange-400 text-black py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-t border-gray-200">
                <div class="flex flex-col md:flex-row justify-between items-center md:space-y-0">
                    <div class="flex items-center space-x-4 xl:mt-0 mt-4">
                        <div class="w-6 h-6 flex">
                            <img src="/public/images/svg/capsule.svg" alt="Capsule Icon">
                        </div>
                        <div class="">
                            <ul class="flex space-x-4">
                                <NuxtLink to="/privacy" class="hover:underline cursor-pointer">Privacy</NuxtLink>
                                <NuxtLink to="faq" class="hover:underline cursor-pointer">FAQs</NuxtLink>
                                <NuxtLink to="about" class="hover:underline cursor-pointer">About</NuxtLink>
                            </ul>
                        </div>
                    </div>
                    <div class="flex space-x-6 space-y-4 text-sm xl:text-gray-500 text-white">
                        <div>
                            <h4 class="font-semibold mb-2 mt-4">Hours of Operation:</h4>
                            <ul>
                                <li>Mon-Fri: 10am-6pm</li>
                                <li>Saturday: 10am-2pm</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-2">Contact Us:</h4>
                            <ul class="flex flex-col">
                                <a class="hover:underline cursor-pointer" href="tel:815-355-1437">(847) 683-2244</a>
                                <a href="mailto:hampshirepharmacy@gmail.com">hampshirepharmacy@gmail.com</a>
                                <li>262 N State St, Hampshire, IL</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-sm text-gray-500 text-center md:text-left xl:mt-0">
                    © 2024 Hampshire Pharmacy. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>