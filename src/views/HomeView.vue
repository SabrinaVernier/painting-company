<script setup>
import { RouterLink } from 'vue-router'

import { servicesArray } from '@/assets/Utils/Array'
</script>

<template>
  <main>
    <div class="container">
      <h1>Gau Peinture</h1>

      <div class="div-section">
        <section class="description">
          <p>
            Vos travaux requièrent les services d'un peintre décorateur ? L'offre de prestations de
            notre entreprise inclut la peinture de façade, intérieure ou de mur extérieur ainsi que
            le crépissage de maison. Divers types de peintures (badigeon à la chaux et peinture
            essuyée, à effet ou électrostatique) mais également d'enduit projeté sont disponibles
            pour répondre à vos besoins.
          </p>

          <RouterLink :to="{ name: 'quotation' }"> Demandez votre devis ici</RouterLink>
        </section>

        <section class="servivesList">
          <h2>Services proposés par l'Entreprise :</h2>

          <p v-for="service in servicesArray" :key="service">{{ service }}</p>
        </section>
      </div>
    </div>
  </main>
</template>
<style scoped>
h1 {
  font-family: 'Rock Salt', serif;
  font-size: 30px;
  line-height: 22px;
  padding: 40px;
  text-align: center;
}

h2 {
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  font-size: 20px;
  line-height: 18px;
  padding: 20px;
}

section {
  border: 1px solid red;
  margin-bottom: 20px;
}
p {
  line-height: 16px;
}

/* ---- */
.div-section {
  display: flex;
}
.description {
  flex: 2;
}
.services-list {
  flex: 1;
}
</style>
