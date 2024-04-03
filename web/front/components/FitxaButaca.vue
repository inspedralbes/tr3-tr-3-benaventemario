<template>
    <img @click="storeTiquet.afegirButaca(butaca.fila, butaca.columna, butaca.tipus)" :src="color" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
</template>

<script setup>
    import { useTiquetStore } from "~/stores/tiquet";
    const storeTiquet=useTiquetStore();

    const {butaca}=defineProps(['butaca'])
    const color='~/assets/img/seientRoig.png'

    mostrarColor();


    function mostrarColor() {
        if (butaca.ocupada===true) {
            color='~/assets/img/seientOcupat.png';
        } else {
            if (butaca.tipus=='vip') {
                color='~/assets/img/seientVip.png';
            }else{
                if (butaca.seleccionada===true) {
                    color='~/assets/img/seientSeleccionat.png';
                }
            }
        }
    }
</script>

<style scoped>

</style>