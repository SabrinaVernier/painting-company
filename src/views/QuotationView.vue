<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const quotationInfos = ref([])
const isSubmitting = ref(false)
let infoMessage = ref('')

const handleSubmit = () => {
  isSubmitting.value = true

  if (!firstname.value || !lastname.value || !email.value || !phone.value || !message.value) {
    isSubmitting.value = false
    infoMessage.value = 'Veuillez remplir tous les champs'
    return
  } else {
    quotationInfos.value.push({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    })

    isSubmitting.value = false
    firstname.value = ''
    lastname.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
    infoMessage.value = 'Votre demande de devis a bien été envoyée'
    console.log(quotationInfos.value)
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Demande de devis</h1>

      <form @submit.prevent="handleSubmit">
        <label for="firstname">Nom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Votre nom"
          v-model="firstname"
          required
        />

        <label for="lastname">Prénom</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Votre prénom"
          v-model="lastname"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          v-model="email"
          required
        />

        <label for="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Votre téléphone"
          v-model="phone"
          required
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          placeholder="Bonjour, je souhaiterais ..."
          v-model="message"
          required
        ></textarea>

        <button v-if="!infoMessage">Envoyer</button>
        <p v-else>{{ infoMessage }}</p>
      </form>
      <div class="back-home">
        <RouterLink :to="{ name: 'home' }">Retour à la page d'accueil</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  /* background-color: var(--light-grey); */
  background-image: url('../assets/Imgs/A-fanny-enduit.jpg');
  opacity: 0.8;
}
h1 {
  padding: 50px;
}
form {
  box-shadow: 0 2px 5px var(--dark-grey);
  border-radius: 10px;
  background-color: white;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
}

form input,
form textarea {
  width: 400px;
  height: 30px;
  padding: 5px;
}

button {
  color: white;
  background-color: var(--blue);
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  margin-top: 20px;
  align-self: end;
}

/* ------ */
.back-home {
  text-align: end;
  margin-top: 50px;
}
a {
  color: var(--blue);
}
</style>
