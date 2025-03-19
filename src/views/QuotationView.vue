<!-- eslint-disable no-undef -->
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

$cookies.remove('adminInfo')

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const quotationInfos = ref($cookies.get('messagesList') || [])
const isSubmitting = ref(false)
let infoMessage = ref('')

const handleSubmit = () => {
  isSubmitting.value = true

  if (!name.value || !email.value || !phone.value || !message.value) {
    isSubmitting.value = false
    infoMessage.value = 'Veuillez remplir tous les champs'
    return
  } else {
    quotationInfos.value.push({
      // id: quotationInfos.value.length + 1,
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    })

    // console.log('id>>>>', quotationInfos.value.length + 1)

    // suppression du cookie (sa valeur est enregistrée dans quotationInfos.value)
    $cookies.remove('messagesList')

    // création d'un nouveau cookie avec la nouvelle valeur
    $cookies.set('messagesList', quotationInfos.value)

    isSubmitting.value = false
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
    infoMessage.value = 'Votre demande de devis a bien été envoyée'
    console.log(quotationInfos.value)
  }
}
</script>

<template>
  <main id="quotationview">
    <div class="container">
      <h1>Demande de devis</h1>

      <form @submit.prevent="handleSubmit">
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          v-model="name"
          @input="infoMessage = ''"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          v-model="email"
          @input="infoMessage = ''"
          required
        />

        <label for="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Votre téléphone"
          v-model="phone"
          @input="infoMessage = ''"
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
          @input="infoMessage = ''"
          required
        ></textarea>

        <div class="buttons">
          <button type="button" class="login">
            <RouterLink :to="{ name: 'login' }">LOGIN Admin</RouterLink>
          </button>

          <button v-if="!infoMessage && !isSubmitting">Envoyer</button>
          <button v-else-if="!infoMessage && isSubmitting">Envoi de la demande...</button>
          <p v-else class="info-message">{{ infoMessage }}</p>
        </div>

        <div class="back-home">
          <RouterLink :to="{ name: 'home' }">Retour à la page d'accueil</RouterLink>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url('../assets/Imgs/A-fanny-enduit.jpg');
  /* background-repeat: repeat no-repeat; */
  background-size: 50%;
  opacity: 0.9;
  height: fit-content;
  padding-bottom: 30px;
}

h1 {
  padding: 50px;
  text-shadow: 0 0 10px white;
}
form {
  box-shadow: 0 2px 5px var(--dark-grey);
  border-radius: 10px;
  background-color: white;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
}

form input,
form textarea {
  width: 400px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #000;
}
form input {
  height: 40px;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

form a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

button {
  color: white;
  font-size: 16px;
  background-color: var(--blue);
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  margin-top: 20px;
  align-self: end;
}
button:hover {
  scale: 120%;
}

.info-message {
  font-size: 16px;
  color: var(--orange);
}

/* ------ */
.back-home {
  align-self: center;
  margin-top: 50px;
}
a {
  color: var(--blue);
}
</style>
