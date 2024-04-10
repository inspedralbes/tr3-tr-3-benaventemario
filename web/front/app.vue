<template>
  <div class="cine">
    <header>
      <h2>CINEMAR</h2>
        <nav class="menu">
            <span class="menu__esquerra">
                <NuxtLink to="/">Home</NuxtLink>
            </span>
            <span class=menu__dreta>
                <NuxtLink v-if="(storeUsuari.comprovarAdmin)!=false" to="/admin">Admin</NuxtLink>
                <NuxtLink @click="mostrarLogin=true">Login</NuxtLink>
                <span v-if="storeUsuari.mostrarCorreu!=''">{{ storeUsuari.mostrarCorreu }}</span>
            </span>
        </nav>
    </header>
    <loginPopup v-if="mostrarLogin==true" @tancarModal="mostrarLogin = false"/>
    <NuxtPage />

  </div>
</template>

<script setup>
    import { useUsuariStore } from "~/stores/usuari";
    const storeUsuari=useUsuariStore();
    const mostrarLogin=ref(false);
</script>