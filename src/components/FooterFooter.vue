<script setup></script>

<template>
  <footer>
    <div class="container">
      Réalisé par
      <a href="https://github.com/SabrinaVernier" target="_blank"> Sabrina Vernier </a> avec
      <a href="https://vuejs.org/" target="_blank"> Vuejs </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 50px;
  background-color: rgb(183, 234, 232);
}
.container {
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  font-size: 16px;
  text-decoration: none;
  color: var(--blue);
  font-weight: bold;
}
</style>
