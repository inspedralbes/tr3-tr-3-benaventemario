<template>
    {{ files }}
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
    </div>

    <div v-else>
        <div class="sala">
            <div class="sala__fila" v-for="fil in files" :key="fil">
                <template v-for="col in columnes">
                    <img @click="imprimirEntrades(fil, col)" class="sala__butaca" :class="{ 'sala__butaca_vip': esVip && fil===files-1}" :alt="`Butaca {${col}} de la fila {${files-fil+1}}`" srcset="">
                </template>
            </div>
            <button @click="imprimirEntrades()" class="sala__btn">COMPRAR</button>
        </div>
    </div>
</template>

<script setup>
    const files=5;
    const columnes=8;
    const esVip=false;
    const teDescompte=false;
    const butaquesOcupades=[]; 
    const date = new Date();
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
        if (sessio.records.vip==0) {
            esVip=true;
        }
        if (sessio.records.descompte_espect==0) {
            teDescompte=true;
        }
        console.log(sessio);
    }
  });

  function imprimirEntrades(fil,col) {
    console.log('Imprimiendo entrada...');
    // const entradesPinia='';//Get butacas seleccionadas por pinia here
    // for (let i = 0; i <entradas.length ; i++) {
    //     const cont = entradesPinia[i];
    //     const entrada ={
    //         id_sessio: cont.sessio,
    //         id_butaca: cont.butaca,
    //         tipus_butaca: cont.tipus,
    //         preu: cont.preu,
    //         data_compra: cont.compra
    //     };
    //     const response = fetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Entrada`, {
    //         method: "POST",
    //         body:JSON.stringify(entrada)
    //     });
    // }


    const entrada ={
        id_sessio: sessio.records.id,
        id_butaca: `${fil}_${col}`,
        tipus_butaca: estandard,
        preu: sessio.records.preu,
        data_compra: ''
    };
    const response = fetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Entrada`, {
        method: "POST",
        body:JSON.stringify(entrada)
    });
    console.log(entrada);
  }
  

</script>

<style lang="scss" scoped>
</style>