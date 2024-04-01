//Tindrá si l'usuari está validat com a administrador i el correu que l'usuari ha fet servir al lógin.
import { defineStore } from 'pinia'

export const useUsuariStore = defineStore('usuari', {
    state: () => ({
        usuari:{
            admin: false,
            correu:''
        }
    }),
    getters: {
        mostrarUsuari() {
            return this.usuari
        },
        mostrarCorreu() {
            return this.usuari.correu
        }
    },
    actions: {
        afegirUsuari(nouCorreu) {
            this.usuari.correu=nouCorreu;
            this.comprovarAdmin();
        },
        comprovarAdmin(){
        if (this.usuari.correu) {
            this.usuari.admin=false;
        }
        }
    }
})