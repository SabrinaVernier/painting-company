<!-- eslint-disable no-undef -->
<script setup>
import { ref } from 'vue'

import { servicesArray, stepsProject } from '@/assets/Utils/Array'

import ColorChart from '@/components/ColorChart.vue'
import ButtonQuotation from '../components/ButtonQuot.vue'
import ThreePoint from '@/components/ThreePoint.vue'

$cookies.remove('adminInfo')

const displayImage1 = ref(false)
const displayImage2 = ref(false)
const displayImage3 = ref(false)
const displayImage4 = ref(false)
const displayImage5 = ref(false)
const displayImage6 = ref(false)
const displayImage7 = ref(false)
const displayImage8 = ref(false)

const displayBloc = (num) => {
  displayImage1.value = false
  displayImage2.value = false
  displayImage3.value = false
  displayImage4.value = false
  displayImage5.value = false
  displayImage6.value = false
  displayImage7.value = false
  displayImage8.value = false
  if (num === 1) {
    displayImage1.value = true
  }
  if (num === 2) {
    displayImage2.value = true
  }
  if (num === 3) {
    displayImage3.value = true
  }
  if (num === 4) {
    displayImage4.value = true
  }
  if (num === 5) {
    displayImage5.value = true
  }
  if (num === 6) {
    displayImage6.value = true
  }
  if (num === 7) {
    displayImage7.value = true
  }
  if (num === 8) {
    displayImage8.value = true
  }
}
</script>

<template>
  <main id="homeview">
    <div class="container">
      <div>
        <h1>Gau Peinture</h1>
        <h3>(Travaux de peinture et vitrerie)</h3>
      </div>

      <section class="presentation" id="home">
        <div class="div-img">
          <img src="../assets/Imgs/A-capture-fabrice.png" alt="Fabrice" />

          <p class="text-above-img">
            "Le professionnalisme et le sérieux de Fabrice vous apportera une certaine sérénité dans
            vos projets. <br />
            Fabrice s'occupe de tout..."
          </p>
        </div>
        <div class="text">
          <h5>Bienvenue sur notre nouveau site internet !</h5>
          <p class="justify">
            Peinture en intérieur, peinture en extérieur, ravalement de façade, travaux de
            revêtement mural ou de sols ? Ne cherchez plus, c’est
            <span>Gau Peinture</span>. Artisan peintre depuis plus de 15 ans, Fabrice & Fanny GAU
            sont à votre service pour vos futurs travaux de peinture en Occitanie et plus
            particulièrement dans l'Héraut(34) et l'Aude(11).

            <span>Gau Peinture</span> intervient chez les particuliers, les professionnels
            (commerces, bureaux, …) et auprès des collectivités (école, crèche, salle municipale…).
          </p>
          <p>
            N’hésitez pas à nous <a href="#contact">contacter</a> <br />
            À bientôt sur votre chantier !
          </p>
        </div>

        <div class="div-img">
          <img src="../assets/Imgs/A-capture-fanny.png" alt="Fanny" />

          <p class="text-above-img">
            "Avec Fanny, c'est la joie de vivre assurée ! Rigueur et persévérance sont ses maîtres
            mots!!! <br />
            Fanny apportera une touche féminine à vos projets."
          </p>
        </div>
      </section>

      <ThreePoint />

      <section class="imgs">
        <h2>Travaux de peinture extérieure</h2>
        <div>
          <img
            class="first-img"
            src="../assets/Imgs/FB_IMG_1742288937801.jpg"
            alt="maison chantier finie"
          />
          <div>
            <div class="text">
              <h2>Ravalement de façade avec <span>GAU Peinture</span></h2>
              <p>
                <span>Gau Peinture</span> redonne vie à vos extérieurs en utilisant des peintures de
                qualité supérieure alliées à des techniques de ravalement modernes : durabilité et
                esthétique, la garantie <span>GAU Peinture</span>. Qu’il s’agisse d’un ravalement de
                façade (nettoyage, réfection, réparation éventuelle, rénovation des murs de façade)
                ou de travaux de peinture extérieure pour un embellissement,
                <span>GAU Peinture</span> assure un travail de qualité et dans le respect des
                délais. Il saura vous conseiller sur le type de revêtement et sur la couleur
                définitive.
              </p>

              <div class="button a"><ButtonQuotation /></div>
            </div>
            <img
              class="unfinished-house"
              src="../assets/Imgs/FB_IMG_1742288932572.jpg"
              alt="maison chantier échaffaudage"
            />
          </div>
        </div>
      </section>

      <ThreePoint />

      <section class="div-section">
        <div class="description">
          <h2 class="white">Vos travaux requièrent les services d'un peintre décorateur ?</h2>

          <div class="text">
            <p>
              => L'offre de prestations de notre entreprise inclut la peinture de façade, intérieure
              ou de mur extérieur ainsi que le crépissage de maison. Divers types de peintures
              (badigeon à la chaux et peinture essuyée, à effet ou électrostatique) mais également
              d'enduit projeté sont disponibles pour répondre à vos besoins.
            </p>

            <div><font-awesome-icon :icon="['fas', 'angle-double-down']" /></div>

            <div class="a"><ButtonQuotation /></div>
          </div>
        </div>

        <div class="services-list">
          <h2 class="strong">Prestations proposées par l'Entreprise</h2>

          <div class="div-list">
            <p v-for="service in servicesArray" :key="service">
              <font-awesome-icon :icon="['fas', 'paint-roller']" /> {{ service }}
            </p>
          </div>
        </div>
      </section>

      <ThreePoint />

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

            <div class="a"><ButtonQuotation /></div>
          </div>
        </div>

        <div class="div-steps">
          <div class="step" v-for="step in stepsProject" :key="step">
            <h4 :style="{ color: step.color }">{{ step.title }}</h4>
            <div>{{ step.icon }}</div>

            <p>{{ step.description }}</p>
          </div>
        </div>
      </section>

      <ThreePoint />

      <section class="model">
        <h2>Crépissage? Peinture électrostatique ? On vous explique ...</h2>

        <div>
          <ul>
            <li>
              <h4 @click="displayBloc(1)">=>>> <em>Peinture Essuyée</em></h4>
              <div v-if="displayImage1">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-peinture-essuyée.jpg" alt="p-essuyée" />
                  <img src="../assets/Imgs/P-peinture-essuyee3.webp" alt="p-essuyee3" />
                  <img src="../assets/Imgs/P-peinture-essuyee2.jpg" alt="p-essuyée2" />
                </div>
                <p>
                  La peinture à l'essuyé consiste à étirer, à tapoter ou à frotter la peinture avec
                  une éponge pour créer un effet décoratif. Cette technique s'utilise uniquement
                  avec de la peinture acrylique. Le rendu de la peinture à l'essuyé c'est une
                  question de technique ! L'effet final à l'essuyé est different et résulte des
                  mouvements que nous réalisons lors de l'application. On peut ainsi créer un rendu
                  nuage, ou un effet tamponné, un effet de mouvements plus large faisant penser à
                  des vagues, le tout dans une impression de transparence pleine de subtilité sur
                  les murs. La peinture à l'essuyé est une peinture légèrement satiné, le voile
                  déposé sur le mur donne une impression de profondeur par un effet de transparence.
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(2)">=>>> <em>Badigeon à la chaux</em></h4>
              <div v-if="displayImage2">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-badigeon-chaux.jpg" alt="badig-chaux" />
                  <img src="../assets/Imgs/P-badigeon-chaux2.jpg" alt="" />
                </div>
                <p>
                  Utilisés depuis des siècles, dotés d'une texture et d'un rôle intermédiaire entre
                  les peintures et les enduits, les badigeons permettent de créer une couche de
                  finition au rendu authentique sur les murs intérieurs ou extérieurs. Le badigeon à
                  la chaux va permettre de protéger les supports de façon durable : non filmogène,
                  sa perméabilité à la vapeur d'eau laisse respirer le support. Il peut être
                  appliqué en extérieur comme à l'intérieur, s'applique avec une brosse à badigeon.
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(3)">=>>> <em>Crépissage intérieur et extérieur</em></h4>
              <div v-if="displayImage3">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-crepissage-int.jpeg" alt="crepi-int" />
                  <img src="../assets/Imgs/P-crepissage-ext.webp" alt="crepi-ext" />
                </div>
                <p>
                  Le crépi assure deux fonctions : protéger et embellir les murs neufs ou anciens,
                  intérieurs ou extérieurs C'est une couche de finition appliquée sur la maçonnerie
                  des façades extérieures. Cette matière va créer le rendu final et l'aspect
                  décoratif des murs mais pas seulement. Il permet également une meilleure isolation
                  phonique ou thermique et il est surtout une protection contre les intempéries.
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(4)">=>>> <em>Enduit projeté</em></h4>
              <div v-if="displayImage4">
                <div>
                  <img src="../assets/Imgs/P-enduit-projeté.jpeg" alt="end-projeté" />
                </div>
                <p>
                  L'enduit est appliqué à l'aide d'une machine à projeter, l'enduit projeté offre un
                  aspect brut, qui laisse apparaître les granulés. Pour une finition projetée
                  écrasée, une taloche est utilisée dans un second temps pour lisser le gros du
                  grain et obtenir ainsi une finition plus soignée.
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(5)">=>>> <em>Peinture à effet</em></h4>
              <div v-if="displayImage5">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-peinture-effet-beton.webp" alt="e-beton" />
                  <img src="../assets/Imgs/P-peinture-effet-rouille.jpeg" alt="e-rouille" />
                  <img src="../assets/Imgs/P-peinture-effet-sablé.jpg" alt="e-sable" />
                  <img src="../assets/Imgs/P-peinture-effet-tadelakt.webp" alt="e-tade" />
                  <img src="../assets/Imgs/P-peinture-effet-velour.jpeg" alt="e-velour" />
                </div>
                <p>
                  La peinture à effet est une peinture décorative qui apporte du volume, de la
                  couleur ou une apparence originale à un mur. Elle se décline en de nombreux styles
                  et finitions. Selon la qualité de la peinture à effet choisie, la pose sera
                  spécifique, notamment avec un outil précis pour lui conférer son aspect final
                  (brosse, taloche, éponge, spatule).
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(6)">=>>> <em>Peinture Electrostatique</em></h4>
              <div v-if="displayImage6">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-peinture-electrostatique.jpeg" alt="elec-stat1" />
                  <img src="../assets/Imgs/P-peinture-electrostatique2.jpg" alt="elec-stat2" />
                </div>
                <p>
                  Une peinture électrostatique demeure un moyen fiable de recouvrir rapidement une
                  surface métallique. Elle permet ainsi de peindre des formes très complexes. En
                  effet, une méthode traditionnelle à la brosse, au pinceau, au rouleau ou au
                  pistolet n'assure pas le même résultat. En plus, ce procédé permet un séchage
                  beaucoup plus rapide. Il offre également une finition particulièrement uniforme
                  pour un excellent tendu après séchage.
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(7)">=>>> <em>Peinture Sol</em></h4>
              <div v-if="displayImage7">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-Peinture-sol-béton.jpg" alt="s-beton" />
                  <img src="../assets/Imgs/P-Peinture-sol-résine.jpeg" alt="s-resine" />
                </div>
                <p>
                  Généralement composée de résine époxy, de solvant et de durcisseur, de pigments et
                  d'additifs , cette peinture comprend de nombreux types de revêtements de sol, tels
                  que des peintures autolissantes sans solvant, des peintures anticorrosion, des
                  peintures résistantes à l'usure, des peintures antistatiques et des peintures à
                  base d'eau.
                </p>
              </div>
            </li>
            <li>
              <h4 @click="displayBloc(8)">=>>> <em>Revêtement Mur & Sol</em></h4>
              <div v-if="displayImage8">
                <div class="caroussel">
                  <img src="../assets/Imgs/P-revetement-sol-briquette.webp" alt="" />
                  <img src="../assets/Imgs/P-revetement-sol-carrelage.webp" alt="" />
                  <img src="../assets/Imgs/P-revetement-sol-ballatum.jpg" alt="" />
                  <img src="../assets/Imgs/P-revetement-sol-parquet.jpg" alt="" />
                </div>
                <p>
                  Les revêtements de sols et de murs sont des matériaux de construction concernés
                  par les problématiques de sécurité (glissance), d'esthétique, de confort
                  thermique, d'acoustique et de santé (humidité, qualité de l'air intérieur). Sur
                  les photos et dans l'ordre, vous pouvez observerdifférents revêtements :
                  briquettes, carrelage, balatum, parquet.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ThreePoint />
    </div>
  </main>
</template>
<style scoped>
/* main {
  background-color: var(--green-blue);
} */

.white {
  color: white;
}

section {
  /* border: 1px solid red; */
  /* border-bottom: 4px double var(--grey); */

  margin-top: 30px;
  margin-bottom: 50px;
  padding: 50px 10px;
  background-color: #fff;
}
/* ---presentation--- */
.presentation {
  display: flex;
  align-items: center;
}

.presentation .text {
  border: 5px groove var(--green-blue);
  /* box-shadow: 0 0 5px var(--grey); */
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 30px;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.presentation p {
  line-height: 20px;
  text-align: center;
}

.presentation .justify {
  text-align: justify;
}

span {
  font-family: 'Rock Salt', serif;
  color: var(--orange);
}

.presentation a {
  color: var(--blue);
}

.div-img {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.div-img .text-above-img {
  color: var(--blue);
}

.presentation img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 5px var(--dark-grey);
  border: 3px double white;
  /* transform: scale(-1); */
  filter: grayscale(100%);
}

/* ---imgs--- */
.imgs > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
}

.imgs > div > div {
  display: flex;
}

.imgs img {
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 2px 2px 7px var(--dark-grey);
}
.imgs .text {
  padding: 20px;
}
.imgs .text > p {
  margin: 0 20px;
  line-height: 25px;
  text-align: justify;
}
.unfinished-house {
  width: 50%;
}

.imgs .button {
  margin-top: 100px;
  text-align: center;
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
  max-width: 260px;
  max-height: 420px;
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

/* ---model--- */
.model li > h4 {
  border-top: 1px dashed var(--grey);
  padding-top: 40px;
}

.model em {
  font-style: italic;
  color: var(--blue);
  text-decoration: underline;
  cursor: pointer;
}

.model p {
  font-size: 16px;
  line-height: 20px;
  font-style: italic;
  color: var(--dark-grey);
}
.model > div > ul > li {
  /* border: 1px solid #000; */
  padding: 40px;
}
.model img {
  height: 300px;
  border-radius: 10px;
}

.model li > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.model li > div > div {
  display: flex;
  border-radius: 20px;
  margin: 10px 0;
}

.caroussel {
  overflow: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--blue) var(--green-blue);
}
</style>
