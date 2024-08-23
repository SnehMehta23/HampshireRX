<script setup lang="ts">
import { gql } from 'graphql-tag';
import { useSubscription } from "@vue/apollo-composable";

const count = ref(0)

definePageMeta({
  layout: 'admin',
})

const medData = ref([]); // Initialize as an empty array

// Define the query to fetch meds
const query = gql`
  query getMeds($name: String) {
    meds(name: $name) {
      id
      name
      size
      count
      countUnit
      genericFor
      price
    }
  }
`;

// Define the subscription for updated meds
const MED_UPDATED_SUBSCRIPTION = gql`
  subscription OnMedUpdated {
    medUpdated {
      id
      name
      size
      count
      countUnit
      genericFor
      price
    }
  }
`;

// Define the subscription for created meds
const MED_CREATED_SUBSCRIPTION = gql`
  subscription OnMedCreated {
    medCreated {
      id
      name
      size
      count
      countUnit
      genericFor
      price
    }
  }
`;

// Reactive variable to filter meds
const filter = ref('');

// Function to handle searching meds
async function handleSubmit() {
  const variables = { name: filter.value }; // Replace with the name you want to search for
  const { data } = await useAsyncQuery(query, variables);
  medData.value = data.value.meds;
  // console.log(medData.value);
}

// Listen to the subscription for med updates
const { result: medUpdated } = useSubscription(MED_UPDATED_SUBSCRIPTION);
const { result: medCreated } = useSubscription(MED_CREATED_SUBSCRIPTION);



watch(medUpdated, async (updated, oldMed) => {
  const index = medData.value.findIndex(med => med.id === updated.medUpdated.id);
  if (index !== -1) {
    const newArray = [...medData.value]; // Create a new array
    newArray.splice(index, 1, updated.medUpdated); // Modify the new array
    medData.value = newArray; // Assign the new array back to the ref
    count.value++;
  }
})

const showModal = ref(false)

</script>

<template>
  <AddMedModal v-if="showModal" @modal-close="showModal = false" />
  <div :key="count" class="flex flex-col justify-center items-center gap-2 mt-10">
    <div class="w-full flex justify-center items-center gap-2">
      <div class="flex m-3 active:outline-0 justify-between items-center bg-blue-500 border-blue-500 border-2 rounded">
        <input class="p-2" placeholder="Medication Name..." v-model="filter" type="text">
        <button class="p-2 text-white font-bold" @click="handleSubmit">Search</button>
      </div>
      <div @click="showModal = true"
        class="bg-blue-500 text-white text-center px-3 py-2.5 rounded shadow-md cursor-pointer hover:bg-blue-600">
        Add Medication
      </div>
    </div>
    <div v-if="medData.length"> Displaying {{ medData.length }} results</div>
    <div class="grid grid-cols-4 gap-4">
      <template v-if="medData.length">
        <MedCard v-for="med in medData" :key="med.id" :data="med" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
