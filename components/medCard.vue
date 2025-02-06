<script setup lang="js">

const emit = defineEmits(['submit'])
const {data} = defineProps(['data'])
const {_id, name, genericFor, count, countUnit, price, size,} = data;
const confirmDeletion = ref(false);

const isBeingEdited = ref(false);
const newMedData = reactive({
  name: name,
  genericFor: genericFor,
  count: count,
  countUnit: countUnit,
  price: price,
  size: size,
  id: _id
})


// Save Changes Function
const saveChanges = async () => {
  try {
    const response = await $fetch('/api/meds/update', {
      method: 'POST',
      body: {
        id: newMedData.id,
        name: newMedData.name,
        size: newMedData.size,
        count: newMedData.count,
        countUnit: newMedData.countUnit,
        genericFor: newMedData.genericFor,
        price: newMedData.price,
      }
    });
    if (response.statusCode === 200) {
      isBeingEdited.value = false; // Exit edit mode after saving
      emit('submit')
    }
  } catch (error) {
    console.error('Error updating med:', error);
  }
};

const deleteMed = async(id) => {
  try{
    const res = await $fetch('/api/meds/delete', {
      method: 'POST',
      body:{
        id: _id
      }
    })
    if(res.statusCode ===200){
      emit('submit')
    }
  } catch(e) {
    console.log(e)
  }
}


</script>

<template>
  <div class="border border-blue-500 rounded shadow-md flex flex-col gap-2 w-full max-w-[25rem] justify-between">
    <!-- Header -->
    <div class="text-xl font-semibold bg-blue-500 p-2 text-white text-center">
      <span v-if="!isBeingEdited">{{ name }}</span>
      <input
          v-if="isBeingEdited"
          class="border text-black border-blue-500 rounded px-1 text-right w-full"
          v-model="newMedData.name"
          type="text"
      />
    </div>

    <!-- Medication Details -->
    <div class="flex flex-col gap-2 p-2">
      <!-- Generic For -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-10">
        <div>Generic For:</div>
        <div>
          <span v-if="!isBeingEdited">{{ genericFor }}</span>
          <input
              v-if="isBeingEdited"
              class="bg-slate-50 border border-blue-500 rounded px-1 text-right"
              v-model="newMedData.genericFor"
              type="text"
          />
        </div>
      </div>
      <!-- Size -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-10">
        <div>Size:</div>
        <div>
          <span v-if="!isBeingEdited">{{ size }}</span>
          <input
              v-if="isBeingEdited"
              class="bg-slate-50 border border-blue-500 rounded px-1 text-right"
              v-model="newMedData.size"
              type="text"
          />
        </div>
      </div>
      <!-- Count -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-10">
        <div>Count:</div>
        <div>
          <span v-if="!isBeingEdited">{{ count }}</span>
          <input
              v-if="isBeingEdited"
              class="bg-slate-50 border border-blue-500 rounded px-1 text-right"
              v-model="newMedData.count"
              type="text"
          />
        </div>
      </div>
      <!-- Count Unit -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-10">
        <div>Count Unit:</div>
        <div>
          <span v-if="!isBeingEdited">{{ countUnit }}</span>
          <input
              v-if="isBeingEdited"
              class="bg-slate-50 border border-blue-500 rounded px-1 text-right"
              v-model="newMedData.countUnit"
              type="text"
          />
        </div>
      </div>
      <!-- Price -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-10">
        <div>Price:</div>
        <div>
          <span v-if="!isBeingEdited">${{ price }}</span>
          <input
              v-if="isBeingEdited"
              class="bg-slate-50 border border-blue-500 rounded px-1 text-right"
              v-model="newMedData.price"
              type="text"
          />
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="p-2 bg-blue-500 flex flex-wrap items-center justify-end gap-1">
      <div v-if="!isBeingEdited" class="text-xs text-blue-900">
        Database ID: {{ _id }}
      </div>
      <div
          v-if="isBeingEdited === false"
          @click="isBeingEdited = !isBeingEdited"
          class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer"
      >
        Edit
      </div>
      <div
          v-if="isBeingEdited"
          @click="() => { isBeingEdited = false; confirmDeletion = false; }"
          class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer"
      >
        Cancel
      </div>
      <div
          v-if="isBeingEdited"
          @click="saveChanges"
          class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer"
      >
        Save
      </div>
      <div
          v-if="isBeingEdited && !confirmDeletion"
          @click="confirmDeletion = true"
          class="text-white bg-red-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer"
      >
        Delete
      </div>
      <div
          v-if="isBeingEdited && confirmDeletion"
          @click="deleteMed(_id)"
          class="text-white bg-red-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer"
      >
        Are you sure?
      </div>
    </div>
  </div>
</template>


<style scoped></style>
