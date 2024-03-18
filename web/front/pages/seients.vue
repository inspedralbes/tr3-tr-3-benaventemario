<template>
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
    </div>
    <div v-else>

    </div>
</template>

<script>
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
            
        }
    }
  });
</script>

<style lang="scss" scoped>

</style>