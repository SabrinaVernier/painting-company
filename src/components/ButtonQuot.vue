<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="estimate">
    <RouterLink :to="{ name: 'quotation' }">Demande de devis gratuit</RouterLink>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  text-shadow: 0 0 5px black;
  color: white;
  background-color: var(--green-blue);
  font-size: 16px;
  border: 2px solid var(--blue);
  border-radius: 30px;
  padding: 8px 15px;
}
</style>
