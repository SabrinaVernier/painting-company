<!-- eslint-disable no-undef -->
<script setup>
import { ref } from 'vue'

const messagesList = ref($cookies.get('messagesList') || [])
// console.log(messagesList.value)

const numOfMessages = ref(messagesList.value.length)
// console.log(numOfMessages)

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
    <div class="container div-login">
      <div class="absolute">
        <RouterLink :to="{ name: 'login' }"
          ><font-awesome-icon :icon="['fas', 'envelope']"
        /></RouterLink>
        <div class="num-of-messages">{{ numOfMessages }}</div>
      </div>

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
      <h2 v-if="numOfMessages === 0">Vous n'avez aucun message</h2>
      <h2 v-else>
        Vous avez {{ numOfMessages }} {{ numOfMessages === 1 ? 'message' : 'messages' }}
      </h2>

      <div>
        <div class="messages titles">
          <!-- <section>ID</section> -->
          <section>NOM</section>
          <section>EMAIL</section>
          <section>TELEPHONE</section>
          <section class="message-reset">
            <p>MESSAGE</p>
            <p @click="messagesList = [] && $cookies.remove('messagesList')">effaçer tout</p>
          </section>
        </div>

        <div class="messages list" v-for="message in messagesList" :key="message">
          <!-- <section>{{ message.id }}</section> -->
          <section>{{ message.name }}</section>
          <section>{{ message.email }}</section>
          <section>{{ message.phone }}</section>
          <section>" {{ message.message }} "</section>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 40px 0;
  background-image: url('../assets/Imgs/B-fond-gris.jpg');
}

.div-login {
  width: fit-content;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 10px 10px 10px;
}
.info-message {
  color: var(--orange);
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
  border: 3px groove var(--blue);
  border-radius: 10px;
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

.list > section:first-child {
  font-weight: bold;
}

.list > section:last-child {
  color: var(--dark-grey);
}

.message-reset {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
/* ---------------- */
.absolute {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px double rgb(239, 231, 231);
  background-color: white;
  position: fixed;
  top: 150px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.absolute svg {
  color: var(--blue);
  font-size: 25px;
}

.num-of-messages {
  position: absolute;
  top: 8px;
  right: 5px;
  background-color: red;
  color: white;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>
