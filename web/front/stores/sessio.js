//Tindrá una sessio per defecte  i les dades de la peli corresponent 
//(placeholder per a la join que es fa cuan entres a veure seients )

import { defineStore } from 'pinia'
export const useSessioStore = defineStore('sessio', {
    state: () => ({
        sessio:{
            id: 1
        }
    }),
    getters: {
        mostrarSessio() {
            return this.lastore
        }
    },
    actions: {
        afegirSessio(seient) {
            this.lastore.push(beguda)
        }
    }
})