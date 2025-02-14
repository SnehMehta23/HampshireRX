<!-- ResultCard.vue -->
<script setup lang="ts">
const { data } = defineProps(['data'])
const { name, price, count, countUnit, size, genericFor } = data

// Using refs initialized with the prop values
const selectedSize = ref(size)
const selectedCount = ref(count)
</script>

<template>
  <div class="border border-slate-200 rounded-lg xl:w-[20rem] shadow-lg bg-white overflow-hidden">
    <!-- Header Section -->
    <div class="p-4 bg-gray-50">
      <h2 class="text-lg font-semibold text-gray-800">{{ name }}</h2>
      <div class="text-sm text-gray-600">
        Generic For: <span class="font-medium text-gray-800">{{ genericFor }}</span>
      </div>
    <!-- Selection Section -->
    <div class="p-4">
      <div class="flex items-center justify-between gap-3 mb-4">
        <!-- Strength Dropdown -->
        <div class="flex-1">
          <div class="text-xs text-gray-500 mb-1.5">Strength</div>
          <select v-model="selectedSize"
            class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-pharmaBlue-400 focus:ring-1 focus:ring-pharmaBlue-400">
            <option :value="size">{{ size }}</option>
            <!-- Parent component should pass available sizes -->
          </select>
        </div>

        <!-- Quantity Dropdown -->
        <div class="flex-1">
          <div class="text-xs text-gray-500 mb-1.5">Quantity</div>
          <select v-model="selectedCount"
            class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white cursor-pointer hover:border-gray-400 focus:outline-none focus:border-pharmaBlue-400 focus:ring-1 focus:ring-pharmaBlue-400">
            <option :value="count">{{ count }} {{ countUnit }}</option>
            <!-- Parent component should pass available quantities -->
          </select>
        </div>
      </div>
        </div>
      </div>

      <!-- Price Display -->
      <div class="flex items-center justify-between bg-orange-50 px-4 py-3 rounded-md mb-4">
        <span class="text-sm text-gray-600">Price</span>
        <span class="text-lg font-semibold text-orange-500">${{ price }}</span>
      </div>
    </div>

    <!-- Action Button - Full width with no side padding -->
    <div class="px-0">
      <button class="w-full bg-pharmaBlue-400 text-white py-3 font-medium hover:bg-pharmaBlue-500 transition-colors">
        Transfer Prescription
      </button>
    </div>
  </div>
</template>

<style scoped></style>
