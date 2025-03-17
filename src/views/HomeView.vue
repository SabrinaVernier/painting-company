<script setup>
import { RouterLink } from 'vue-router'

import { servicesArray, stepsProject } from '@/assets/Utils/Array'
import ColorChart from '@/components/ColorChart.vue'
</script>

<template>
  <main>
    <div class="container">
      <div>
        <h1>Gau Peinture</h1>
        <h3>(Travaux de peinture et vitrerie)</h3>
      </div>

      <div class="presentation">
        <p>
          Bienvenue sur notre nouveau site internet ! Peinture en intérieur, peinture en extérieur,
          ravalement de façade, travaux de revêtement mural ou de sols ? Ne cherchez plus, c’est
          <span>Gau Peinture</span>. Artisan peintre depuis plus de 15 ans, Fabrice et Fanny GAU
          sont à votre service pour vos futurs travaux de peinture en Occitanie et plus
          particulièrement dans l'Héraut(34) et l'Aude(11).

          <span>Gau Peinture</span> intervient chez les particuliers, les professionnels (commerces,
          bureaux, …) et auprès des collectivités (école, crèche, salle municipale…). N’hésitez pas
          à nous <a href="#contact">contacter</a> <br />
          À bientôt sur votre chantier !
        </p>
      </div>

      <div class="div-section">
        <section class="description">
          <h2 class="white">Vos travaux requièrent les services d'un peintre décorateur ?</h2>

          <div class="text">
            <p>
              => L'offre de prestations de notre entreprise inclut la peinture de façade, intérieure
              ou de mur extérieur ainsi que le crépissage de maison. Divers types de peintures
              (badigeon à la chaux et peinture essuyée, à effet ou électrostatique) mais également
              d'enduit projeté sont disponibles pour répondre à vos besoins.
            </p>

            <div><font-awesome-icon :icon="['fas', 'angle-double-down']" /></div>

            <RouterLink :to="{ name: 'quotation' }"> Demandez votre devis ici</RouterLink>
          </div>
        </section>

        <section class="services-list">
          <h2 class="strong">Prestations proposés par l'Entreprise :</h2>

          <div class="div-list">
            <p v-for="service in servicesArray" :key="service">
              <font-awesome-icon :icon="['fas', 'paint-roller']" /> {{ service }}
            </p>
          </div>
        </section>
      </div>

      <section class="div-color">
        <div>
          <h2>Votre projet de peinture en 5 étapes :</h2>

          <div class="color-chart"><ColorChart /></div>

          <div class="text">
            <h4>
              Fanny et Fabrice <br />
              vous accompagne dans <br />
              votre projet
            </h4>
            <p>N'attendez-pas !</p>
            <RouterLink :to="{ name: 'quotation' }"> Demandez votre devis maintenant</RouterLink>
          </div>
        </div>

        <div>
          <div class="step" v-for="step in stepsProject" :key="step">
            <h4 :style="{ color: step.color }">{{ step.title }}</h4>
            <div>{{ step.icon }}</div>

            <p>{{ step.description }}</p>
          </div>
        </div>
      </section>

      <section id="contact"></section>
    </div>
  </main>
</template>
<style scoped>
/* main {
  background-color: var(--green-blue);
} */
h1 {
  font-family: 'Rock Salt', serif;
  font-size: 30px;
  line-height: 22px;
  padding-top: 100px;
  padding-bottom: 20px;
  text-align: center;
}

h2 {
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif; */
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 1px;
  padding: 20px;
  text-align: center;
  font-weight: bold;
}

h3 {
  text-align: center;
  color: var(--grey);
  padding-bottom: 50px;
}
h4 {
  font-size: 18px;
  font-family: 'Rock Salt', serif;
  margin-bottom: 20px;
}
.white {
  color: white;
}

section {
  /* border: 1px solid red; */
  margin-top: 30px;
  padding: 10px;
  background-color: #fff;
}
/* ---presentation--- */

.presentation p {
  line-height: 20px;
}

span {
  font-family: 'Rock Salt', serif;
  color: var(--orange);
}

.presentation a {
  color: var(--blue);
}
/* ---description--- */
.div-section {
  display: flex;
}
.description {
  flex: 2;
  background-image: url('../assets/Imgs/Img-homme-qui-peint-reduit.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  position: relative;
  border-radius: 20px;
}

.description .text {
  /* border: 1px dashed black; */
  width: 260px;
  height: 420px;
  position: absolute;
  top: 220px;
  left: 280px;
  padding: 20px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.description svg {
  font-size: 30px;
  color: var(--grey);
}

.description a,
.div-color a {
  text-decoration: none;
  text-shadow: 0 0 5px black;
  color: white;
  border: 2px solid var(--blue);
  background-color: var(--green-blue);
  border-radius: 30px;
  padding: 8px 15px;
}
.description a:hover {
  scale: 120%;
  text-decoration: none;
}
/* ---list--- */
.services-list {
  flex: 1;
}
.services-list p {
  padding: 5px 0;
}
.services-list svg {
  margin-right: 10px;
  color: var(--blue);
}
.div-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ---div-color--- */
.div-color {
  display: flex;
}
.div-color > div {
  flex: 1;
}
.div-color .text {
  /* border: 1px solid #000; */
  margin: 400px 50px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 60px;
}
.div-color > div:first-child h4 {
  text-align: center;
  line-height: 24px;
}

.color-chart {
  scale: 50%;
}

.step {
  box-shadow: 0 2px 5px var(--grey);
  border-radius: 15px;
  height: 200px;
  width: 350px;
  padding: 20px;
  margin: 20px 0;
  color: gray;
  line-height: 16px;
}
</style>
