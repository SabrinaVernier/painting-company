<script setup>
import ButtonQuotation from './ButtonQuot.vue'
</script>

<template>
  <footer id="footer">
    <div class="container">
      <section id="contact">
        <div>
          <h5>Nous contacter</h5>
          <p>Fanny & Fabrice</p>
          <p>06-83-31-45-12</p>
        </div>

        <div class="button a"><ButtonQuotation /></div>

        <div>
          <h5>GAU Peinture</h5>
          <p>12 route de Colombiers</p>
          <p>34170 LESPIGNAN</p>
          <p class="small-p">siret 89177480400019</p>
          <p class="small-p">Paiement : espèce, chèque, virement</p>
        </div>
      </section>

      <section>
        <p>
          Réalisé par
          <a href="https://github.com/SabrinaVernier" target="_blank"> Sabrina Vernier </a> avec
          <a href="https://vuejs.org/" target="_blank"> Vuejs.</a>
        </p>
      </section>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: fit-content;
  background-color: rgb(183, 234, 232);
}
.container {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  /* border: 1px solid #000; */
  padding: 20px 0;
  width: 100%;
  display: flex;
}
.container > section:last-child {
  justify-content: center;
  align-items: center;
  flex: 1;
}

.container > section:first-child {
  flex: 2;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid var(--grey);
}
a {
  font-size: 16px;
  text-decoration: none;
  color: var(--blue);
  font-weight: bold;
}
p {
  padding: 5px;
}
.small-p {
  font-size: 12px;
}
.button {
  margin-top: 20px;
  align-self: center;
}
</style>
