import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenToSquare, faTrashCan, faHome, faPizzaSlice, faPepperHot} from '@fortawesome/free-solid-svg-icons'

library.add(faPenToSquare)
library.add(faTrashCan)
library.add(faHome)
library.add(faPizzaSlice)
library.add(faPepperHot)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
