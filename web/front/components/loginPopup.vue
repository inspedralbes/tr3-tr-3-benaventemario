<template>
<!-- https://dev.to/davidemaye/how-to-create-a-modal-component-in-nuxt-38g1
https://stackoverflow.com/questions/75440449/nuxt3-vue3-how-to-show-modal-component-that-is-called-from-header-component -->
    <div class="modal__caixa">
        <div class="modal__contingut">
            <h8 class="modal__titol">Si us plau, escrigui el seu correu abans de fer qualsevol compra</h8>
            <input v-model="valorCorreu" type="text" /> class="modal__campCorreu" type="email" placeholder="exemple@gencat.cat" required/>
            <button class="modal__enregistrament" @click="registrar()">Registrar-me</button>
        </div>
        <div class="modal__tancament">
            &times;
        </div>
    </div>
</template>

<script setup>
function registrar() {
}
</script>

<style>
    .modal__caixa {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        background-color: #000000da;
    }

    .modal__contingut {
        text-align: center;
        background-color: white;
        height: 500px;
        width: 500px;
        margin-top: 10%;
        padding: 60px 0;
        border-radius: 20px;
    }
    .modal__tancament {
        margin: 10% 0 0 16px;
        cursor: pointer;
        width: 25px;
    }

    h6 {
        font-weight: 500;
        font-size: 28px;
        margin: 20px 0;
    }

    p {
        font-size: 16px;
        margin: 20px 0;
    }

    button {
        background-color: #ac003e;
        width: 150px;
        height: 40px;
        color: white;
        font-size: 14px;
        border-radius: 16px;
        margin-top: 50px;
    }
</style>