<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

const count = ref(0)
const medData = ref<any[]>([])

const {data} = await useFetch('/api/meds/all', {
  server: false,
})

watch(data, async (newData) => {
  console.log(data)
  medData.value = data.value
})



const filterText = ref('')


// async function handleSubmit() {
//   const variables = { searchTerm: filterText.value }
//   const { data } = await useAsyncQuery(query, variables)
//   medData.value = data.value.meds
// }

const handleSubmit = () => {
  const term = filterText.value.trim().toLowerCase()
  if (!term) return medData.value
  medData.value = medData.value.filter(med => med.name && med.name.toLowerCase().includes(term))
}

const filteredMeds = computed(() => {
  const term = filterText.value.trim().toLowerCase()
  if (!term) return medData.value
  return medData.value.filter(med => med.name && med.name.toLowerCase().includes(term))
})

// watch(filterText, async(newText, oldText) => {
//   if(newText){
//     let term = newText.trim().toLowerCase()
//     medData.value = medData.value.filter(med => med.name && med.name.toLowerCase().includes(term))
//   }
// })




const showModal = ref(false)

function reloadData() {
  (async () => {
    const res = await $fetch('/api/meds/all', { method: 'GET' })
    medData.value = res
  })()
}
</script>

<template>
  <AddMedModal v-if="showModal" @submit="reloadData" @modal-close="showModal = false" />
  <div :key="medData.length" class="flex flex-col justify-center items-center gap-2 mt-10">
    <div class="w-full flex justify-center items-center gap-2">
      <div class="flex m-3 active:outline-0 justify-between items-center bg-blue-500 border-blue-500 border-2 rounded">
        <input class="p-2" placeholder="Medication Name..." v-model="filterText" type="text" />
        <button class="p-2 text-white font-bold" @click="handleSubmit">Search</button>
      </div>
      <div @click="showModal = true" class="bg-blue-500 text-white text-center px-3 py-2.5 rounded shadow-md cursor-pointer hover:bg-blue-600">
        Add Medication
      </div>
    </div>
    <div v-if="filteredMeds.length">Displaying {{ filteredMeds.length }} results</div>
    <div class="grid grid-cols-3 gap-4">

        <MedCard v-for="med in filteredMeds" :data="med" @submit="reloadData" :key="med" />

    </div>
  </div>
</template>

<style scoped>
</style>
