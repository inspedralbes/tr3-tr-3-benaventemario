import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', {
    state: () => ({
        backUrl:'http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records'
    }),
    getters: {
        mostrarBackUrl() {
            return this.backUrl
        }
    },
})