<template>
  <div class="cine">
    <header>
      <h2 >CINEMAR</h2>
        <nav class="menu">
            <div class="menu__esquerra">
                <NuxtLink to="/">Inici</NuxtLink>
            </div>
            <div class=menu__dreta>
                <div class=menu__dreta_registre>
                    <NuxtLink v-if="(storeUsuari.comprovarAdmin)!=false" to="/admin">Admin</NuxtLink>
                    <NuxtLink @click="mostrarLogin=true">{{((storeUsuari.comprovarAdmin)!=false)? 'Canviar': 'Registre'}}</NuxtLink>
                </div>
                <span v-if="storeUsuari.mostrarCorreu!=''"> {{ storeUsuari.mostrarCorreu.split("@")[0] }}</span>
            </div>
        </nav>
    </header>
    <loginPopup v-if="mostrarLogin==true" @tancarModal="mostrarLogin = false"/>
    <NuxtPage />

    <footer>
          <p>&copy; 2024 CINEMAR. Tots els drets reservats.</p>
      </footer>
  </div>
</template>

<script setup>
    import { useUsuariStore } from "~/stores/usuari";
    const storeUsuari=useUsuariStore();
    const mostrarLogin=ref(false);
</script>