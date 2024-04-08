<template>
    <section>
      <div v-if="pending">
        Carregant Sessions...
      </div>
      <div v-else class="llista__cos">
        <span v-for="item in sessions.records">
          <FitxaSessio :sessio="item"/>
        </span>
      </div>
    </section>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();

    const {pending, data: sessions}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Sessio?join=Pelicula`,{
        method:'GET',
        onResponse(){
        }
    });
</script>

<!-- GET /records/posts?join=comments,users&join=tags
-->