<template>
    <div class=" bg-[#fff5ea]">
        <header class="bg-[#1a94c1] text-[#05091e] p-4 flex justify-between items-center">
            <div>(847)-683-2244</div>
            <div>Mon-Fri 10am-6pm, Sat 10am-2pm</div>
            <div>262 N State St, Hampshire, IL</div>
            <NuxtLink to="/facebook" class="text-[#05091e]">Visit us on Facebook</NuxtLink>
        </header>

        <div class="my-8">
            <img src="/images/logos/HampshireRXLogo.webp" alt="Hampshire Pharmacy" class="w-[308px] h-[70px]" />
        </div>

        <h1 class="text-4xl font-bold text-center mb-4 text-[#05091e]">Affordable Medications, Trusted Service</h1>
        <p class="text-center mb-8 text-[#05091e]">Access reliable generic drugs at fair prices, no insurance needed</p>

        <div class="flex justify-center mb-8">
            <input type="text" placeholder="Search the entire pharmacy here..." class="p-2 border rounded-l-lg" />
            <button
                class="bg-[#fe9601] text-white p-2 rounded-r-lg hover:opacity-80 focus:ring-2 focus:ring-[#fe9601] focus:ring-opacity-50">
                Save on prescriptions
            </button>
        </div>

        <h2 class="text-2xl font-bold text-center mb-8 text-[#05091e]">Why Choose Hampshire Pharmacy?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <h3 class="text-xl font-bold mb-4 text-[#1a94c1]">Getting Started Is Simple</h3>
                <ol class="list-none pl-0">
                    <li>Look up your medication and find your savings.</li>
                    <li>Send your prescription to Hampshire Pharmacy at 262 N State St, Hampshire, IL.</li>
                    <li>We will send you a text to pick up or get your prescription delivered.</li>
                </ol>
                <NuxtLink to="/faq" class="text-[#1a94c1] mt-4 inline-block">View our FAQ →</NuxtLink>
            </div>

            <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <h3 class="text-xl font-bold mb-4 text-[#1a94c1]">Convenience</h3>
                <p>Enjoy the flexibility to pick up multiple months' worth of generic medications without long wait
                    times. With efficient service and a streamlined process, you can easily manage your prescriptions,
                    saving time and hassle while prioritizing your health needs.</p>
                <NuxtLink to="/about" class="text-[#1a94c1] mt-4 inline-block">Learn More →</NuxtLink>
            </div>

            <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <h3 class="text-xl font-bold mb-4 text-[#1a94c1]">Who are we?</h3>
                <p>As a trusted community pharmacy for over 10 years we are fed up with the current state of healthcare.
                    We're on a mission to change the game. Unlike anonymous assembly lines, we're your neighbors, and
                    you'll always know who's behind your prescription.</p>
                <NuxtLink to="/about" class="text-[#1a94c1] mt-4 inline-block">About Us →</NuxtLink>
            </div>
        </div>

        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg mb-8">
            <h2 class="text-2xl font-bold text-center mb-4 text-[#1a94c1]">About Us</h2>
            <p class="text-center">
                At Hampshire Pharmacy, fostering healthier lives within our communities is more than a mission—it's our
                unwavering commitment. With every service we offer, every medication we dispense, and every interaction
                we have, trust is our cornerstone. We're dedicated to your well-being, ensuring that every aspect of our
                care reflects our deep-rooted values of integrity, compassion, and reliability. When you choose
                Hampshire Pharmacy, you're choosing a partner in your journey to a healthier, happier life.
            </p>
        </div>

        <footer class="bg-[#fe9601] text-[#fff5ea] p-4 text-center">
            <p>© Hampshire Pharmacy | <NuxtLink to="/privacy" class="text-[#fff5ea]">Privacy Policy</NuxtLink> |
                <NuxtLink to="/faq" class="text-[#fff5ea]">FAQs</NuxtLink> | <NuxtLink to="/about"
                    class="text-[#fff5ea]">About Us</NuxtLink>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'HampshirePharmacyHomepage',
    // Add any necessary component logic here
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>