<template>
    <section>
      <p>This page will be displayed at the /sessions route.</p>
    </section>
</template>

<script setup>
  const {pending, data: sessions}=useLazyFetch('http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Sessio',{
    method:'GET',
    onResponse(){
      console.log(sessions);
    }
  });
</script>