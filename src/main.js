import { createApp } from 'vue'
import routes from './router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

createApp(App).use(routes).mount('#app')

