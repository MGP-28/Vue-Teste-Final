import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia'
import router from './router'
import { useContactsStore } from './stores/Contacts'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

const contactsStoreRef = useContactsStore()
contactsStoreRef.loadFromLocalStorage()