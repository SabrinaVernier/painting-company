<script setup>
import { RouterView } from 'vue-router'

import Footer from './components/FooterFooter.vue'
import Header from './components/HeaderHeader.vue'
</script>

<template>
  <Header />

  <RouterView />

  <Footer />
</template>

<style scoped></style>
