//Tindrá una sessio per defecte  i les dades de la peli corresponent 
//(placeholder per a la join que es fa cuan entres a veure seients )

import { defineStore } from 'pinia'
export const useSessioStore = defineStore('sessio', {
    state: () => ({
        sessio:{
            id: 1,
            peli: {
                id: 3,
                titol: 'Cars 2',
                imatge: 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg',
                descripcio: null
            },
            dia: '28-03',
            hora: '16:00',
            descompte_espect: true,
            vip: false,
            preu_base: 6
        }
    }),
    getters: {
        mostrarSessio() {
            return this.sessio
        }
    },
    actions: {
        novaSessio(novaSessio) {
            this.sessio.clear();
            this.sessio=novaSessio.records[0]
            console.log(this.sessio);
        },
        formatarData(num) {
            return num.toString().padStart(2, "0");
        },
        
    }
})