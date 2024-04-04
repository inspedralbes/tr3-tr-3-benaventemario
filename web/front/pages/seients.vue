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
    const storeMeta=useMetaStore();
    const storeTiquet=useTiquetStore();
    const storeUsuari=useUsuariStore();

    const files=10;
    const columnes=12;
   
    const teVip=true;
    const teDescompte=false;
    const butaquesOcupades=[]; 
    const {pending, data: sessio}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Entrada?filter=id_sessio,eq,${2/*ESTA EXPRESSION DEBE SER DINÁMICA, MIRAR DOCU DE PAGES DE NUXT*/}`,{
        method:'GET',
        onResponse(){
            console.log(sessio);
            for (let i = 0; i < sessio.records.Entrada.length; i++) {
                console.log(sessio.records.Entrada[i]);
                const butacaOcupada={
                    fila: parseInt(sessio.records.Entrada[i].id_butaca.charAt(0)),
                    columna: parseInt(sessio.records.Entrada[i].id_butaca.charAt(2))
                };
                butaquesOcupades.push(butacaOcupada);
                console.log(butaquesOcupades);
            }
            if (parseInt(sessio.records.vip)!=0) {
                teVip=true;
            }
            if (sessio.records.descompte_espect==0) {
                teDescompte=true;
            }
            console.log(sessio);
        }
    });

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
        const ocupada=false;
        for (let i = 0; i < butaquesOcupades.length; i++) {
            if (butaquesOcupades[i].fila==filaBuscada && butaquesOcupades[i].columna==columnaBuscada) {
                return true
            }
        }
        return ocupada
    }
    function afegirZeros(num) {
        return num.toString().padStart(2, "0");
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
                id_sessio: entradesPinia.sessio,
                id_butaca: seient.id,
                tipus_butaca: seient.tipus,
                preu: preuFinal,
                data_compra: `${dia.getFullYear()}-${afegirZeros(dia.getMonth()+1)}-${afegirZeros(dia.getDate())} ${afegirZeros(dia.getHours())}:${afegirZeros(dia.getMinutes())}:${afegirZeros(dia.getSeconds())}`,
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