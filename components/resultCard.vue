<script setup lang="ts">
const {data} = defineProps(['data'])
const {name, price, count, countUnit, size, genericFor} = data
</script>

<template>
  <div class="border border-black rounded-lg flex flex-col justify-center items-center w-[20rem] shadow-lg shadow-slate-400">
    <div class="flex flex-col justify-center items-start w-full p-4">
      <img src="" alt="">
      <div>
        {{ name }}
      </div>
      <div>
        <span>Generic For: </span> <span class="font-bold">{{ genericFor }}</span>
      </div>
    </div>
    <div class="space-x-2 bg-gray-300 flex justify-center items-center w-full p-4 rounded-b-lg">
      <div class="bg-pharmaBlue-400 text-white flex justify-center items-center p-1 rounded-lg w-[8rem] text-sm h-[3rem] shadow-sm shadow-slate-400">
        <div></div>
        <div>
          <div>{{ size }}</div>
          <div>{{count}} {{ countUnit }}</div>
        </div>
      </div>
      <div class="bg-orange-400 flex justify-center items-center p-1 rounded-lg w-[8rem] text-sm h-[3rem] text-center shadow-sm shadow-slate-400">
        <span>${{price}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>