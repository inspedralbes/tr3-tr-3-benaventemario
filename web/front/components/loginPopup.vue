<template>
<!-- https://dev.to/davidemaye/how-to-create-a-modal-component-in-nuxt-38g1
https://stackoverflow.com/questions/75440449/nuxt3-vue3-how-to-show-modal-component-that-is-called-from-header-component -->
    <div class="modal__caixa">
        <div class="modal__contingut">
            <h6 class="modal__titol">Registre</h6>
            <p class="modal__text">Si us plau, escrigui el seu correu abans de fer qualsevol compra</p>

            <input v-model="valorCorreu" class="modal__campCorreu" type="email" placeholder="exemple@gencat.cat" required/>
            <br><button class="modal__enregistrament btn" @click="registrar()">Registrar-me</button>
        </div>
        <div class="modal__tancament" @click="$emit('tancarModal')">
            &times;
        </div>
    </div>
</template>

<script setup>
    import { useUsuariStore } from "~/stores/usuari";
    const storeUsuari=useUsuariStore();
    const emit = defineEmits(['tancarModal'])

    const valorCorreu=ref();
    function registrar() {
        storeUsuari.afegirUsuari(valorCorreu.value);
        emit('tancarModal')
    }
</script>

<style>
</style>