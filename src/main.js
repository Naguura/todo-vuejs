import { createApp } from 'vue'
import App from './App.vue'
//import Home from './components/Home.vue'
import router from './router.js'
import { store } from './store/store.js'

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')