//Tindrá un array amb les butaques i la seva sessió,
// i una funció que retornará true si hi ha una butaca concreta al array o no
import { defineStore } from 'pinia'

export const useTiquetStore = defineStore('tiquet', {
    state: () => ({
        tiquet:{
            sessio: 1,
            seients: [],
            preuSessio:6
        }
    }),
    getters: {
        mostrarTiquet() {
            return this.tiquet
        }
    },
    actions: {
        afegirButaca(fil, col, nouTipus) {
            const seient ={
                id:`${fil}_${col}`,
                tipus: nouTipus,

            }
            this.tiquet.seients.push(seient)
            console.log(this.tiquet);
        }
    }
})