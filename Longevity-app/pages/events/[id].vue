<script setup>
const nuxt = useNuxtApp();
console.log(nuxt)
</script>

<template>
    <div>
        evetnt id: {{ this.$route.params.id }}
    </div>
</template>