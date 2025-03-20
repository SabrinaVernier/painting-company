<!-- eslint-disable no-undef -->
<script setup>
import { RouterLink } from 'vue-router'

import { inject, computed } from 'vue'

import Logo from './LogoCompany.vue'
import ButtonQuotation from './ButtonQuot.vue'

const GlobalStore = inject('GlobalStore')
console.log('GlobalStore>>>', GlobalStore.numberMessages.value)

const updateNumberOfMessage = computed(() => {
  return GlobalStore.numberMessages.value
})
</script>

<template>
  <header id="header">
    <div class="container display">
      <Logo />

      <nav>
        <div class="a"><ButtonQuotation /></div>

        <a class="a" href="#contact">Contact</a>

        <div class="a"><RouterLink :to="{ name: 'home' }">Accueil</RouterLink></div>
      </nav>

      <div class="absolute">
        <RouterLink :to="{ name: 'login' }"
          ><font-awesome-icon :icon="['fas', 'envelope']"
        /></RouterLink>
        <div class="num-of-messages">{{ updateNumberOfMessage }}</div>
      </div>
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

nav a {
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
  justify-content: space-evenly;
  align-items: center;
}

nav {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: nowrap;
}

/* ---------------- */
.absolute {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px double rgb(239, 231, 231);
  background-color: white;
  position: fixed;
  top: 80px;
  right: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.absolute svg {
  color: var(--blue);
  font-size: 25px;
}

.num-of-messages {
  position: absolute;
  top: 8px;
  right: 5px;
  background-color: red;
  color: white;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>
