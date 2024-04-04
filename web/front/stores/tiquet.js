//Tindrá un this.tiquet.seientsay amb les butaques i la seva sessió,
// una funció getter i una altre que será adder
import { defineStore } from 'pinia'

export const useTiquetStore = defineStore('tiquet', {
    state: () => ({
        tiquet:{
            sessio: 2,
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
        },
        cancelarButaca(fil, col, nouTipus) {
            const seientAEliminar=`${fil}_${col}`

            for (let i = 0; i < this.tiquet.seients.length; i++) {
                if (this.tiquet.seients[i].id === seientAEliminar) {
                    this.tiquet.seients.splice(i, 1);
                    i--;
                }
                
            }
            console.log(this.tiquet);
        }
    }
})