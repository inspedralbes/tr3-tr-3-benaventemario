<template>
    <div class="admin__control">
        <button @click="activarPanell('crear')">Crear Sessió</button>
    </div>
    <div class="admin__mostra">
        <div v-if="panell.taula==true" class="admin__taula">

            <div v-if="pending">
                Carregant...
            </div>
            <div v-else>
                <table>
                    <tr class="admin__taula_cap">
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Titol</th>
                        <th>Preu</th>
                        <th>&times;</th>
                    </tr>
                    <tr v-for="item in sessions.records">
                        <FitxaSessio :sessio="item" :vistaAdmin="true"/>
                    </tr>
                </table>
            </div>

        </div>


        <div v-if="panell.crear==true" class="admin__crear">
            <div v-if="pending">
                Carregant...
            </div>
        </div>
       
    </div>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();
    
    const panell={
        crear: false,
        taula: true
    }

    const {pending, data: sessions}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Sessio?join=Pelicula`,{
        method:'GET',
        onResponse(){
        }
    });

    function activarPanell(nouPanell) {
        panell.crear= false
        panell.taula= false

        panell[nouPanell]=true
        console.log(panell);
    }


</script>

<style>

</style>