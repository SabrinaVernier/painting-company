<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="about">
      <h1>This is an about page</h1>

      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
    </div>
  </main>
</template>

<style scoped></style>
