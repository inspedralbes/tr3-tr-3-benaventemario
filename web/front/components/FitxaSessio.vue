<template>
    <br>
    <div>
        <h1>Sessió {{sessio.id}} amb peli {{sessio.peli.titol}}</h1>
        <img width="150" height="220" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
    </div>
</template>

<script setup>
    const {sessio}=defineProps(['sessio'])
</script>

<style scoped>
    div{
        display: flex;
    }
</style>