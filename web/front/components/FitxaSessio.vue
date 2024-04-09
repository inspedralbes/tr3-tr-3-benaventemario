<template>
        <img  @click="obrirOTancarPopup(true)" width="150" height="220" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
        <!-- <UModal v-model="isOpen">
            <div class="p-4">
                <Placeholder class="h-48" />
            </div>
        </UModal> -->
        <Teleport to="body">
            <div class="sessioPopup" v-if="mostrarDetalls">
                <h2>{{ sessio.peli.titol }}</h2>
                <img width="250" height="366" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
                <span>{{ sessio.peli.descripcio }}</span>
                <button @click="obrirOTancarPopup(false)" aria-label="Tancar Popup" class="sessioPopup__botoTancament">&times;</button>
                <button><NuxtLink to="/sala">Reservar entrades</NuxtLink></button>
            </div>
        </Teleport>
</template>

<script setup>
    import { useSessioStore } from "~/stores/sessio";
    const storeSessio=useSessioStore();
    
    import { ref } from 'vue';
    const mostrarDetalls = ref(false)
    const {sessio}=defineProps(['sessio'])

    function recarregarSessio() {
        storeSessio.novaSessio(sessio)
    }

    function obrirOTancarPopup(nouValor) {
        mostrarDetalls.value=nouValor;
        if (nouValor==true) {
            recarregarSessio();
            document.body.className="sessioPopup_actiu"
        }else{
            document.body.className="buit"
        }
        // useHead({
        //     bodyAttrs: {
        //         class: computed(() => {
        //             if (mostrarDetalls===true){
        //                 return 'sessioPopup_actiu';
        //             }else{
        //                 return 'buit';
        //             }
        //         }),
        //     },
        // });
    }
</script>

<style>
</style>