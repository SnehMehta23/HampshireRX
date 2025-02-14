<style scoped>
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in-left {
    animation: fadeInLeft 2.5s ease-out forwards;
}

.underline-animation {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-bottom: -7px;
}

.underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom left;
    animation: underlineExpand 0.9s ease-out forwards;
    animation-delay: 1s;
}

@keyframes underlineExpand {
    0% {
        transform: scaleX(0);
    }

    100% {
        transform: scaleX(1);
    }
}
</style>

<template>
    <AppHeader />
    <div class="relative">
        <div class="mx-auto px-4 bg-[#F7F7F5] mt-4 rounded-bl-3xl rounded-br-3xl pb-16">
            <div class="flex flex-col items-center text-center xl:px-0 px-6 justify-center">
                <h1 class="text-5xl font-bold mb-4">Affordable Medications, Trusted Service</h1>
                <p class="text-2xl mb-4">
                    Access reliable generic drugs at fair prices,
                    <span class="underline-animation">no insurance needed!</span>
                </p>
            </div>
        </div>
    </div>

    <div class="mt-2">
        <Accordion />
    </div>

    <AppFooter />
</template>

<script setup>
import AppHeader from '../components/layout/appHeader.vue'
import AppFooter from '~/components/layout/appFooter.vue';

useHead({
    title: 'Frequently Asked Questions | Hampshire Pharmacy',
    meta: [
        {
            name: 'description',
            content: 'Find answers about prescription transfers, insurance-free pricing, delivery options, pharmacy hours, and medication pricing at Hampshire Pharmacy. Learn how to save on prescriptions with our reliable generic alternatives.'
        },
        {
            name: 'keywords',
            content: 'pharmacy FAQ, prescription transfer process, cash pharmacy prices, medication delivery, pharmacy hours Hampshire IL, no insurance needed pharmacy, generic medication pricing, prescription pickup, pharmacy questions, Hampshire Pharmacy help'
        },
        // Open Graph
        {
            property: 'og:title',
            content: 'Frequently Asked Questions | Hampshire Pharmacy'
        },
        {
            property: 'og:description',
            content: 'Find answers about prescription transfers, insurance-free pricing, delivery options, pharmacy hours, and medication pricing at Hampshire Pharmacy. Learn how to save on prescriptions with our reliable generic alternatives.'
        },
        // Twitter
        {
            name: 'twitter:title',
            content: 'Frequently Asked Questions | Hampshire Pharmacy'
        },
        {
            name: 'twitter:description',
            content: "Find answers about prescription transfers, insurance-free pricing, delivery options, pharmacy hours, and medication pricing at Hampshire Pharmacy. Learn how to save on prescriptions with our reliable generic alternatives."
        }
    ]
})
</script>