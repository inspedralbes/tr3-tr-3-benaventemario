<template>
    <img v-if="butaca.ocupada===true" src="" class="sala__butaca sala__butaca_ocupada" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}, ocupada`" srcset="">
    <img @click="butacaSeleccionada()" v-if="butaca.seleccionada===true" src="~/assets/img/seientSeleccionat.png" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
    <img @click="butacaSeleccionada()" v-if="butaca.seleccionada===false && butaca.tipus!='vip' && butaca.ocupada===false" src="~/assets/img/seientRoig.png" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
    <img @click="butacaSeleccionada()" v-if="butaca.tipus=='vip' && butaca.seleccionada===false && butaca.ocupada===false" src="~/assets/img/seientVip.png" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
</template>

<script setup>
    import { useTiquetStore } from "~/stores/tiquet";
    const storeTiquet=useTiquetStore();

    const {butaca}=defineProps(['butaca'])
    

    function mostrarColor() {
        console.log(`mostrando color butaca ${butaca.columna} de la fila ${butaca.fila}`);
        if (butaca.ocupada===true) {
            return'../assets/img/seientOcupat.png';
        } else {
            if (butaca.tipus=='vip') {
                return'~/assets/img/seientVip.png';
            }else{
                if (butaca.seleccionada===true) {
                    return'../assets/img/seientSeleccionat.png';
                }else{
                    return'../assets/img/seientRoig.png'
                }
            }
        }
    }

    function butacaSeleccionada(){
        storeTiquet.afegirButaca(butaca.fila, butaca.columna, butaca.tipus)
        butaca.seleccionada=true
        console.log(butaca.seleccionada);
    }
</script>

<style scoped>

</style>