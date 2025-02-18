<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const count = ref(0);
const medData = ref<any[]>([]);
const topMeds = ref();

const { data: meds } = useNuxtData("meds");
const { data: topFiveCache } = useNuxtData("topFive");
if (meds) {
  //@ts-ignore
  medData.value = meds;
}
if (topFiveCache) {
  topMeds.value = topFiveCache;
}
const { data } = await useFetch("/api/medications/all", {
  method: "GET",
  key: "meds",
});

const { data: topFive } = await useFetch("/api/medications/getTopFive", {
  key: "topFive",
});

//@ts-ignore
medData.value = data.value;
topMeds.value = topFive.value;
const newMeds = ref([
  { name: topMeds.value.body[0].topMedications[0].name, index: 0 },
  { name: topMeds.value.body[0].topMedications[1].name, index: 1 },
  { name: topMeds.value.body[0].topMedications[2].name, index: 2 },
  { name: topMeds.value.body[0].topMedications[3].name, index: 3 },
  { name: topMeds.value.body[0].topMedications[4].name, index: 4 },
]);

// console.log(topMeds.value);

const submitTopMeds = async () => {
  try {
    const res = await $fetch("/api/medications/updateTopFive", {
      method: "POST",
      body: {
        topMedications: newMeds.value,
      },
    });
    // console.log(res);
    reloadNuxtApp();
  } catch (e) {
    // console.log(e);
  }
};

const filterText = ref("");

const filteredMeds = computed(() => {
  const term = filterText.value.trim().toLowerCase();
  if (!term) return medData.value;
  return medData.value.filter(
    (med) => med.name && med.name.toLowerCase().includes(term),
  );
});

const newMedSubmitted = async () => {
  reloadNuxtApp();
};

const showModal = ref(false);
</script>

<template>
  <AddMedModal @submit="newMedSubmitted" v-if="showModal" @modal-close="showModal = false" />
  <div class="flex flex-col justify-center items-center gap-2 mt-10">
    <!-- Search & Add Button -->
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-2">
      <div
        class="flex m-3 active:outline-0 justify-between items-center bg-blue-500 border-blue-500 border-2 rounded w-full md:w-auto">
        <input class="p-2 w-full" placeholder="Medication Name..." v-model="filterText" type="text" />
      </div>
      <div @click="showModal = true"
        class="bg-blue-500 text-white text-center px-3 py-2.5 rounded shadow-md cursor-pointer hover:bg-blue-600">
        Add Medication
      </div>
    </div>

    <!-- Results Count -->
    <div v-if="filteredMeds.length">
      Displaying {{ filteredMeds.length }} results
    </div>

    <div class="grid px-10 grid-cols-5 justify-center items-center gap-6 place-content-center">
      <div class="flex flex-col justify-center items-start gap-2" v-for="(med, index) in topMeds.body[0].topMedications"
        :key="index">
        <select class="w-1/2 border-2 rounded-md py-2 px-4 border-blue-300 text-center" v-model="newMeds[index].name">
          <option>{{ med.name }}</option>
          <option v-for="m in medData" :value="m.name">
            {{ m.name }}
          </option>
        </select>
        <button @click="submitTopMeds" v-if="newMeds[index].name !== med.name"
          class="bg-blue-400 px-3 py-1 rounded text-white">
          save
        </button>
      </div>
    </div>

    <!-- Responsive Grid for MedCards -->
    <div class="justify-center place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4">
      <MedCard @submit="newMedSubmitted" v-for="med in filteredMeds" :data="med" :key="med" />
    </div>
  </div>
</template>

<style scoped></style>
