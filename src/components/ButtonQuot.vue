<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="estimate hidden-700">
    <RouterLink :to="{ name: 'quotation' }">Demande de devis gratuit</RouterLink>
  </div>

  <div class="estimate display-700">
    <RouterLink :to="{ name: 'quotation' }">Devis gratuit</RouterLink>
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
.display-700 {
  display: none;
}

@media (max-width: 1000px) {
  a {
    font-size: 14px;
    padding: 5px 10px;
  }
}

@media (max-width: 700px) {
  .hidden-700 {
    display: none;
  }
  .display-700 {
    display: block;
  }
}
</style>
