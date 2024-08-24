<template>
    <footer class="xl:bg-pale-gray bg-orange-400 text-black py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-t border-gray-200">
                <div class="flex flex-col md:flex-row justify-between items-center md:space-y-0">
                    <div class="flex items-center space-x-4 xl:mt-0 mt-4">
                        <div class="w-12 h-12 xl:w-8 xl:h-8 flex">
                            <img src="~/public/images/logos/smallLogoWhite.png" alt="Hampshire Pharmacy Small Logo">
                        </div>
                        <div class="">
                            <ul class="flex space-x-4">
                                <NuxtLink @click="handleNavClick('Privacy', '/faq')" to="/privacy"
                                    class="hover:underline cursor-pointer">Privacy</NuxtLink>
                                <NuxtLink @click="handleNavClick('FAQs', '/faq')" to="/faq"
                                    class="hover:underline cursor-pointer">FAQs</NuxtLink>
                                <NuxtLink @click="handleNavClick('About', '/about')" to="/about"
                                    class="hover:underline cursor-pointer">About</NuxtLink>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="flex-col flex xl:flex-row xl:flex xl:space-x-6 space-y-4 text-sm md:text-black text-white text-center">
                        <div>
                            <h4 class="font-semibold mb-2 mt-4">Contact Us:</h4>
                            <ul class="flex flex-col">
                                <a class="hover:underline cursor-pointer" href="tel:815-355-1437">(847) 683-2244</a>
                                <a href="mailto:hampshirepharmacy@gmail.com">hampshirepharmacy@gmail.com</a>
                                <li>262 N State St, Hampshire, IL</li>
                            </ul>
                        </div>
                        <!-- Add pharmacy hours for mobile -->
                        <div class="sm:hidden mt-4">
                            <h4 class="font-semibold mb-2">Hours:</h4>
                            <p>Mon-Fri 10am-6pm</p>
                            <p>Sat 10am-2pm</p>
                        </div>
                    </div>
                </div>

                <div class="text-sm text-gray-500 text-center md:text-left mt-4 xl:mt-0">
                    © 2024 Hampshire Pharmacy. All rights reserved.
                </div>
                <div class="text-sm text-gray-500 text-center md:text-left mt-4 xl:mt-0">
                    Built by the <NuxtLink @click="handleNavClick('AgencyClickout', 'TheWebAgencyWebsite')"
                        class="text-pharmaBlue-400 underline" to="https://thewebagency.app">TheWebAgency</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>