<script setup lang="js">
const emit = defineEmits(["submit"]);
const { data } = defineProps(["data"]);

const confirmDeletion = ref(false);

const isBeingEdited = ref(false);

// Save Changes Function
const saveChanges = async () => {
  try {
    const response = await $fetch("/api/meds/update", {
      method: "POST",
      body: {
        id: newMedData.id,
        name: newMedData.name,
        size: newMedData.size,
        count: newMedData.count,
        countUnit: newMedData.countUnit,
        genericFor: newMedData.genericFor,
        price: newMedData.price,
      },
    });
    if (response.statusCode === 200) {
      isBeingEdited.value = false; // Exit edit mode after saving
      emit("submit");
    }
  } catch (error) {
    console.error("Error updating med:", error);
  }
};

const deleteMed = async (id) => {
  try {
    const res = await $fetch("/api/meds/delete", {
      method: "POST",
      body: {
        id: _id,
      },
    });
    if (res.statusCode === 200) {
      emit("submit");
    }
  } catch (e) {
    // console.log(e);
  }
};
</script>

<template>
  <div class="border border-blue-500 rounded shadow-md flex flex-col gap-2 w-full max-w-[25rem] justify-between">
    <!-- Header -->
    <div class="text-xl font-semibold bg-blue-500 p-2 text-white text-center">
      <span v-if="!isBeingEdited">{{ data.name }}</span>
      <input v-if="isBeingEdited" class="border text-black border-blue-500 rounded px-1 text-right w-full"
        v-model="newMedData.name" type="text" />
    </div>

    <!-- Medication Details -->
    <div class="text-center">{{ data.options.length }} variants available</div>

    <!-- Action Buttons -->
    <div class="p-2 bg-blue-500 flex flex-wrap items-center justify-end gap-1">
      <div v-if="!isBeingEdited" class="text-xs text-blue-900">
        Database ID: {{ _id }}
      </div>
      <div v-if="isBeingEdited === false" @click="isBeingEdited = !isBeingEdited"
        class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">
        Edit
      </div>
      <div v-if="isBeingEdited" @click="
        () => {
          isBeingEdited = false;
          confirmDeletion = false;
        }
      " class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">
        Cancel
      </div>
      <div v-if="isBeingEdited" @click="saveChanges"
        class="bg-slate-100 border-2 border-blue-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">
        Save
      </div>
      <div v-if="isBeingEdited && !confirmDeletion" @click="confirmDeletion = true"
        class="text-white bg-red-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">
        Delete
      </div>
      <div v-if="isBeingEdited && confirmDeletion" @click="deleteMed(_id)"
        class="text-white bg-red-500 px-4 py-0.5 rounded-md hover:bg-slate-200 cursor-pointer">
        Are you sure?
      </div>
    </div>
  </div>
</template>

<style scoped></style>
