<template>
    <section>
      <p>This page will be displayed at the /sessions route.</p>
      <div v-for="item in sessions.records">
        <h1>Sessió {{item.id}} amb peli {{demanarPeli(item.id_peli).titol}}</h1>
      </div>
    </section>
</template>

<script setup>
  const {pending, data: sessions}=useLazyFetch('http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Sessio',{
    method:'GET',
    onResponse(){
      console.log(sessions.records);
    }
  });
  function demanarPeli(id_peli) {
    const {pending, data: peli}=useLazyFetch(`http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Pelicula/${id_peli}`,{
      method:'GET',
      onResponse(){
        console.log(peli);
        return peli;
      }
    });
  }
</script>