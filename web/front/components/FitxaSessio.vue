<template>
        <img  @click="mostrarDetalls=true" width="150" height="220" :src="sessio.peli.imatge" :alt="`poster de ${sessio.peli.titol}`" srcset="">
        <!-- <UModal v-model="isOpen">
            <div class="p-4">
                <Placeholder class="h-48" />
            </div>
        </UModal> -->
</template>

<script setup>
    const mostrarDetalls = ref(false)
    const {sessio}=defineProps(['sessio'])
</script>

<style scoped>
    
</style>