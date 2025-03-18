<script setup>
import { RouterLink } from 'vue-router'

import Logo from './LogoCompany.vue'
import ButtonQuotation from './ButtonQuot.vue'
</script>

<template>
  <header>
    <div class="container display">
      <Logo />

      <nav>
        <!-- <RouterLink :to="{ name: 'quotation' }">Demande de devis gratuit</RouterLink> -->
        <ButtonQuotation />

        <a href="#contact">Contact</a>

        <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 150px;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  background-color: var(--green-blue);
}

a {
  text-decoration: none;
  text-shadow: 0 0 5px black;
  color: white;
  font-size: 16px;
  border: 2px solid var(--blue);
  border-radius: 30px;
  padding: 8px 15px;
}

.display {
  display: flex;
  justify-content: space-around;
}

nav {
  /* border: 1px solid red; */
  width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
