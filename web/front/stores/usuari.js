//Tindrá si l'usuari está validat com a administrador i el correu que l'usuari ha fet servir al lógin.
import { defineStore } from 'pinia'

export const useUsuariStore = defineStore('usuari', {
    state: () => ({
        usuari:{
            correu:'',
            admin:false
        }
    }),
    getters: {
        mostrarCorreu() {
            return this.usuari.correu
        },
        comprovarAdmin(){
            return this.usuari.admin
        }
    },
    actions: {
        afegirUsuari(nouCorreu) {
            this.usuari.correu=nouCorreu;   
            if (this.usuari.correu=='a21marbenalc@inspedralbes.cat') {
                this.usuari.admin=true
            }else{
                this.usuari.admin=false
            }
        },
    }
})