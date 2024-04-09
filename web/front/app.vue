<template>
  <div class="cine">
    <h1>APP</h1>
    <header>
      <nav>
        <ul>
          <span>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink v-if="(storeUsuari.comprovarAdmin)==true" to="/admin">Admin</NuxtLink>
          </span>
        </ul>
      </nav>
    </header>
    <NuxtPage />

  </div>
</template>

<script setup>
import { useUsuariStore } from "~/stores/usuari";
    const storeUsuari=useUsuariStore();
</script>