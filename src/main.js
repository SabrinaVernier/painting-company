import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faAngleDoubleDown,
  faPaintRoller,
  faHandshakeAltSlash,
} from '@fortawesome/free-solid-svg-icons'

library.add(faPaintRoller, faAngleDoubleDown)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
