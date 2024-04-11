<template>

    <div class="modal__caixa">
        <div class="modal__contingut">
            <h6 class="modal__titol">Nova Sessió</h6>
            <label class="modal__text" for="peli">Película:</label>
            <select id="peli" v-model="seleccioPeli">
                <option disabled value="">Película...</option>
                <template v-for="element in pelis.records">
                    <option :value="element.id">{{element.titol}}</option>
                </template>
            </select>
        
            <label class="modal__text" for="dia">Dia:</label>
            <input type="date" id="dia" v-model="seleccioDia">
        
            <label class="modal__text" for="hora">Hora:</label>
            <select id="hora" v-model="seleccioHora">
                <template v-for="element in hora">
                    <option :value="element">{{element}}</option>
                </template>
            </select>
        
            <label class="modal__text" for="vip">És una sessio vip? </label>
            <select id="vip" v-model="seleccioVip">
                <template v-for="element in estatusVip">
                    <option :value="element.valor">{{element.mostra}}</option>
                </template>
            </select>
        
            <label class="modal__text" for="descompte">Té descompte?(Dia de l'espectador, dates especials...)</label>
            <select id="descompte" v-model="seleccioDescompte">
                <template v-for="element in descompteEspectador">
                    <option :value="element.valor">{{element.mostra}}</option>
                </template>
            </select>
        
            <button @click="guardarSessio()">Guardar Sessió</button>

        </div>
        <div class="modal__tancament" @click="$emit('tancarModal')">
            &times;
        </div>
    </div>



</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();
    const emit = defineEmits(['tancarModal'])


    const {data: pelis}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Pelicula`,{
        method:'GET',
        onResponse(){
        }
    });
    const hora=['16:00','18:00','20:00']
    const estatusVip=[{
        mostra:'no',
        valor: 0
    },{
        mostra:'si',
        valor: 1
    }]
    const descompteEspectador=[{
        mostra:'no',
        valor: 0
    },{
        mostra:'si',
        valor: 1
    }]
    import { ref } from 'vue';
    const seleccioPeli = ref(1)
    const seleccioDia = ref('')
    const seleccioHora = ref('16:00')
    const seleccioVip = ref(0)
    const seleccioDescompte = ref(0)

    function guardarSessio() {
        const novaSessio={
            peli:seleccioPeli.value,
            dia:`${seleccioDia.value.split("-")[2]}-${seleccioDia.value.split("-")[1]}`,
            hora:seleccioHora.value,
            descompte_espect:seleccioDescompte.value,
            vip:seleccioVip.value
        }
        $fetch(`${storeMeta.mostrarBackUrl}/Sessio`, {
            method: "POST",
            body:JSON.stringify(novaSessio)
        });
        emit('tancarModal')
    }

</script>

<style>

</style>