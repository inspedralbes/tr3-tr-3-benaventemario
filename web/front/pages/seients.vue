<template>
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
    </div>
    <div v-else>
        <!-- <div v-for="fila in files">
            <button>{{fila}}</button>
        </div> -->

        <div v-for="fila in files" :key="fila">
            {{ console.log(fila)}}
            <button>{{files-fila+1}}</button>
        </div>

    </div>
</template>

<script>
    const files=5
    const columnes=8
    let butaquesOcupades=[]; 
    const {pending, data: sessio}=useLazyFetch('http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Sessio/1?join=Entrada',{
    method:'GET',
    onResponse(){
        for (let i = 0; i < sessio.records.Entrada.length; i++) {
            const butaca = sessio.records.Entrada[i];
            const butacaOpcupada={
                fila: parseInt(butaca.id_butaca.charAt(0)),
                columna: parseInt(butaca.id_butaca.charAt(2))
            };
            butaquesOcupades.push(butacaOpcupada);
        }
    }
  });
</script>

<style lang="scss" scoped>

</style>