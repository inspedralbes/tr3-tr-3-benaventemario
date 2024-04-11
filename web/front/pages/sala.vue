<template>
    <!-- 
        https://stackoverflow.com/questions/75043116/nuxt-3-how-to-use-dynamic-variable-for-img-src
        https://github.com/nuxt/nuxt/issues/14766
        https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/

     -->
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
    </div>

    <div v-else>
        <div class="sala">
            <div class="sala__fila" v-for="fil in files" :key="fil">
                <span v-for="col in columnes">
                    <FitxaButaca :butaca="actualitzarFitxa(fil, col)" />
                </span>
            </div>
            <button @click="imprimirEntrades()" class="sala__btn">COMPRAR</button>
        </div>
    </div>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    import { useTiquetStore } from "~/stores/tiquet";
    import { useUsuariStore } from "~/stores/usuari";
    import { useSessioStore } from "~/stores/sessio";
    const storeMeta=useMetaStore();
    const storeTiquet=useTiquetStore();
    const storeUsuari=useUsuariStore();
    const storeSessio=useSessioStore();
    const sessio=storeSessio.mostrarSessio;
    const files=10;
    const columnes=12;
   
    const teVip=sessio.vip!=0?true:false;
    const butaquesOcupades=[]; 
    console.log(`el log es "${storeMeta.mostrarBackUrl}/Entrada?filter=id_sessio,eq,${sessio.id}"`);
    const {pending, data: tiquets}=await useLazyFetch(`${storeMeta.mostrarBackUrl}/Entrada?filter=sessio,eq,${sessio.id}`,{
        method:'GET'
    });
    watch(tiquets, (nouTiquets) => {
        /* Because posts might start out null, you won't have access
        to its contents immediately, but you can watch it.*/
        console.log(nouTiquets.records);
        for (let i = 0; i < nouTiquets.records.length; i++) {
            console.log(nouTiquets.records[i]);
            const butacaOcupada={
                fila: parseInt(nouTiquets.records[i].id_butaca.split("_")[0]),
                columna: parseInt(nouTiquets.records[i].id_butaca.split("_")[1])
            };
            butaquesOcupades.push(butacaOcupada);
        }
        //console.log(butaquesOcupades);
    })


    function actualitzarFitxa(fil, col) {

        const fitxaButaca = {
            fila: files-fil+1,
            columna: col,
            tipus: (teVip && fil==files)? 'vip' : 'estandard',
            ocupada: estatOcupacio((files-fil+1), col),
            seleccionada: false
        }
        
        return fitxaButaca;
    }

    function estatOcupacio(filaBuscada, columnaBuscada) {
        for (let i = 0; i < butaquesOcupades.length; i++) {
            if (butaquesOcupades[i].fila==filaBuscada && butaquesOcupades[i].columna==columnaBuscada) {
                return true
            }
        }
        return false
    }

    function imprimirEntrades() {
        const entrades=[];
        console.log('Imprimiendo entrada...');
        const dia = new Date();
        //Llegir butaques seleccionades per pinia
        const entradesPinia=storeTiquet.mostrarTiquet
        console.log(entradesPinia);
        for (let i = 0; i <entradesPinia.seients.length ; i++) {
            const seient = entradesPinia.seients[i];
            const preuFinal=(seient.tipus!="estandard"? entradesPinia.preuSessio+2 : entradesPinia.preuSessio)
            const entrada ={
                sessio: sessio.id,
                id_butaca: seient.id,
                tipus_butaca: seient.tipus,
                preu: sessio.descompte_espect!=0?preuFinal-2:preuFinal,
                data_compra: `${dia.getFullYear()}-${storeSessio.formatarData(dia.getMonth()+1)}-${storeSessio.formatarData(dia.getDate())} ${storeSessio.formatarData(dia.getHours())}:${storeSessio.formatarData(dia.getMinutes())}:${storeSessio.formatarData(dia.getSeconds())}`,
                correu:storeUsuari.mostrarCorreu
            };
            console.log(entrada);
            entrades.push(entrada);
        }
        $fetch(`${storeMeta.mostrarBackUrl}/Entrada`, {
            method: "POST",
            body:JSON.stringify(entrades)
        });
        //     sintaxis de fetch de enviament(abajo)
        // 


        // const entrada ={
        //     id_sessio: tiquets.records.id,
        //     id_butaca: `${fil}_${col}`,
        //     tipus_butaca: 'estandard',
        //     preu: tiquets.records.preu,
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