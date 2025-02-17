<script setup lang="ts">
import { ref } from "vue";

const TOP_FIVE_MEDICATIONS = [
  "Omeprazole",
  "Metformin",
  "Tadalafil",
  "Atorvastatin",
  "Levothyroxine",
];

const emit = defineEmits(["medSelected"]);

const topMeds = ref("");

const { data: topFiveCache } = useNuxtData("topFive");

if (topFiveCache) {
  topMeds.value = topFiveCache;
}

const { data: topFive } = await useFetch("/api/medications/getTopFive", {
  key: "topFive",
});

topMeds.value = topFive.value;
</script>

<template>
  <div class="max-w-4xl px-12 mx-auto mt-4 md:pl-32">
    <div class="flex flex-col md:flex-row md:items-center gap-2 text-black">
      <span class="text-md font-bold">Popular searches:</span>
      <div class="flex flex-row flex-wrap gap-x-4">
        <a
          v-for="medication in topMeds.body[0].topMedications"
          :key="medication"
          @click="emit('medSelected', medication.name)"
          class="font-semibold text-md cursor-pointer medication-link"
        >
          {{ medication.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.medication-link {
  position: relative;
  text-decoration: none;
  border-bottom: 2px dotted black;
  transition: all 0.2s ease;
}

.medication-link:hover {
  opacity: 1;
  border-bottom: none;
}
</style>
