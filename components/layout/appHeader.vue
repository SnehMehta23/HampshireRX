<template>
  <header class="bg-[#F7F7F5] text-black py-4">
    <div class="mx-auto px-4">
      <div class="flex items-center justify-between">
        <div class="">
          <NuxtLink to="/" class="">
            <img
              src="~/public/images/logos/primaryWideLogo.webp"
              alt="Hampshire Pharmacy Logo"
              class="w-64"
            />
          </NuxtLink>
        </div>

        <nav class="hidden sm:flex items-center space-x-6 xl:inline-flex">
          <NuxtLink
            v-if="currentRoute !== '/'"
            to="/"
            @click="handleNavClick('Home', '/')"
            class="text-black hover:text-orange-500 transition-colors duration-200 relative"
          >
            Home
          </NuxtLink>
          <NuxtLink
            v-if="currentRoute !== '/about'"
            to="/about"
            @click="handleNavClick('About', '/about')"
            class="text-black hover:text-orange-500 transition-colors duration-200 relative"
          >
            About
          </NuxtLink>
          <NuxtLink
            v-if="currentRoute !== '/privacy'"
            to="/privacy"
            @click="handleNavClick('Privacy', '/privacy')"
            class="text-black hover:text-orange-500 transition-colors duration-200 relative"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            v-if="currentRoute !== '/faq'"
            to="/faq"
            @click="handleNavClick('FAQ', '/faq')"
            class="text-black hover:text-orange-500 transition-colors duration-200 relative"
          >
            FAQ
          </NuxtLink>
          <a
            v-if="currentRoute !== '/transfer-prescription'"
            href="/transfer-prescription"
            @click="
              handleNavClick('Prescription Transfer', '/transfer-prescription')
            "
            class="text-black hover:text-orange-500 transition-colors duration-200 relative"
          >
            Prescription Transfer
          </a>
          <NuxtLink
            to="https://www.facebook.com/HampshirePharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            @click="
              handleNavClick(
                'Facebook',
                'https://www.facebook.com/HampshirePharmacy/',
              )
            "
            class="text-black hover:text-orange-500 transition-colors duration-200"
          >
            <img
              class="hover:opacity-75"
              src="/public/images/logos/Facebook_Logo_Primary.png"
              alt="Facebook Icon"
              width="24"
              height="24"
            />
          </NuxtLink>
        </nav>

        <button @click="toggleMobileMenu" class="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu drawer -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out font-lato"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto flex flex-col"
      >
        <!-- Close button -->
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="p-6">
          <!-- Changed to consistent padding all around -->
          <NuxtLink to="/" @click="handleNavClick('Home', '/')" class="block">
            <img
              src="~/public/images/logos/primaryWideLogo.webp"
              alt="Hampshire Pharmacy Logo"
              class="w-48"
            />
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col px-6 pt-2 flex-grow">
          <NuxtLink
            v-for="(link, index) in navigationLinks"
            :key="index"
            :to="link.to"
            @click="handleNavClick(link.name, link.to)"
            class="py-4 text-gray-800 hover:text-pharmaBlue-400 text-lg font-medium transition-colors duration-200 flex items-center justify-between"
          >
            {{ link.name }}
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </nav>

        <!-- Bottom Info Section -->
        <div class="p-4">
          <div class="mt-auto bg-gray-100 rounded-lg">
            <div class="p-8">
              <!-- Increased padding -->
              <h2 class="text-2xl font-semibold text-gray-900 mb-3">
                Send your patient's prescriptions to us.
              </h2>
              <p class="text-gray-600 mb-6">
                <!-- Increased margin bottom -->
                We offer best in class pharmacy fulfillment services to partners
                of all sizes.
              </p>
              <NuxtLink
                to="/about"
                class="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn More
                <svg
                  class="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <!-- Diagonal up-right arrow -->
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-50"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-50"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        @click="toggleMobileMenu"
        class="fixed inset-0 bg-black/75 z-40"
      ></div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const gtm = useGTM();
const route = useRoute();
const currentRoute = route.path;
const isMobileMenuOpen = ref(false);

const navigationLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Privacy", to: "/privacy" },
  { name: "FAQ", to: "/faq" },
  { name: "Prescription Transfer", to: "/transfer-prescription" },
  { name: "Facebook", to: "https://www.facebook.com/HampshirePharmacy/" },
];

const trackNavigationInteraction = (linkName, navigatingTo, navigatingFrom) => {
  gtm.trackEvent({
    event: "navigation_interaction",
    linkName: linkName,
    navigatingTo: navigatingTo,
    navigatingFrom: navigatingFrom,
  });
};

const handleNavClick = (linkName, navigatingTo) => {
  trackNavigationInteraction(linkName, navigatingTo, currentRoute);
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
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
