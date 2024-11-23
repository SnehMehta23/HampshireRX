<template>
    <div class="min-h-screen">
        <!-- Floating CTA -->
        <div v-show="showFloatingCTA"
            class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 transform transition-transform z-50"
            :class="showFloatingCTA ? 'translate-y-0' : 'translate-y-full'">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <span class="font-bold text-xl">Save Up To 80% Today</span>
                    <span class="text-gray-600">Transfer Your Prescription Now</span>
                </div>
                <button class="bg-pharmaBlue-400 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                    Transfer Prescription
                </button>
            </div>
        </div>

        <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pharmaBlue-400/10">
            <div class="max-w-7xl mx-auto px-4 py-3">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <div class="flex-1">
                        <NuxtLink to="/">
                            <!-- Small logo for mobile, full logo for desktop -->
                            <img src="/images/logos/primaryWideLogo.webp" alt="Hampshire Pharmacy"
                                class="hidden md:block h-10" />
                            <img src="/images/logos/smallLogo.png" alt="Hampshire Pharmacy" class="md:hidden h-10" />
                        </NuxtLink>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex flex-1 justify-center items-center gap-8">
                        <NuxtLink v-for="link in navLinks" :key="link.text" :to="link.url"
                            class="text-gray-700 hover:text-pharmaBlue-400 transition-colors duration-200">
                            {{ link.text }}
                        </NuxtLink>
                    </div>

                    <!-- Rx Lookup Button -->
                    <div class="flex-1 flex justify-end">
                        <button
                            class="bg-pharmaBlue-400 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                            Rx Lookup
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="bg-gradient-to-br from-orange-400 via-orange-500 to-pharmaBlue-400 pt-20 pb-32">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h1 class="text-5xl font-bold text-white mb-4">
                        Same ED Medication, Lower Prices
                    </h1>
                    <h2 class="text-2xl text-cream-100 mb-8">
                        Transfer Your Prescription Today and Save Up To 80%
                    </h2>
                    <div class="flex justify-center gap-4">
                        <button
                            class="bg-pharmaBlue-400 text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition text-lg font-semibold">
                            Transfer Your Prescription
                        </button>
                        <button class="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-cream-100 transition">
                            Get Your Prescription
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

                <div class="max-w-xl mx-auto bg-white/95 rounded-xl shadow-lg p-6 backdrop-blur-sm">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-pharmaBlue-400 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <!-- Add pill icon path here -->
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">Sildenafil</h3>
                            <p class="text-gray-600">Generic For: Erectile Dysfunction</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="border border-gray-200 rounded-lg p-4">
                            <span class="text-sm text-gray-500">Brand Name Price</span>
                            <div class="font-bold line-through text-gray-400">$XX.XX</div>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-4 bg-green-50">
                            <span class="text-sm text-gray-500">Our Generic Price</span>
                            <div class="font-bold text-green-600">$XX.XX</div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                            <div class="text-center">
                                <div class="font-bold">25mg</div>
                                <div class="text-sm text-gray-500">$XX.XX</div>
                            </div>
                        </div>
                        <div class="border border-pharmaBlue-400 rounded-lg p-3 cursor-pointer bg-pharmaBlue-400/5">
                            <div class="text-center">
                                <div class="font-bold">50mg</div>
                                <div class="text-sm text-gray-500">$XX.XX</div>
                            </div>
                        </div>
                        <div class="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                            <div class="text-center">
                                <div class="font-bold">100mg</div>
                                <div class="text-sm text-gray-500">$XX.XX</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="w-full mt-4 bg-pharmaBlue-400 text-white py-3 rounded-md hover:bg-opacity-90 transition">
                        Transfer Your Prescription Now
                    </button>
                </div>
            </div>
        </div>

        <div class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="(step, index) in steps" :key="index" class="text-center">
                        <div
                            class="w-16 h-16 bg-pharmaBlue-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-pharmaBlue-400">{{ index + 1 }}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
                        <p class="text-gray-600">{{ step.description }}</p>
                    </div>
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
                                    <svg class="w-5 h-5 text-pharmaBlue-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
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
                        <div v-for="stat in stats" :key="stat.title"
                            class="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div class="text-3xl font-bold text-pharmaBlue-400">{{ stat.value }}</div>
                            <div class="text-sm text-gray-600">{{ stat.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white py-16">
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
        </div>

        <!-- FAQ Section -->
        <div class="relative py-20">
            <!-- Background with gradient and opacity -->
            <div class="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-orange-500/5 to-pharmaBlue-400/5"></div>

            <!-- Content with backdrop blur -->
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
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-r from-orange-400 to-pharmaBlue-400 py-20">
            <div class="max-w-3xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Saving?</h2>
                <p class="text-cream-100 mb-8">
                    Join thousands of satisfied customers who trust Hampshire Pharmacy
                </p>
                <button class="bg-white text-gray-800 px-8 py-4 rounded-md hover:bg-cream-100 transition">
                    Transfer Your Prescription Now
                </button>
            </div>
        </div>

        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <img src="/public/images/logos/smallLogoWhite.png" alt="Hampshire Pharmacy" class="h-8 mb-4" />
                        <p class="text-gray-400">Your trusted community pharmacy since XXXX</p>
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
                            <li>Phone: (XXX) XXX-XXXX</li>
                            <li>Email: info@hampshirepharmacy.com</li>
                            <li>Address: XXX Hampshire St</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">Hours</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li>Mon-Fri: 9am - 7pm</li>
                            <li>Saturday: 9am - 5pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Hampshire Pharmacy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Floating CTA State
const showFloatingCTA = ref(false)

// Mounted Lifecycle Hook
onMounted(() => {
    window.addEventListener('scroll', () => {
        showFloatingCTA.value = window.scrollY > 500
    })
})

// Navigation Links
const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Privacy', url: '/privacy' },
    { text: 'FAQs', url: '/faq' },
    { text: 'Prescription Transfer Form', url: '/transfer-prescription' }
]

// Content Data
const steps = [
    {
        title: 'Check Your Price',
        description: 'Use our simple tool to see your medication savings'
    },
    {
        title: 'Transfer Prescription',
        description: "Quick online transfer or we'll contact your doctor"
    },
    {
        title: 'Get Your Medication',
        description: 'Choose convenient pickup or discreet delivery'
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
        description: 'Save up to 80% on generic medications'
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