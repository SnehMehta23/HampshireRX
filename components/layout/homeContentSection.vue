<template>
    <div class="space-y-16 max-w-7xl mx-auto px-4 mb-8">
        <!-- First Banner Section -->
        <div class="relative">
            <div class="relative h-[400px] rounded-3xl overflow-hidden">
                <img src="/public/images/pharmacist-handshake.jpg" alt="Pharmacist shaking hands"
                    class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/30"></div>
                <div class="relative z-10 h-full flex items-center justify-end px-8">
                    <div
                        class="max-w-lg w-full bg-[#F8FAFC] backdrop-blur flex flex-col border border-pharmaBlue-400 shadow-lg rounded-3xl shadow-pharmaBlue-400 p-6 space-y-4">
                        <span class="opacity-75 font-semibold">Who are we?</span>
                        <h3 class="text-3xl font-bold">Trusted Community Pharmacy</h3>
                        <p class="font-medium">
                            As a trusted community pharmacy for over 10 years we are fed up with the current
                            state of healthcare. We're on a mission to change the game. Unlike anonymous assembly lines,
                            we're
                            your neighbors, and you'll always know who's behind your prescription.
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
        <div class="relative">
            <div class="relative h-[300px] rounded-3xl overflow-hidden">
                <div class="absolute inset-0 bg-[#F7F7F5]"></div>
                <div class="relative z-10 h-full flex items-center">
                    <div
                        class="max-w-lg w-full bg-[#F7F7F5] backdrop-blur flex flex-col border border-orange-400 shadow-lg rounded-3xl shadow-orange-400 p-6 space-y-4">
                        <span class="block opacity-75 font-semibold mb-2">Convenience</span>
                        <h3 class="text-3xl font-bold mb-4">Generic Prescription Lookup Tool</h3>
                        <p class="font-medium">
                            Enjoy the flexibility to pick up multiple months' worth of generic medications
                            without long wait times. With efficient service and a streamlined process, you can easily
                            manage
                            your prescriptions, saving time and hassle while prioritizing your health needs.
                        </p>
                    </div>
                </div>
            </div>

            <div class="absolute right-0 top-0 h-full w-1/3 bg-orange-400/20 rounded-l-full"></div>
        </div>

        <!-- Third Section - Delivery Card -->
        <div class="content-card">
            <div class="content-wrapper">
                <div class="text-content">
                    <h3 class="title">Fast, Discreet Delivery</h3>
                    <p class="description">
                        Bringing quality service right to your door. Our professional delivery
                        covers all locations with the privacy and reliability you need.
                    </p>
                    <ul class="features">
                        <li>
                            <span class="icon">🔒</span>
                            Secure Packaging
                        </li>
                        <li>
                            <span class="icon">📍</span>
                            Service throughout Illinois
                        </li>
                        <li>
                            <span class="icon">💬</span>
                            Direct communication with pharmacy
                        </li>
                    </ul>
                    <button class="cta-button">Transfer Prescription</button>
                </div>
                <div class="image-content">
                    <img src="/public/images/illinoisSuburbs.jpg" alt="Illinois suburban area" class="content-image">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Keep your original CSS for the content-card */
.content-card {
    max-width: 1200px;
    margin: 2rem auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
    display: flex;
    min-height: 400px;
}

.text-content {
    flex: 1;
    padding: 2.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.image-content {
    flex: 1;
    position: relative;
}

.content-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
}

.description {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #4a4a4a;
    margin-bottom: 1.5rem;
}

.features {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
}

.features li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    color: #2a2a2a;
}

.icon {
    margin-right: 0.75rem;
}

.cta-button {
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #2980b9;
}

@media (max-width: 768px) {
    .content-wrapper {
        flex-direction: column;
    }

    .image-content {
        min-height: 300px;
    }

    .text-content {
        padding: 2rem;
    }
}
</style>