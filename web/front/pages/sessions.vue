<template>
    <section>
      <p>This page will be displayed at the /sessions route.</p>
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
  const {pending, data: sessions}=useLazyFetch('http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Sessio?join=Pelicula',{
    method:'GET',
    onResponse(){
      console.log(sessions.records);
    }
  });
</script>