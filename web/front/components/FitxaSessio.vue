<template>
        <img  @click="mostrarDetalls=true" v-if="!mostrarDetalls" width="150" height="220" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
        <!-- <UModal v-model="isOpen">
            <div class="p-4">
                <Placeholder class="h-48" />
            </div>
        </UModal> -->
        <div class="sessióPopup__marc" v-if="mostrarDetalls">
            <div class="sessioPopup__interior">
                <h2>{{ sessio.peli.titol }}</h2>
                <img width="300" height="440" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
                <h2>{{ sessio.peli.descripcio }}</h2>
                <button @click="mostrarDetalls=false" aria-label="Tancar Popup" class="fitxaSessió__popup_botoTancament">X</button>
                <button @click="recarregarSessio=true"><NuxtLink to="/sala">Reservar entrades</NuxtLink></button>
            </div>
        </div>
</template>

<script setup>
    import { useSessioStore } from "~/stores/sessio";
    const storeSessio=useSessioStore();

    const mostrarDetalls = ref(false)
    const {sessio}=defineProps(['sessio'])

    function recarregarSessio() {
        storeSessio.novaSessio(sessio)
    }
</script>

<style scoped>


</style>