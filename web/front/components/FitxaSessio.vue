<template>
    <template v-if="vistaAdmin!=false && desactivar!=true">
        <td>{{sessio.dia}}</td>
        <td>{{sessio.hora}}</td>
        <td>{{sessio.peli.titol}}</td>
        <td>
            <span v-if="pending">calculant....</span> 
            <span v-else>{{calcularPreuTotal()}}€</span>
        </td>
        <td class="esborrar" @click="esborrarSessio()">&times;</td>
    </template>
    <span v-else-if="vistaAdmin!=true">
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
    </span>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();
    import { useSessioStore } from "~/stores/sessio";
    const storeSessio=useSessioStore();
    
    import { ref } from 'vue';
    const mostrarDetalls = ref(false)
    const {sessio, vistaAdmin}=defineProps(['sessio', 'vistaAdmin'])
    const desactivar = ref(false)
    const {pending, data: preus}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Entrada?filter=sessio,eq,${sessio.id}&include=preu`,{
        method:'GET'
    });
    

    function calcularPreuTotal() {
        console.log(preus);
        const suma=ref(0);
        for (let i = 0; i < preus.records.length; i++) {
            const element = preus.records[i];
            suma.value+=parseInt(element.preu)   
        }
        return suma.value 
    }
    function esborrarSessio() {
        desactivar.value=true;
        $fetch(`${storeMeta.mostrarBackUrl}/Sessio/${sessio.id}`, {
            method: "DELETE"
        });
    }

    function recarregarSessio() {
        storeSessio.novaSessio(sessio)
    }

    function obrirOTancarPopup(nouValor) {
        mostrarDetalls.value=nouValor;
        console.log(nouValor);
        if (nouValor==true) {
            recarregarSessio();
            document.body.classList.remove("buit")
            document.body.classList.add("popupActiu");
        }else{
            document.body.classList.remove("popupActiu");
            document.body.classList.add("buit")
        }
    }

</script>

<style>
</style>