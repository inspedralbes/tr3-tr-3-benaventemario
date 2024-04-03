<template>
    <section>
      <div v-if="pending">
        Carregant Sessions...
      </div>
      <div v-else>
        <div v-for="item in sessions.records">
          <FitxaSessio :sessio="item"/>
        </div>
      </div>
    </section>
</template>

<script setup>
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();

    const {pending, data: sessions}=useLazyFetch(`${storeMeta.mostrarBackUrl}/Sessio?join=Pelicula`,{
        method:'GET',
        onResponse(){
            console.log(sessions.records);
        }
    });
</script>