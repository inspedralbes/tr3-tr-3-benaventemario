//Tindrá un this.tiquet.seientsay amb les butaques i la seva sessió,
// una funció getter i una altre que será adder
import { defineStore } from 'pinia'
import { useSessioStore } from "~/stores/sessio";

export const useTiquetStore = defineStore('tiquet', {
    state: () => ({
        tiquet:{
            seients: [],
            preuFinal:0
        }
    }),
    getters: {
        mostrarTiquet() {
            return this.tiquet
        },
        mostrarTotal() {
            return this.tiquet.preuFinal
        }
    },
    actions: {
        afegirButaca(fil, col, nouTipus) {
            const storeSessio=useSessioStore();
            const sessio=storeSessio.mostrarSessio;
            const seient ={
                id:`${fil}_${col}`,
                tipus: nouTipus,
                preu:(nouTipus!="estandard" && sessio.descompte_espect!=1? parseInt(sessio.preu_base)+2 : nouTipus!="vip" && sessio.descompte_espect!=0? parseInt(sessio.preu_base)-2: parseInt(sessio.preu_base) )

            }
            this.tiquet.seients.push(seient)
            this.tiquet.preuFinal+=seient.preu
            console.log(this.tiquet);
        },
        cancelarButaca(fil, col) {
            const seientAEliminar=`${fil}_${col}`

            for (let i = 0; i < this.tiquet.seients.length; i++) {
                if (this.tiquet.seients[i].id === seientAEliminar) {
                    this.tiquet.preuFinal-=this.tiquet.seients[i].preu
                    this.tiquet.seients.splice(i, 1);
                    i--;
                }
                
            }
            console.log(this.tiquet);
        },
        borrarTiquet() {
            const buit=[]
            this.tiquet=buit;
            this.tiquet.preuFinal=0;
        }

    }
})