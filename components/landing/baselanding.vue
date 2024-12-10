<!-- components/landing/BaseLanding.vue -->
<template>
    <div class="min-h-screen">
        <!-- Floating CTA -->
        <FloatingCTA :headline="floatingCTA.headline" :subtext="floatingCTA.subtext"
            :buttonText="floatingCTA.buttonText" />

        <!-- Hero Section -->
        <HeroSection :title="hero.title" :subtitle="hero.subtitle" :features="hero.features" />

        <!-- Product Cards -->
        <ProductCards :products="products" />

        <!-- How It Works -->
        <HowItWorks :steps="steps" />

        <!-- Benefits Section -->
        <BenefitsSection :image="benefits.image" :items="benefits.items" />

        <!-- Trust Section -->
        <TrustSection :title="trust.title" :description="trust.description" :benefits="trust.benefits"
            :stats="trust.stats" />

        <!-- Final CTA -->
        <FinalCTA :title="finalCTA.title" :subtitle="finalCTA.subtitle" :buttonText="finalCTA.buttonText" />
    </div>
</template>

<script setup>
defineProps({
    floatingCTA: {
        type: Object,
        required: true
    },
    hero: {
        type: Object,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    steps: {
        type: Array,
        required: true
    },
    benefits: {
        type: Object,
        required: true
    },
    trust: {
        type: Object,
        required: true
    },
    finalCTA: {
        type: Object,
        required: true
    }
})
</script>