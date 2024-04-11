import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', {
    state: () => ({
        prodUrl:'https://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records',
        entradesUrl:'https://tr3marbenalc.daw.inspedralbes.cat/back/enviarEntrades.php/',
        devUrl:'http://mario.daw.inspedralbes.cat/api/api.php/records'
        
    }),
    getters: {
        mostrarBackUrl() {
            return this.prodUrl
        },
    },
})