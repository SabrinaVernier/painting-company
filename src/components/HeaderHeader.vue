<!-- eslint-disable no-undef -->
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

import Logo from './LogoCompany.vue'
import ButtonQuotation from './ButtonQuot.vue'

const messagesList = ref($cookies.get('messagesList') || [])
// console.log(messagesList.value)

const numOfMessages = messagesList.value.length
console.log(numOfMessages)
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
        <div class="num-of-messages">{{ numOfMessages }}</div>
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

header svg {
  color: var(--blue);
  font-size: 25px;
}

.absolute {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px double rgb(239, 231, 231);
  background-color: white;
  position: absolute;
  top: 80px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
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
