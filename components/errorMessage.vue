<script setup lang="ts">
const {text} = defineProps(['text'])
</script>

<template>

  <div class="text-md md:text-lg text-red-600 font-light">
    {{ text }}
  </div>


</template>

<style scoped>

</style>