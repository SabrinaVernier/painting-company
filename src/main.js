/* eslint-disable no-undef */
import './assets/main.css'

import VueCookies from 'vue-cookies'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAngleDoubleDown, faEnvelope, faPaintRoller } from '@fortawesome/free-solid-svg-icons'

library.add(faPaintRoller, faAngleDoubleDown, faEnvelope)

const app = createApp(App)

app.use(router)

// ---provider----

const messagesList = ref($cookies.get('messagesList') || [])

const numberMessages = ref(messagesList.value.length)

const updateNumber = (num) => {
  numberMessages.value = num
}

app.provide('GlobalStore', { numberMessages, updateNumber })

app.use(VueCookies)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
