<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

const count = ref(0)
const medData = ref<any[]>([])
const {data: meds} = useNuxtData('meds')
if (meds) {
  //@ts-ignore
  medData.value = meds;
}
const {data, refresh} = await useFetch('/api/meds/all', {method: 'GET', key: 'meds'})
//@ts-ignore
medData.value = data.value;

const filterText = ref('')

const filteredMeds = computed(() => {
  const term = filterText.value.trim().toLowerCase()
  if (!term) return medData.value
  return medData.value.filter(med => med.name && med.name.toLowerCase().includes(term))
})

const newMedSubmitted = async () => {
  reloadNuxtApp()
}

const showModal = ref(false)

</script>

<template>
  <AddMedModal
      @submit="newMedSubmitted"
      v-if="showModal"
      @modal-close="showModal = false"
  />
  <div class=" flex flex-col justify-center items-center gap-2 mt-10">
    <!-- Search & Add Button -->
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-2">
      <div class="flex m-3 active:outline-0 justify-between items-center bg-blue-500 border-blue-500 border-2 rounded w-full md:w-auto">
        <input
            class="p-2 w-full"
            placeholder="Medication Name..."
            v-model="filterText"
            type="text"
        />
      </div>
      <div
          @click="showModal = true"
          class="bg-blue-500 text-white text-center px-3 py-2.5 rounded shadow-md cursor-pointer hover:bg-blue-600"
      >
        Add Medication
      </div>
    </div>

    <!-- Results Count -->
    <div v-if="filteredMeds.length">
      Displaying {{ filteredMeds.length }} results
    </div>

    <!-- Responsive Grid for MedCards -->
    <div class="justify-center place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4">
      <MedCard
          @submit="newMedSubmitted"
          v-for="med in filteredMeds"
          :data="med"
          :key="med"
      />
    </div>
  </div>
</template>


<style scoped>
</style>
