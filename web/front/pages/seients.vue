<template>
    entra en template
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
    </div>

    <div v-else>
        <div class="sala">
            <div class="fila" v-for="fil in files" :key="fil">
                <template v-for="col in columnes">
                <!-- {{ console.log(`${files-fil+1}_${col}`)}} -->
                <button :class="{ vip: esVip && fil===files-1}">{{`${files-fil+1}_${col}`}}</button>
                </template>
            </div>
        </div>
    </div>


    <!-- A PARTIR DE AQUI EL SCRIPT ES POST-ROTURA -->
</template>

<script>
    const files=5;
    const columnes=8;
    let butaquesOcupades=[]; 
    const {pending, data: sessio}=useLazyFetch('http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Sessio/1?join=Entrada',{
    method:'GET',
    onResponse(){
        for (let i = 0; i < sessio.records.Entrada.length; i++) {
            const butaca = sessio.records.Entrada[i];
            const butacaOcupada={
                fila: parseInt(butaca.id_butaca.charAt(0)),
                columna: parseInt(butaca.id_butaca.charAt(2))
            };
            butaquesOcupades.push(butacaOcupada);
        }
    }
  });

  //A PARTIR DE AQUI EL SCRIPT ES POST-ROTURA

  function imprimirEntrades() {
    const entradesPinia='';//Get butacas seleccionadas por pinia here
    for (let i = 0; i <entradas.length ; i++) {
        const cont = entradesPinia[i];
        const entrada ={
            id_sessio: cont.sessio,
            id_butaca: cont.butaca,
            tipus_butaca: cont.tipus,
            preu: cont.preu,
            data_compra: cont.compra
        };
        const response = fetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Entrada`, {
            method: "POST",
            body:JSON.stringify(entrada)
        });
    }
  }
  

</script>

<style lang="scss" scoped>

</style>