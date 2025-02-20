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
  <div
    class="border border-blue-500 rounded shadow-md flex flex-col gap-2 w-full max-w-[25rem] justify-between"
  >
    <!-- Header -->
    <div
      @click="navigateTo(`/admin/medication/${data._id}`)"
      class="text-xl font-semibold cursor-pointer bg-blue-400 hover:bg-white hover:text-blue-400 p-2 text-white text-center"
    >
      <span v-if="!isBeingEdited">{{ data.name }}</span>
      <input
        v-if="isBeingEdited"
        class="border text-black border-blue-500 rounded px-1 text-right w-full"
        v-model="newMedData.name"
        type="text"
      />
    </div>
  </div>
</template>

<style scoped></style>
