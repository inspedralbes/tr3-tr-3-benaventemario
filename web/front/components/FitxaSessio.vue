<template>
    <br>
    <div>
        <h1>Sessió {{sessio.id}} amb peli {{sessio.id_peli.titol}}</h1>
        <img width="150" height="220" :src="sessio.id_peli.imatge" :alt="`poster de ${sessio.id_peli.titol}`" srcset="">
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