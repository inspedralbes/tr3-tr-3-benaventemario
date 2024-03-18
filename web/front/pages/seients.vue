<template>
    <div v-if="pending">
        <h1>Revisant butaques...</h1>
      </div>
      <div v-else>

    </div>
</template>

<script>
    const {pending, data: sessio}=useLazyFetch('http://tr3marbenalc.daw.inspedralbes.cat/back/api.php/records/Sessio/1?join=Entrada',{
    method:'GET',
    onResponse(){
      console.log(sessio.records);
    }
  });
</script>

<style lang="scss" scoped>

</style>