<script setup lang="ts">
import type { Medication } from "~/types/Medication";

interface CreateMedicationResponse {
  statusCode: number;
  med: Medication;
}

const emit = defineEmits(["submit"]);

//STATE
const MEDICATION_NAME = ref<string>("");

/**
 * Creates a new medication with empty options and a name, then after a successful request, it directs you to the page using the res.id
 */
const SAVE_MEDICATION = async () => {
  try {
    const res = await $fetch<CreateMedicationResponse>("/api/medications/add", {
      method: "POST",
      body: {
        name: MEDICATION_NAME.value,
        options: [],
      },
    });
    if (res.statusCode === 200) {
      return navigateTo("/admin/medication/" + res.med._id);
    }
  } catch (e: any) {
    console.log(e);
  }
};
</script>

<template>
  <div
    class="h-screen w-screen bg-black/60 absolute top-0 right-0 flex justify-center items-center"
  >
    <div class="border rounded-md bg-white border-blue-500 p-4">
      <form action="">
        <div class="flex flex-col gap-5">
          <span class="text-2xl font-bold text-center">Add New Medication</span>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Medication Name:</label>
            <input
              v-model="MEDICATION_NAME"
              class="bg-slate-100 p-1 border border-gray-400 rounded shadow-md"
              type="text"
            />
          </div>
        </div>
        <div class="flex mt-3 justify-end gap-2 items-center">
          <button
            @click="$emit('modalClose')"
            class="bg-red-500 text-white px-2 py-0.5 rounded shadow-md"
          >
            Cancel
          </button>
          <button
            @click.prevent="SAVE_MEDICATION"
            class="bg-blue-500 text-white px-2 py-0.5 rounded shadow-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
