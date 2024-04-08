<template>
    <!-- <img v-if="butaca.ocupada===true" src="" class="sala__butaca sala__butaca_ocupada" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}, ocupada`" srcset="">
    <img @click="butacaSeleccionada()" v-if="butaca.seleccionada===true" src="/img/seientSeleccionat.png" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
    <img @click="butacaSeleccionada()" v-if="butaca.seleccionada===false && butaca.tipus!='vip' && butaca.ocupada===false" src="/img/seientRoig.png" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
    <img @click="butacaSeleccionada()" v-if="butaca.tipus=='vip' && butaca.seleccionada===false && butaca.ocupada===false" src="/img/seientVip.png" class="sala__butaca" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset=""> -->
    <img @click="butacaSeleccionada()" :src="estat" class="sala__butaca" :class="{sala__butaca_ocupada: butaca.ocupada}" :alt="`Butaca ${butaca.columna} de la fila ${butaca.fila}`" srcset="">
</template>

<script setup>
    import { useTiquetStore } from "~/stores/tiquet";
    const storeTiquet=useTiquetStore();
    
    const {butaca}=defineProps(['butaca'])
    
    
    import { ref } from 'vue';
    const estat=ref(definirEstat());

    // estat.value = definirEstat();

    

    function definirEstat() {
        if (butaca.ocupada===true) {
            return'/img/seientOcupat.png';
        } else {
            if (butaca.seleccionada==true) {
                return'/img/seientSeleccionat.png';
            }else{
                if (butaca.tipus!='estandard') {
                    return'/img/seientVip.png';
                }else{
                    return'/img/seientRoig.png'
                }
            }
        }
    }

    function butacaSeleccionada(){
        if (butaca.ocupada===false) {
            
            butaca.seleccionada=!butaca.seleccionada
            if (butaca.seleccionada) {
                storeTiquet.afegirButaca(butaca.fila, butaca.columna, butaca.tipus)
            }else{
                storeTiquet.cancelarButaca(butaca.fila, butaca.columna)
            }
            estat.value = definirEstat();
            console.log(butaca.seleccionada);
        }
    }
</script>

<style scoped>

</style>