import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', {
    state: () => ({
        backUrl:'http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records',
        entradesUrl:'http://tr3marbenalc.daw.inspedralbes.cat/back/enviarEntrades.php/'

    }),
    getters: {
        mostrarBackUrl() {
            return this.backUrl
        },
        mostrarUrlImprimirEntrades() {
            return this.backUrl
        }
    },
})