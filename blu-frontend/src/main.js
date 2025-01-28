import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'
import store from './store/';

const app = createApp(App);
app.use(store);
app.use(router);

=======
import store from './store';
import router from './router'

const app = createApp(App);
app.use(store)
app.use(router)
>>>>>>> main
app.mount('#app')
