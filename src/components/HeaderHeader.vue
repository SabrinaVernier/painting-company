<script setup>
import { RouterLink } from 'vue-router'

import Logo from './LogoCompany.vue'
</script>

<template>
  <header>
    <div class="container display">
      <Logo />

      <RouterLink :to="{ name: 'quotation' }">Demande de devis</RouterLink>

      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 150px;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgb(183, 234, 232);
}

.display {
  display: flex;
  justify-content: space-between;
}
</style>
