<template>
  <div class="popup-form-wrapper relative">
    <!-- Loading state -->
    <div
      v-if="!isLoaded"
      class="min-h-[200px] flex items-center justify-center"
    >
      <div class="text-[#1f1f1f] text-sm">Loading newsletter signup...</div>
    </div>

    <!-- Constant Contact form container -->
    <div
      class="ctct-inline-form w-full transition-opacity duration-300"
      :class="{ 'opacity-0': !isLoaded }"
      data-form-id="2554ab37-4cb2-4dcf-8d35-3fc99da11655"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoaded = ref(false);
const CTCT_URL =
  "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";

onMounted(() => {
  // Initialize _ctct_m first
  if (!window._ctct_m) {
    const initScript = document.createElement("script");
    initScript.textContent =
      'var _ctct_m = "889d6d8085ba7c40e586c28952e58660";';
    document.head.appendChild(initScript);
  }

  // Check if script is already loaded
  const existingScript = document.querySelector(`script[src="${CTCT_URL}"]`);
  if (existingScript) {
    waitForForm();
    return;
  }

  // Load the script if not present
  const ctctScript = document.createElement("script");
  ctctScript.src = CTCT_URL;
  ctctScript.async = true;
  ctctScript.defer = true;
  ctctScript.onload = () => {
    waitForForm();
  };
  document.head.appendChild(ctctScript);
});

function waitForForm() {
  // Watch for the form to be fully initialized
  const observer = new MutationObserver((mutations, obs) => {
    const formContainer = document.querySelector(".ctct-inline-form");
    if (formContainer && formContainer.children.length > 0) {
      isLoaded.value = true;
      obs.disconnect();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}
</script>

<style scoped>
/* Use ::v-deep to ensure injected elements receive the .opacity-0 style */
.popup-form-wrapper ::v-deep .opacity-0 {
  opacity: 0;
}
</style>
