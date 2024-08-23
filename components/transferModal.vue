<script setup lang="ts">
// import { onMounted } from 'vue'

const gtm = useGTM();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const form = ref(null)

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
};


</script>

<template>
  <div class="z-50 w-screen h-screen bg-black/60 absolute top-0 right-0 overflow-auto p-2 outline-none">
    <div class="relative h-[30rem] w-full  rounded shadow-lg p-4">
      <!-- Close Button -->
      <button @click="$emit('close')" class="absolute top-20 right-2 text-white bg-black hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
        &times;
      </button>

      <!-- Modal Content -->
      <div ref="form" class="w-full rounded p-2 outline-none border-none">
        <!-- Your form goes here -->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>