<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Create a ref for the container where the form widget will be injected
const widgetContainer = ref<HTMLDivElement | null>(null);
// Hold reference to the injected script element so we can remove it later
let scriptEl: HTMLScriptElement | null = null;

onMounted(() => {
  // Create the script element for the form widget
  scriptEl = document.createElement("script");
  scriptEl.src = "https://form.jotform.com/jsform/250128695343156";
  scriptEl.async = true;
  scriptEl.defer = true;
  // Append the script to the dedicated widget container
  if (widgetContainer.value) {
    widgetContainer.value.appendChild(scriptEl);
  }
});

onUnmounted(() => {
  // Remove all content from the widget container
  if (widgetContainer.value) {
    widgetContainer.value.innerHTML = "";
  }
  // Also remove the script element from its parent (if it was appended elsewhere)
  if (scriptEl && scriptEl.parentNode) {
    scriptEl.parentNode.removeChild(scriptEl);
  }
});
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white/95">
    <LayoutAppHeader />
    <main class="flex-grow bg-white/95">
      <div class="relative" ref="heroRef">
        <div
          :class="[
            'mx-auto px-4 bg-pharmaBlue-400 rounded-bl-3xl rounded-br-3xl pb-16',
            'transition-all duration-1000 ease-out shadow-md shadow-pharmaBlue-400',
          ]"
        ></div>
        <!-- Widget container: the form widget will be loaded here -->
        <div ref="widgetContainer" class="widget-container"></div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.widget-container {
  /* Add any styling you need for the widget container */
}
</style>
