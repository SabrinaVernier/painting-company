<!-- eslint-disable no-undef -->
<script setup>
import { messagesExample } from '@/assets/Utils/Array'
import { ref, inject } from 'vue'

const messagesList = ref($cookies.get('messagesList') || [])
// console.log(messagesList.value)

const GlobalStore = inject('GlobalStore')

let numOfMessages = ref(messagesList.value.length + messagesExample.length)
console.log(numOfMessages.value)

const isAdmin = ref($cookies.get('adminInfo') || false)

const identifier = ref('fab&fan')
const password = ref('21JUIN2025')
const isSubmitting = ref(false)
let infoMessage = ref('')
let action = ref('')
const responseReset = ref(false)
const isInput = ref(false)

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

const isReset = () => {
  isInput.value = true
  action.value = 'effacé ?'
}

// effaçer un message----------------------
const resetOneMsg = (message) => {
  for (let i = 0; i < messagesList.value.length; i++) {
    // console.log('messagesList[i]', messagesList.value[i])
    if (message.email === messagesList.value[i].email) {
      messagesList.value.splice(i, 1)
      $cookies.remove('messagesList')
      $cookies.set('messagesList', messagesList.value)
    }
  }
  infoMessage.value = 'Votre message a bien été effacé'
  numOfMessages.value = messagesList.value.length

  GlobalStore.updateNumber(numOfMessages.value)
  responseReset.value = false
  isInput.value = false
  action.value = ''
}

// effaçer tous les messages---------------
const resetMsg = () => {
  messagesExample.slice(0, messagesExample.length)
  messagesList.value = []
  $cookies.remove('messagesList')
  numOfMessages.value = 0
  GlobalStore.updateNumber(numOfMessages.value)
  infoMessage.value = 'Vos messages ont bien été effacé'
}
</script>

<template>
  <main>
    <div class="container div-login">
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
            <p @click="resetMsg">effaçer tout</p>
          </section>
        </div>

        <div class="messages list" v-for="message in messagesList" :key="message">
          <!-- <section>{{ message.id }}</section> -->
          <section @click="isInput = false">{{ message.name }}</section>
          <section @click="isInput = false">{{ message.email }}</section>
          <section @click="isInput = false">{{ message.phone }}</section>
          <section class="clear-input">
            <p>" {{ message.message }} "</p>

            <div>
              <input v-if="!isInput" type="checkbox" @input="isReset" />
              <div v-else>
                <div>{{ action }}</div>
                <label for="oui"
                  >Oui
                  <input
                    type="radio"
                    id="oui"
                    name="reset"
                    value="true"
                    v-model="responseReset"
                    @input="resetOneMsg(message)"
                /></label>

                <label for="non"
                  >Non
                  <input type="radio" id="non" name="reset" value="false" v-model="responseReset"
                /></label>
              </div>
            </div>
          </section>
        </div>

        <div class="messages list" v-for="message in messagesExample" :key="message">
          <section><span>(exemple) </span>{{ message.name }}</section>
          <section><span>(exemple) </span>{{ message.email }}</section>
          <section><span>(exemple) </span>{{ message.phone }}</section>
          <section><span>(exemple) </span>" {{ message.message }} "</section>
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

.list span {
  color: var(--orange);
}

.message-reset,
.clear-input {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
