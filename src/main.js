import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import Vuex from 'vuex'


createApp(App).use(store).use(Vuex).mount('#app')
