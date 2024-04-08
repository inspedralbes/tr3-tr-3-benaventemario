import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', {
    state: () => ({
        backUrl:'https://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records',
        entradesUrl:'https://tr3marbenalc.daw.inspedralbes.cat/back/enviarEntrades.php/'

    }),
    getters: {
        mostrarBackUrl() {
            return this.backUrl
        },
        mostrarUrlImprimirEntrades() {
            return this.entradesUrl
        }
    },
})