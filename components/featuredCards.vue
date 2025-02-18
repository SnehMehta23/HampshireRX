<template>
  <div class="w-full rounded-3xl bg-white p-4 shadow-lg">
    <!-- Concentric circles background -->
    <div class="relative h-40 w-full">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="h-36 w-36 rounded-full bg-gray-50"></div>
        <div class="absolute h-28 w-28 rounded-full bg-gray-100"></div>
        <div class="absolute h-20 w-20 rounded-full bg-gray-200"></div>
      </div>

      <!-- Pills -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="flex gap-2">
          <div class="h-6 w-6 rounded-full bg-blue-600"></div>
          <div class="h-6 w-6 rounded-full bg-blue-600"></div>
        </div>
      </div>
    </div>

    <!-- Text content - now stacked -->
    <div class="mt-3 flex flex-col gap-3">
      <div>
        <h2 class="text-lg font-semibold capitalize">
          {{ name }}
        </h2>
        <p class="text-sm text-gray-600">
          Starting from ${{ price.toFixed(2) }}
        </p>
      </div>

      <button
        class="w-full rounded-full bg-pharmaBlue-400/90 px-4 py-2 text-sm text-white hover:bg-pharmaBlue-400"
      >
        Get Prescription
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  price: Number,
});
</script>
