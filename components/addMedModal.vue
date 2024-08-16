<script setup lang="ts">
import {gql} from "graphql-tag";

const query = gql`
  query getMeds {
    meds {
      genericFor
    }
  }
`;

const generics = ref([])
const filterText = ref('')

const medData = reactive({
  name: '',
  genericFor: '',
  size: '',
  price: '',
  count: '',
  countUnit: '',
})

const CREATE_MED_MUTATION = gql`
  mutation createMed(
    $name: String!,
    $size: String!,
    $count: Int!,
    $countUnit: String!,
    $genericFor: String!,
    $price: String!
  ) {
    createMed(
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


const {data} = useLazyAsyncQuery(query)

generics.value = [...new Set(data.value?.meds.map(item => item.genericFor))];

const filteredList = computed(() => {
  if (!medData.genericFor) {
    // If no filter text is provided, return all items
    return generics.value
  }

  return generics.value.filter(item =>
      item.toLowerCase().includes(medData.genericFor.toString().toLowerCase())
  );
})

const {mutate: createMed} = useMutation(CREATE_MED_MUTATION)

async function saveMed (){
  try{
    const response = await createMed({...medData, count: parseInt(medData.count) });
  } catch (e){
    console.log(e)
  }
}

const showDropDown = ref(false)

// onMounted(async() =>{
//   try{
//     const {data} = useAsyncQuery(query)
//     if(data.value?.meds){
//       console.log(data.value.meds)
//     }
//     // const newArray = uniqueGenericFor.map(item => {
//     //   return {genericFor: item}
//     // })
//   } catch (error) {
//     console.log(error)
//   }
// })

const selectGeneric = (med) => {
  showDropDown.value = false
  filterText.value = med;
}

</script>

<template>
  <div class="h-screen w-screen bg-black/60 absolute top-0 right-0 flex justify-center items-center">
    <div class="border rounded-md bg-white border-blue-500 p-4">
      <form action="">
        <div class="flex flex-col gap-5">
          <span class="text-2xl font-bold text-center">Add New Medication</span>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Medication Name:</label>
            <input v-model="medData.name" class="bg-slate-100 p-1 border border-gray-400 rounded shadow-md" type="text">
          </div>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Generic For:</label>
            <div class="bg-slate-100 p-1 border border-gray-400 rounded  flex items-center">
              <div>
                <input class="bg-slate-100" v-model="medData.genericFor " type="text">
                <ul v-if="showDropDown"
                    class="border border-gray-400 shadow-md shadow-black overflow-auto max-h-40 absolute bg-slate-100 m-1 p-1 rounded">
                  <li @click="selectGeneric(med)" class="cursor-pointer hover:bg-gray-200" v-for="med in filteredList">
                    {{ med }}
                  </li>
                </ul>
                <span @click="showDropDown = !showDropDown"
                      class=" cursor-pointer text-xs bg-blue-500 px-2 py-0.5 rounded text-white shadow-md">{{ showDropDown ? "Hide" : "List" }}</span>
              </div>
            </div>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Size:</label>
            <input v-model="medData.size" class="bg-slate-100 p-1 border border-gray-400 rounded shadow-md" type="text">
          </div>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Count:</label>
            <input v-model="medData.count" class="bg-slate-100 p-1 border border-gray-400 rounded shadow-md" type="text">
          </div>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Count Unit:</label>
            <input v-model="medData.countUnit" class="bg-slate-100 p-1 border border-gray-400 rounded shadow-md" type="text">
          </div>
          <div class="flex gap-2 justify-between items-center">
            <label for="">Price:</label>
            <input v-model="medData.price" class="bg-slate-100 p-1 border border-gray-400 rounded shadow-md" type="text">
          </div>
        </div>
        <div class="flex mt-3 justify-end gap-2 items-center">
          <button @click="$emit('modalClose')" class="bg-red-500 text-white px-2 py-0.5 rounded shadow-md">Cancel</button>
          <button @click.prevent="saveMed" class="bg-blue-500 text-white px-2 py-0.5 rounded shadow-md">Save</button>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>

</style>