<template>
  <div class="font-lato text-secondary overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://analytics.ahrefs.com/analytics.js',
      'data-key': 'Erhl4Y2wj+tly5AEGz/AQw',
      defer: true
    }
  ]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

html {
  overflow-x: hidden;
}

body {
  background-color: #fff5ea !important;
}

.content {
  padding-bottom: 175px;
}

.rounded-line {
  width: 50px;
  border: none;
  background-color: #000;
  height: 4px;
  border-radius: 10px;
}
</style>