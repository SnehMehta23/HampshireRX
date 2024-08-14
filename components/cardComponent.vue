<template>
    <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="text-xl font-bold mb-4 text-pharmaBlue-400">{{ title }}</h3>
        <hr class="rounded-line mb-4" />
        <ol v-if="listItems" class="list-none pl-0 mb-6">
            <li v-for="(item, index) in listItems" :key="index" class="mb-2">
                <strong>{{ index + 1 }}. </strong>{{ item }}
            </li>
        </ol>
        <p v-else class="mb-6">{{ content }}</p>
        <NuxtLink :to="buttonLink"
            class="inline-block font-normal text-center whitespace-nowrap align-middle select-none border text-base leading-normal rounded text-white bg-[#fe9601] px-3 py-1.5 border-solid border-[#fe9601] transition-colors duration-150 ease-in-out hover:bg-[#e78900] hover:border-[#e78900] hover:shadow-lg">
            {{ buttonText }} →
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    listItems: {
        type: Array,
        default: null
    },
    content: {
        type: String,
        default: ''
    },
    buttonText: {
        type: String,
        required: true
    },
    buttonLink: {
        type: String,
        required: true
    }
})
</script>