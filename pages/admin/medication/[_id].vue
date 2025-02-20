<script setup lang="ts">
//INTERFACES
type Option = {
  size: string;
  count: number;
  countUnit: string;
  price?: number;
  _id: string;
  genericFor: string;
};

type Medication = {
  name: string | null;
  options: Option[] | null;
  _id: string | null;
};

//GET PARAMS FROM ROUTE
const route = useRoute();

//STATE & REFS
const MEDICATION = ref<Medication | null>(null);
const MED_EDITED_ID = ref<string>("");
const ARE_YOU_SURE = ref<any>({
  //BOOLEAN TO WORK AS CONFIRMATION PROMPT
  ID: "",
});

//FETCH INITIAL DATA
const { data: MEDICATION_DATA } = await useFetch("/api/medications/findById", {
  server: false,
  method: "GET",
  query: {
    _id: route.params._id,
  },
  onResponse({ response }) {
    MEDICATION.value = response._data.body;
  },
});
console.log(MEDICATION_DATA.value);

//BLACK MAGIC TO ENSURE PROPER LOADING AND TYPE SAFETY.
const medicationData = computed(() => {
  if (MEDICATION.value) {
    const { name, options, _id } = MEDICATION.value;
    return { name, options, _id };
  }
  return { name: "", options: [] as Option[], _id: "" };
});

//NEW MEDICATION
const EDITED_MEDICATION = ref<Option | null>({
  size: "",
  count: 0,
  countUnit: "",
  price: 0.0,
  genericFor: "",
  _id: "",
});

//POPULATE EDITED_MEDICATION
const populateEditedMedication = (option: Option) => {
  MED_EDITED_ID.value = option._id;
  EDITED_MEDICATION.value = option;
};

//HTTP POST REQUEST TO UPDATE THE MED.

const UPDATE_MED = async () => {
  try {
    const RES = await $fetch("/api/medications/update", {
      method: "POST",
      body: {
        name: medicationData.value.name,
        options: medicationData.value.options,
        _id: medicationData.value._id,
      },
    });
    console.log(RES);
    reloadNuxtApp();
  } catch (err: any) {
    console.log(err);
  }
};

// CREATE A NEW EMPTY OPTION

const CREATE_OPTION = () => {
  const NEW_OPTION: Option = {
    size: "",
    count: 0,
    countUnit: "",
    price: 0.0,
    genericFor: "",
    _id: crypto.randomUUID() as string,
  };
  medicationData.value.options.unshift(NEW_OPTION);
  MED_EDITED_ID.value = NEW_OPTION._id;
};

//DELETE OPTION FROM LIST

const DELETE_OPTION = (option: Option) => {
  const index: number | undefined =
    medicationData?.value?.options?.indexOf(option);
  medicationData?.value.options?.splice(index, 1);
  UPDATE_MED();
};
</script>

<template>
  <div id="bg" class="w-screen h-full flex flex-col justify-start items-center">
    <div @click="console.log(medicationData)">TEST</div>
    <div
      class="w-screen py-4 px-6 flex flex-col gap-2 justify-center items-center"
    >
      <div class="border-2 rounded px-4 text-4xl py-2 border-pharmaBlue-400">
        {{ medicationData.name }}
      </div>
      <div class="space-x-4">
        <span>Contains {{ medicationData.options.length }} variants</span>
        <span
          @click="CREATE_OPTION"
          class="cursor-pointer font-bold text-blue-400 underline"
          >Add New variant</span
        >
      </div>
      <div
        class="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 justify-center place-items-center"
      >
        <div
          class="bg-white w-2/3 rounded shadow-lg px-4 py-2 text-lg flex flex-col gap-4"
          v-for="option in medicationData.options"
          :key="option._id"
        >
          <div class="flex justify-between">
            <span class="font-bold">Generic: </span
            ><span v-if="MED_EDITED_ID !== option._id">{{
              option.genericFor
            }}</span>
            <input
              v-model="EDITED_MEDICATION.genericFor"
              class="bg-gray-100 rounded outline outline-gray-500"
              v-if="MED_EDITED_ID === option._id"
              type="text"
            />
          </div>
          <div class="flex justify-between">
            <span class="font-bold"> Count: </span
            ><span v-if="MED_EDITED_ID !== option._id">{{ option.count }}</span
            ><input
              v-model="EDITED_MEDICATION.count"
              class="bg-gray-100 rounded outline outline-gray-500"
              v-if="MED_EDITED_ID === option._id"
              type="text"
            />
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Unit: </span
            ><span v-if="MED_EDITED_ID !== option._id">{{
              option.countUnit
            }}</span
            ><input
              v-model="EDITED_MEDICATION.countUnit"
              class="bg-gray-100 rounded outline outline-gray-500"
              v-if="MED_EDITED_ID === option._id"
              type="text"
            />
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Size:</span>
            <span v-if="MED_EDITED_ID !== option._id"> {{ option.size }}</span>
            <input
              v-model="EDITED_MEDICATION.size"
              class="bg-gray-100 rounded outline outline-gray-500"
              v-if="MED_EDITED_ID === option._id"
              type="text"
            />
          </div>
          <div class="flex justify-between">
            <span class="font-bold">Price:</span>
            <span v-if="MED_EDITED_ID !== option._id"> {{ option.price }}</span>
            <input
              v-model="EDITED_MEDICATION.price"
              class="bg-gray-100 rounded outline outline-gray-500"
              v-if="MED_EDITED_ID === option._id"
              type="text"
            />
          </div>
          <div class="flex justify-start gap-4 mt-4">
            <button
              @click="populateEditedMedication(option)"
              class="bg-blue-400 text-white px-3 rounded"
              v-if="MED_EDITED_ID !== option._id"
            >
              Edit
            </button>
            <button
              v-if="MED_EDITED_ID === option._id"
              @click="UPDATE_MED"
              class="bg-green-400 text-white px-3 rounded"
            >
              Save
            </button>

            <button
              @click="ARE_YOU_SURE = { id: option._id }"
              v-if="ARE_YOU_SURE.id !== option._id"
              class="bg-slate-100 px-3 rounded"
            >
              Delete</button
            ><button
              @click="DELETE_OPTION(option)"
              v-if="ARE_YOU_SURE.id === option._id"
              class="bg-red-400 text-white px-3 rounded"
            >
              Click Again to Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#bg {
  background-color: rgb(234, 234, 234);
}
</style>
