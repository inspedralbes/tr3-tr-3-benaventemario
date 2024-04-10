<template>
    <div class="admin__dreta">
        <button @click="activarPanell('esborrar')">Esborra sessions</button>
        <button>Crear Sessió</button>
    </div>
    <div class="admin__esquerra">
        <div v-if="panell.esborrar==true" class="admin__esborrar">
            <div v-if="pending">
                Carregant...
            </div>
            <div v-else class="llista__cos">
                <span v-for="item in sessions.records">
                <FitxaSessio :sessio="item" :vistaAdmin="true"/>
                </span>
            </div>
        </div>
        <div v-if="panell.crear==true" class="admin__crear">
            <div v-if="pending">
                Carregant...
            </div>
        </div>
        <div v-if="panell.recaptParcial==true || panell.recaptTotal==true" class="admin__recapt">
            
        </div>
    </div>
</template>

<script setup>
const panell={
    esborrar: false,
    crear: false,
    recaptParcial: false,
    recaptTotal: false

}

function activarPanell(nouPanell) {
    panell.esborrar= false,
    panell.crear= false,
    panell.recaptParcial= false,
    panell.recaptTotal= false

    panell[nouPanell]=true
    console.log(panell);
}


</script>

<style>

</style>