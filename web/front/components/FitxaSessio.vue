<template>
    <template v-if="vistaAdmin!=false && desactivar!=true">
        <td>{{sessio.dia}}</td>
        <td>{{sessio.hora}}</td>
        <td>{{sessio.peli.titol}}</td>
        <td>
            <span v-if="pending">calculant....</span> 
            <span v-else>{{preuTotal}}€</span>
        </td>
        <td class="esborrar" @click="esborrarSessio()">&times;</td>
    </template>
    <span v-else-if="vistaAdmin!=true">

        <div class="cartaPeli" @click="recarregarSessio()">
            <img  width="150" height="220" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
            <div class="cartaPeli__resum">
                <span class="cartaPeli__titol">{{sessio.peli.titol}}</span>
                <span class="cartaPeli__text">Data: {{sessio.dia}}</span>
                <span class="cartaPeli__text">Hora: {{sessio.hora}}</span>
            </div>
        </div>
        <template v-if="mostrarDetalls!=false">
            <div class="modal__caixa">
                <div class="modal__contingut">
                    <h6 class="modal__titol">{{ sessio.peli.titol }}</h6>
                    <img width="150" height="220" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
                    <br>
                    <span>{{ sessio.peli.descripcio }}</span>
                    <br>
                    <button class="modal__boto"><NuxtLink to="/sala">Reservar entrades</NuxtLink></button>
                </div>
                <div class="modal__tancament" @click="tancarModal()">
                    &times;
                </div>
            </div>
        </template>
    </span>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();
    import { useSessioStore } from "~/stores/sessio";
    const storeSessio=useSessioStore();
    
    import { ref } from 'vue';
    const mostrarDetalls = ref(false)
    const preuTotal = ref(0)
    const {sessio, vistaAdmin}=defineProps(['sessio', 'vistaAdmin'])
    
    const desactivar = ref(false)
    const {pending, data: preus}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Entrada?filter=sessio,eq,${sessio.id}&include=preu`,{
        method:'GET'
    });
    
    watch(preus, (nousPreus) => {
        console.log(nousPreus);
        const suma=ref(0);
        if (nousPreus.records != null) {
            for (let i = 0; i < nousPreus.records.length; i++) {
                suma.value+=nousPreus.records[i].preu!=null?parseInt(nousPreus.records[i].preu):0   
            }
        }
        preuTotal.value=suma.value 
    })
    
    function esborrarSessio() {
        desactivar.value=true;
        $fetch(`${storeMeta.mostrarBackUrl}/Sessio/${sessio.id}`, {
            method: "DELETE"
        });
    }

    function recarregarSessio() {
        storeSessio.novaSessio(sessio)
        mostrarDetalls.value=true
    }
    function tancarModal() {
        mostrarDetalls.value=false
    }

</script>

<style>
</style>