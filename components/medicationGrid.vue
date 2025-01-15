<script setup lang="ts">

const TOP_FIVE_MEDICATIONS = ['Omeprazole', 'Metformin', 'Tadalafil', 'Atorvastatin', 'Levothyroxine']

</script>

<template>
<div class="grid grid-cols-5 justify-items-center items-center py-5">
  <div @click="$emit('medSelected', medication)" v-for="medication in TOP_FIVE_MEDICATIONS" :key="medication" class="bg-gray-200 text-lg hover:bg-white cursor-pointer rounded-md px-4 py-2 shadow-sm shadow-white/20  font-semibold">
      {{medication}}
  </div>
</div>
</template>

<style scoped>

</style>
