<script setup lang="ts">
import { ref, onMounted } from 'vue'

const gtm = useGTM();
const form = ref(null)
const isLoading = ref(true)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(async () => {
  const script = document.createElement('script');
  script.src = "https://app.hipaatizer.com/shared/hipaatizer-form-renderer.js";
  script.id = "315cf730-85cc-4e7b-90e7-e92fe6ad2c43-script";
  form.value.appendChild(script);
  await sleep(2000)
  showFormAndTrackEvent()
});

const showFormAndTrackEvent = () => {
  new Hipaatizer(
    "315cf730-85cc-4e7b-90e7-e92fe6ad2c43",
    false,
    "",
    false
  ).render();
  isLoading.value = false;
};
</script>

<template>
  <div class="z-50 w-screen h-screen bg-black/60 fixed top-0 left-0 flex items-center justify-center overflow-auto p-4">
    <div class="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-auto">
      <button @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-transparent rounded-full w-8 h-8 flex items-center justify-center text-2xl z-10">
        &times;
      </button>

      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="spinner"></div>
      </div>

      <div ref="form" class="w-full outline-none border-none" :class="{ 'hidden': isLoading }">
        <!-- Dynamically injected form will appear here -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>