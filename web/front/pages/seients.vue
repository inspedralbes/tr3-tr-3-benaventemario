<template>
    {{ files }}
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
    </div>

    <div v-else>
        <div class="sala">
            <div class="sala__fila" v-for="fil in files" :key="fil">
                <template v-for="col in columnes">
                    <img @click="tiquetStore.afegirButaca((files-fil+1), col, 'estandard')" class="sala__butaca" :class="{ 'sala__butaca_vip': esVip && fil===files-1}" :alt="`Butaca {${col}} de la fila {${files-fil+1}}`" srcset="">
                </template>
            </div>
            <button @click="imprimirEntrades()" class="sala__btn">COMPRAR</button>
        </div>
    </div>
</template>

<script setup>
    import { useTiquetStore } from "~/stores/tiquet";
    const tiquetStore=useTiquetStore();
    import { useUsuariStore } from "~/stores/usuari";
    const usuariStore=useUsuariStore();

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

    function imprimirEntrades() {
        console.log('Imprimiendo entrada...');
        //const entradesPinia=tiquetStore.mostrarTiquet()
        //const entradesPinia=computed(()=>tiquetStore.mostrarTiquet());
        const entradesPinia=tiquetStore.mostrarTiquet
        //Get butacas seleccionadas por pinia here
        console.log(entradesPinia);
        for (let i = 0; i <entradesPinia.seients.length ; i++) {
            const seient = entradesPinia.seients[i];
            const preuFinal=(seient.tipus!="estandard"? entradesPinia.preuSessio+2 : entradesPinia.preuSessio)
            const entrada ={
                id_sessio: entradesPinia.sessio,
                id_butaca: seient.id,
                tipus_butaca: seient.tipus,
                preu: preuFinal,
                data_compra: '',
                correu:usuariStore.mostrarCorreu
            };
            console.log(entrada);
            const response =$fetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Entrada`, {
                method: "POST",
                body:JSON.stringify(entrada)
            });
        }
        //     sintaxis de fetch de enviament(abajo)
        // 


        // const entrada ={
        //     id_sessio: sessio.records.id,
        //     id_butaca: `${fil}_${col}`,
        //     tipus_butaca: 'estandard',
        //     preu: sessio.records.preu,
        //     data_compra: '',
        //     correu:usuariStore.mostrarCorreu()
        // };
        // const response =$fetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Entrada`, {
        //     method: "POST",
        //     body:JSON.stringify(entrada)
        // });
        
    }
  

</script>

<style lang="scss" scoped>
</style>