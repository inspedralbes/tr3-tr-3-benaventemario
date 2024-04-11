<template>
    <div class="admin__control">
        <button class="btn" @click="mostrarCreacio=true">Crear Sessió</button>
    </div>
    <div class="admin__mostra">
        <div class="admin__taula">

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


        <CreacioSessio v-if="mostrarCreacio==true" @tancarModal="mostrarCreacio = false" class="admin__crear"/>
       
    </div>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();
    import { ref } from 'vue';
    const mostrarCreacio=ref(false)

    const {pending, data: sessions}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Sessio?join=Pelicula`,{
        method:'GET',
        onResponse(){
        }
    });


</script>

<style>

</style>