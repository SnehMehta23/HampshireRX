<template>
    <footer class="bg-orange-400 text-white py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <img src="/public/images/logos/smallLogoWhite.png" alt="Hampshire Pharmacy" class="h-8 mb-4" />
                    <p class="text-white mb-4">Your trusted community pharmacy since 2014</p>
                    <!-- LegitScript Seal -->
                    <div v-html="legitScriptTag"></div>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li v-for="link in footerLinks" :key="link.text">
                            <NuxtLink :to="link.url" class="text-white hover:text-white">
                                {{ link.text }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold mb-4">Contact</h4>
                    <ul class="space-y-2 text-white">
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
                            <a href="mailto:hampshirepharmacy@gmail.com"
                                class="flex items-center gap-2 hover:text-white">
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
                    <ul class="space-y-2 text-white">
                        <li>Mon-Fri: 10am - 6pm</li>
                        <li>Saturday: 10am - 2pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8">
                <!-- Copyright and credits with adjusted spacing -->
                <div class="">
                    <p class="text-center text-white">
                        &copy; 2024 Hampshire Pharmacy. All rights reserved.
                    </p>
                    <div class="text-sm text-white text-center">
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
</template>

<script setup>
const footerLinks = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'FAQs', url: '/faq' }
]
const legitScriptTag = '<script src="https://static.legitscript.com/seals/316843.js"><\/script>'
</script>
