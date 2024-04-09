<template>
    <compntDemo/>
    <button><NuxtLink to="/sala">Sessió d'avui</NuxtLink></button>
    <button><NuxtLink to="/sessions">Próximes sessions</NuxtLink></button>
</template>

<script setup>
    import { useSessioStore } from "~/stores/sessio";
    const storeSessio=useSessioStore();
    import { useMetaStore } from "~/stores/meta";
    const storeMeta=useMetaStore();
    
    onMounted(async () => { 
      const dia = new Date();
      storeSessio.novaSessio((await $fetch(`${storeMeta.mostrarBackUrl}/Sessio?filter=dia,eq,${storeSessio.formatarData(dia.getDate())}-${storeSessio.formatarData(dia.getMonth()+1)}&join=Pelicula`)).records[0])

    });
</script>