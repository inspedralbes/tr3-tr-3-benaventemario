<template>
    entra en template
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
    let entrades=[]; 
    for (let i = 0; i <entradasPinia.length ; i++) {
        const cont = sessio.records.Entrada[i];
        const entrada ={
            id_sessio: entradasPinia.sessio,
            id_butaca: entradasPinia.butaca,
            tipus_butaca: entradasPinia.tipus,
            preu: entradasPinia.preu,
            data_compra: entradasPinia.compra
        };
        entrades.push(entrada);
    }
    const response = fetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Entrada`, {
        method: "POST",
        body:JSON.stringify(entrades)
    });
  }
  

</script>

<style lang="scss" scoped>

</style>