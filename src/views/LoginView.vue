<!-- eslint-disable no-undef -->
<script setup>
import { ref } from 'vue'

const messagesList = ref($cookies.get('messagesList') || [])

const isAdmin = ref($cookies.get('adminInfo') || false)

const identifier = ref('fab&fan')
const password = ref('21JUIN2025')
const isSubmitting = ref(false)
let infoMessage = ref('')

const handleSubmit = () => {
  isSubmitting.value = true

  if (!identifier.value || !password.value) {
    isSubmitting.value = false
    infoMessage.value = 'Veuillez remplir tous les champs'
    return
  } else {
    if (identifier.value === 'fab&fan' && password.value === '21JUIN2025') {
      isAdmin.value = true
      infoMessage.value = 'Vous êtes connecté'

      $cookies.set('adminInfo', isAdmin.value)
    } else {
      infoMessage.value = 'Identifiant ou mot de passe incorrect'
    }

    isSubmitting.value = false
    identifier.value = ''
    password.value = ''
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h2 class="hello" v-if="isAdmin">Bonjour Fabrice & Fanny !</h2>

      <div v-else>
        <h2>Veuillez-vous connecter pour accéder à vos messages</h2>

        <form @submit.prevent="handleSubmit">
          <label for="identifier">Identifiant</label>
          <input
            type="text"
            id="identifier"
            name="identifier"
            placeholder="Votre identifiant"
            v-model="identifier"
            @input="infoMessage = ''"
            required
          />
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Votre mot de passe"
            v-model="password"
            @input="infoMessage = ''"
            required
          />
          <button>Se connecter</button>
        </form>
      </div>

      <p class="info-message">{{ infoMessage }}</p>
    </div>

    <div class="container div-messages" v-if="isAdmin">
      <h2>Vos Messages</h2>

      <div>
        <div class="messages titles">
          <section>NOM</section>
          <section>EMAIL</section>
          <section>TELEPHONE</section>
          <section>MESSAGE</section>
        </div>

        <div class="messages list" v-for="message in messagesList" :key="message">
          <section>{{ message.name }}</section>
          <section>{{ message.email }}</section>
          <section>{{ message.phone }}</section>
          <section>{{ message.message }}</section>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 40px 0;
  background: linear-gradient();
}
.info-message {
  color: red;
}

.hello {
  font-family: 'Rock Salt', serif;
}

/* -------- */
.messages {
  width: 100%;
  /* margin: 1rem 0; */
  padding: 1rem;
  border: 1px solid var(--blue);
  /* border-radius: 5px; */
  background-color: #f9f9f9;
  display: flex;
}

.messages > section:not(:last-child) {
  flex: 1;
}
.messages > section:last-child {
  flex: 2;
}

.div-messages > div {
  border-radius: 5px;
}

.div-messages > div > div:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.titles {
  font-weight: bold;
  border-width: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  background-color: var(--blue);
}
.list {
  border-top: unset;
  height: fit-content;
}
</style>
