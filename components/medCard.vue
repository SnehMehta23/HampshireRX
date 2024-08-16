<script setup lang="js">

const {data} = defineProps(['data'])
const {name, genericFor, count, countUnit, price, size, id } = data;

const isBeingEdited = ref(false);
const newMedData = reactive({
  name: name,
  genericFor: genericFor,
  count: count,
  countUnit: countUnit,
  price: price,
  size: size,
  id: id
})

const UPDATE_MED_MUTATION = gql`
  mutation updateMed(
    $id: ID!,
    $name: String,
    $size: String,
    $count: Int,
    $countUnit: String,
    $genericFor: String,
    $price: String
  ) {
    updateMed(
      id: $id,
      name: $name,
      size: $size,
      count: $count,
      countUnit: $countUnit,
      genericFor: $genericFor,
      price: $price
    ) {
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

// Use Mutation Hook
const { mutate: updateMed } = useMutation(UPDATE_MED_MUTATION);

// Save Changes Function
const saveChanges = async () => {
  try {
    const response = await updateMed({
      id: newMedData.id,
      name: newMedData.name,
      size: newMedData.size,
      count: newMedData.count,
      countUnit: newMedData.countUnit,
      genericFor: newMedData.genericFor,
      price: newMedData.price,
    });
    console.log('Updated Med:', response.data.updateMed);
    isBeingEdited.value = false; // Exit edit mode after saving
  } catch (error) {
    console.error('Error updating med:', error);
  }
};




</script>

<template>
  <div class="border border-blue-500 rounded shadow-md flex flex-col gap-2 w-[25rem] justify-between">
    <div class="text-xl font-semibold bg-blue-500 p-2 text-white text-center">
      <span v-if="!isBeingEdited">{{ name }}</span>
      <input class="border text-black border-blue-500 rounded px-1 text-right" v-if="isBeingEdited" v-model="newMedData.name" type="text">
    </div>
    <div class="flex flex-col gap-2 p-2">
      <div class="flex items-center justify-between gap-10">
        <div>Generic For:</div>
        <div>
          <span v-if="!isBeingEdited">{{ genericFor }}</span>
          <input class="bg-slate-50 border border-blue-500 rounded px-1 text-right" v-if="isBeingEdited" v-model="newMedData.genericFor" type="text">
        </div>
      </div>
      <div class="flex items-center justify-between gap-10">
        <div>Size:</div>
        <div>
          <span v-if="!isBeingEdited">{{size}}</span>
          <input class="bg-slate-50 border border-blue-500 rounded px-1 text-right" v-if="isBeingEdited" v-model="newMedData.size" type="text">
        </div>
      </div>
      <div class="flex items-center justify-between gap-10">
        <div>Count:</div>
        <div>
          <span v-if="!isBeingEdited">{{ count }}</span>
          <input class="bg-slate-50 border border-blue-500 rounded px-1 text-right" v-if="isBeingEdited" v-model="newMedData.count" type="text">
        </div>
      </div>
      <div class="flex items-center justify-between gap-10">
        <div >Count Unit:</div>
        <div>
          <span v-if="!isBeingEdited">{{ countUnit }}</span>
          <input class="bg-slate-50 border border-blue-500 rounded px-1 text-right" v-if="isBeingEdited" v-model="newMedData.countUnit" type="text">
        </div>
      </div>
      <div class="flex items-center justify-between gap-10">
        <div>Price:</div>
        <div>
          <span v-if="!isBeingEdited">${{price}}</span>
          <input class="bg-slate-50 border border-blue-500 rounded px-1 text-right" v-if="isBeingEdited" v-model="newMedData.price" type="text">
        </div>
      </div>
    </div>
    <div class="p-2 bg-blue-500 flex items-center justify-end gap-1">
      <div class="text-xs text-blue-900">Database ID: {{id}}</div>
      <div v-if="isBeingEdited === false"
           @click="isBeingEdited = !isBeingEdited" class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">Edit
      </div>
      <div v-if="isBeingEdited"
           @click="isBeingEdited = false" class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">Cancel
      </div>
      <div v-if="isBeingEdited"
           @click="saveChanges" class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">Save
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>