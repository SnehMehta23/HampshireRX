<template>
    <div class="grid grid-cols-2 gap-4">
        <div v-for="stat in stats" :key="stat.title" class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="text-3xl font-bold text-pharmaBlue-400">{{ stat.value }}</div>
            <div class="text-sm text-gray-600">{{ stat.title }}</div>
        </div>
    </div>
</template>

<script setup>
const stats = [
    { title: 'Satisfied Customers', value: '10,000+' },
    { title: 'Years of Service', value: '14+' },
    { title: 'Medications Available', value: '1000+' },
    { title: 'Google Rating', value: '4.7★' }
]
</script>