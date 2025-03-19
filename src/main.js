import './assets/main.css'

import VueCookies from 'vue-cookies'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAngleDoubleDown, faEnvelope, faPaintRoller } from '@fortawesome/free-solid-svg-icons'

library.add(faPaintRoller, faAngleDoubleDown, faEnvelope)

const app = createApp(App)

app.use(router)

app.use(VueCookies)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
